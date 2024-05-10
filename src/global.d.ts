type sizes =
	| "0"
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "10"
	| "11"
	| "12"
	| "14"
	| "16"
	| "20"
	| "24"
	| "28"
	| "32"
	| "36"
	| "40"
	| "44"
	| "48"
	| "52"
	| "56"
	| "60"
	| "64"
	| "72"
	| "80"
	| "96";

type TwSize<Dimension extends string> = Dimension extends `size-${infer N}`
	? {
			dimension: N;
		}
	: never;

type SVGIconProps = {
	className?: string;
	props?: React.SVGProps<SVGSVGElement>;
	size?: sizes | "4";
};

interface ContactFormProps {
	name: string;
	email: string;
	subject: string;
	message: string;
}

type SVGIconParams = ({ className, size, props }: SVGIconProps) => JSX.Element;

type IconsProps = {
	logo: SVGIconParams;
	webIcons: {
		gdsc: SVGIconParams;
	};
	socialIcons: {
		linkedIn: SVGIconParams;
		instagram: SVGIconParams;
		gitHub: SVGIconParams;
	};
	functionalIcons: {
		share: SVGIconParams;
		search: SVGIconParams;
		close: SVGIconParams;
		email: SVGIconParams;
		globe: SVGIconParams;
		map: SVGIconParams;
	};
	auth: {
		anonymous: SVGIconParams;
		google: SVGIconParams;
	};
};

interface User {
	id: string;
	name: string;
	email: string;
	password?: string;
	avatar: string;
}

interface UserContextInterface {
	user: User;
	setUser: (user: User) => void;
}

type UserProviderProps = {
	children: React.ReactNode;
};

interface FormSubmitProps {
	children: React.ReactNode;
	isDisabled?: boolean;
	className?: string;
	variant?:
		| "link"
		| "default"
		| "outline"
		| "destructive"
		| "secondary"
		| "ghost";
}

interface PopoverProps {
	children: React.ReactNode;
	side?: "left" | "right" | "top" | "bottom";
	align?: "start" | "center" | "end";
	sideOffset?: number;
}

interface FormInputProps {
	id: string;
	label?: string;
	type?: string;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	errors?: FieldErrors;
	className?: string;
	defaultValue?: string;
	onBlur?: () => void;
}

interface ContactFormProps {
	name: string;
	email: string;
	subject: string;
	message: string;
}

interface SidebarProps {
	storageKey?: string;
}

interface HintProps {
	children: React.ReactNode;
	description: string;
	side?: "left" | "right" | "top" | "bottom";
	sideOffset?: number;
}

interface NavItemProps {
	isExpanded: boolean;
	isActive: boolean;
	onExpand: (id: string) => void;
}

type Link = {
	name: string;
	path: string;
	icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
interface CustomButtonProps {
	isDisabled?: boolean;
	containerStyles?: string;
	textStyles?: string;
	link: string | undefined;
	title: string;
	share: boolean;
	handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface SearchState {
	open: boolean;
	setOpen: (open: boolean) => void;
}

interface EventsState {
	past: {
		pastEvents: Events[];
		setPastEvents: (pastEvents: Events[]) => void;
	};
	upcoming: {
		upcomingEvents: Events[];
		setUpcomingEvents: (upcomingEvents: Events[]) => void;
	};
}

interface LinksState {
	links: Links[];
	setLinks: (links: Links[]) => void;
}

type PrimitiveSemanticProps<E extends HTMLElement = HTMLElement> = {
	as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
	children?: ReactNode;
} & React.DetailedHTMLProps<React.HTMLAttributes<E>, E>;

interface ApiJsonResponse<T> {
	status: number;
	response?: T;
}

interface FooterProps {
	left: {
		socials: {
			socialHandles: {
				icon: React.ComponentType;
				aria: string;
				url: string;
			}[];
			contactHandles: {
				icon: React.ComponentType;
				aria: string;
				url: string;
			}[];
		};
	};
	middle: {
		title: string;
		url: string;
	}[];
	right: {
		component: React.ReactNode;
	};
}

interface LinkProps {
	href: string;
	icon: JSX.Element;
}

type Prettify<T> = {
	[K in keyof T]: T[K];
} & NonNullable<unknown>;

interface Links {
	id?: number;
	name: string;
	image: string;
	link: string;
	description: string;
}
