import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const color = "#000";
export const links: LinkProps[] = [
	{
		href: "https://gdsc.community.dev/farmingdale-state-college/",
		icon: <CiGlobe size={20} color={color} />,
	},
	{
		href: "https://www.instagram.com/gdsc.farmingdale/",
		icon: <FaInstagram size={20} color={color} />,
	},
	{
		href: "https://github.com/GDSC-FSC",
		icon: <FaGithub size={20} color={color} />,
	},
	{
		href: "https://www.linkedin.com/groups/12917927/",
		icon: <FaLinkedin size={20} color={color} />,
	},
];
