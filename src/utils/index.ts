import { Icons } from '@/components/icons/icons'
// import { toast } from 'sonner';
// import { sendEmail } from '@/lib/send-emails';

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