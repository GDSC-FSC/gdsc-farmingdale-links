import { Icons } from '@/src/components/icons/icons'
import { toast } from 'sonner';
// import { sendEmail } from '@/src/lib/send-emails';

export const navLinks: Link[] = [
  {
    name: "Home",
    path: "/",
    icon: Icons.webIcons.globe,
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/lemonade_ig/",
    icon: Icons.webIcons.instagram,
  },
  {
    name: "Email",
    path: "mailto:",
    icon: Icons.webIcons.share,
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/company/lemonade-ig/",
    icon: Icons.webIcons.share,
  },

]

export const buttonLinks: Link[] = [
  {
    name: "test1",
    path: "https://www.instagram.com/lemonade_ig/",
  },
  {
    name: "test2",
    path: "/",
  },
    {
    name: "test2",
    path: "/",
  },
    {
    name: "test2",
    path: "/",
  },
    {
    name: "test2",
    path: "/",
  },
];

// Wait for service
export const  handleSendEmail = () =>{
  try {
    // 
  } catch (error) {
    // 
  }
}

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