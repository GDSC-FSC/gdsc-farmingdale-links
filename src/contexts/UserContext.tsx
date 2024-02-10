import { auth } from '@/src/core/firebase'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { createContext, useState } from 'react'
import { toast } from 'sonner'

const defaultState: UserContextInterface = {
  user: {
    id: '',
    name: '',
    email: '',
    password: '',
    avatar: ''
  },
} as UserContextInterface

export const UserContext = createContext(defaultState)

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    email: '',
    password: '',
    avatar: ''
  })

  const onLogin = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider()).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        toast.success("Logged in successfully! 🎊");
      }).catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {

      toast.error("An unexpected error occurred during login");
      console.error(error);
    }
  };

  const onLogout = async () => {
    try {
      await signOut(auth);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Logged out successfully! 🎊");
      setUser({
        id: '',
        name: '',
        email: '',
        password: '',
        avatar: ''
      })
    } catch (error: any) {
      toast.error(`Logout error: ${error.message || new Error}`);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, onLogout, onLogin }}>
      {children}
    </UserContext.Provider>
  )
}
