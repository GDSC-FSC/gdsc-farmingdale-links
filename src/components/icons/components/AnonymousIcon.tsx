import { cn } from "@/src/lib/utils";
export const AnonymousIcon: React.FC<SVGIconProps> = ({ className, size, props }): JSX.Element => {
  return (
    <svg
      role="img"
      viewBox="0 0 32 32"
      className={cn(`size-${size}`, className)}
      {...props}
    >
      <title>Anonymous</title>
      <circle
        fill="none"
        stroke="#999"
        cx="16"
        cy="16"
        r="14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <circle
        fill="none"
        stroke="#999"
        cx="16"
        cy="13"
        r="5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
        fill="none"
        stroke="#999"
        d="M5.4 25.1c1.8-4.1 5.8-7 10.6-7s8.9 2.9 10.6 7"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
    </svg>
  );
}
