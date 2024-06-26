import { cn } from "@/src/lib/utils";
export const LogoIcon: React.FC<SVGIconProps> = ({
	className,
	size,
	props,
}): JSX.Element => {
	return (
		<svg
			width="512"
			height="512"
			viewBox="0 0 512 512"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden={true}
			className={cn(`w-${size} h-${size}`, className)}
			{...props}
		>
			<rect width="512" height="512" rx="256" fill="#0E0E0E" />
			<rect
				x="33"
				y="242.514"
				width="206.171"
				height="73"
				rx="36.5"
				transform="rotate(-29.497 33 242.514)"
				fill="#EA4336"
			/>
			<rect
				x="67.6865"
				y="207"
				width="206.171"
				height="73"
				rx="36.5"
				transform="rotate(30.1692 67.6865 207)"
				fill="#4286F5"
			/>
			<rect
				width="206.171"
				height="73"
				rx="36.5"
				transform="matrix(-0.864545 0.502555 0.502555 0.864545 444.705 207)"
				fill="#FABC05"
			/>
			<rect
				width="206.171"
				height="73"
				rx="36.5"
				transform="matrix(-0.870382 -0.492378 -0.492378 0.870382 481.391 242.514)"
				fill="#0D9D58"
			/>
			/
		</svg>
	);
};
