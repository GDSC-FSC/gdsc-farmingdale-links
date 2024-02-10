import { toast } from 'sonner';

export async function apiJson<T>(path: string, method: string = 'GET', body: object | null = null): Promise<ApiJsonResponse<T>> {
    const payload: RequestInit = {
        headers: {
            "Content-Type": "application/json"
        },
        method: method
    }

    if (body !== null) {
        payload.body = JSON.stringify(body);
    }

    const response = await fetch(path, payload);
    const json = await response.json();

    if (response.status >= 400) {
        toast.error(json.message);
        console.error(json.message);
        return {
            status: response.status
        };
    }

    return {
        status: 200,
        response: json
    };
}
        // const addSong = await apiJson('/api/playlist/mine/' + character, 'POST', JSON.stringify({
        //     "access_token": token,
        //     "song_id": added_id
        // }))
        // if (addSong.status !== 200) {
        //     return;
        // }

        import { toast } from 'sonner';
import { auth } from '@/firebase/config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { TSignInSchema, TSignUpSchema } from '@/lib/auth';

export const useSignUpWithEmailPassword = async (data: TSignUpSchema) => {
  try {
    await createUserWithEmailAndPassword(auth, data.email, data.password);
    toast.success("Signed up successfully! 🎉");
  } catch (error: any) {
    console.error(error);
    toast.error(`Sign-up error: ${error.message || new Error}`);
  }
};

export const useSignInWithEmailPassword = async (data: TSignInSchema) => {
  try {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    console.log(data);
    toast.success("Logged in successfully! 🎉");
  } catch (error: any) {
    console.error(error);
    toast.error(`Sign-in error: ${error.message || new Error}`);
  }
};
