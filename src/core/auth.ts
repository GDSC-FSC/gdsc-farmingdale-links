/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  GoogleAuthProvider,
  User,
  UserCredential,
  getAuth,
  signInAnonymously,
  signInWithPopup,
  sendPasswordResetEmail,
  confirmPasswordReset
} from "firebase/auth";
import { atom, useAtomValue } from "jotai";
import { atomEffect } from "jotai-effect";
import { loadable } from "jotai/utils";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "./firebase";
import { toast } from "sonner";

export const currentUserValue = atom<User | null | undefined>(undefined);

export const currentUserListener = atomEffect((_get, set) => {
  return getAuth(app).onAuthStateChanged((user) => {
    set(currentUserValue, user);
  });
});

export const currentUserAsync = atom(async (get) => {
  get(currentUserListener);
  const user = get(currentUserValue);

  if (user === undefined) {
    const auth = getAuth(app);
    await auth.authStateReady();
    return auth.currentUser;
  } else {
    return user;
  }
});

export const currentUserLoadable = loadable(currentUserAsync);

export function useCurrentUser() {
  return useAtomValue(currentUserAsync);
}

export function useCurrentUserLoadable() {
  return useAtomValue(currentUserLoadable);
}

export function useSignIn(
  signInMethod: SignInMethod,
): [signIn: () => void, inFlight: boolean] {
  const navigate = useNavigate();
  const [inFlight, setInFlight] = useState(false);

  const signIn = useCallback(() => {
    let p: Promise<UserCredential> | null = null;

    if (signInMethod === "anonymous") {
      const auth = getAuth(app);
      p = signInAnonymously(auth);
    }

    if (signInMethod === "google.com") {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      provider.setCustomParameters({
        // loginHint: "",
        prompt: "consent",
      });
      p = signInWithPopup(auth, provider);
    }

    if (!p) throw new Error(`Not supported: ${signInMethod}`);

    setInFlight(true);
    p.then(() => {
      navigate("/")
      toast.success("Logged in successfully! 🎉");
    }).finally(() => setInFlight(false));
  }, [signInMethod, navigate]);

  return [signIn, inFlight] as const;
}

export function useSignOut(): [signOut: () => void, inFlight: boolean] {
  const navigate = useNavigate();
  const [inFlight, setInFlight] = useState(false);

  const signOut = useCallback(() => {
    const auth = getAuth(app);
    setInFlight(true);
    auth.signOut().then(() => {
      navigate("/")
      toast.success("Signed out successfully! 🎉");
    }).finally(() => setInFlight(false));
  }, [navigate]);

  return [signOut, inFlight] as const;
}

export const passwordReset = async (email: string) => {
  if (!email) return;
  const auth = getAuth(app);

  try {
    await sendPasswordResetEmail(auth, email);
    toast.success("Password reset email sent successfully! 🎉");
  } catch (error: any) {
    console.error(error);
    toast.error(`Password reset error: ${error.message || new Error}`);
  }
};

export const confirmThePasswordReset = async (oobCode: string, newPassword: string) => {
  if (!oobCode || !newPassword) return;
  const auth = getAuth(app);

  try {
    await confirmPasswordReset(auth, oobCode, newPassword);
    toast.success("Password reset successful! 🎉");
  } catch (error: any) {
    console.error(error);
    toast.error(`Password reset confirmation error: ${error.message || new Error}`);
  }
};

export type SignInMethod = "google.com" | "anonymous";
export const signout: SignOutMethod = `Sign out`;
type SignOutMethod = "Sign out";
