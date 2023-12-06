import { GlobeIcon, InstagramIcon } from '../components/icons/components/index'
import { toast } from 'sonner';
import { sendEmail } from '@/lib/send-emails';

export const navLinks: Link[] = [
  {
    name: "Home",
    path: "/",
    icon: GlobeIcon,
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/lemonade_ig/",
    icon: InstagramIcon,
  }
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
    
  } catch (error) {
    
  }
}