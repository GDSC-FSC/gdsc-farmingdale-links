import { cn } from "@/src/lib/utils"
import {
  AnonymousIcon as Anonymous,
  CloseFilledIcon as CloseFilled,
  EmailIcon as Email,
  GDSCIcon as GDSC,
  GitHubIcon as GitHub,
  GlobeIcon as Globe,
  GoogleIcon as Google,
  InstagramIcon as Instagram,
  LinkedInIcon as LinkedIn,
  LogoIcon as Logo,
  MapIcon as Map,
  SearchIcon as Search,
  ShareIcon as Share,
} from "./components"

export const Icons: IconsProps = {
  logo: ({ className, size, ...props }: SVGIconProps) => (
    <>
      <Logo size={size} className={cn('', className)} {...props} />
    </>
  ),
  webIcons: {
    gdsc: ({ className, size, ...props }: SVGIconProps) => (<>
      <GDSC size={size} className={cn('', className)} {...props} />
    </>)
  },
  socialIcons: {
    linkedIn: ({ className, size, ...props }: SVGIconProps) => (<>
      <LinkedIn size={size} className={cn('', className)} {...props} />
    </>),
    instagram: ({ className, size, ...props }: SVGIconProps) => (<>
      <Instagram size={size} className={cn('', className)} {...props} />
    </>),
    gitHub: ({ className, size, ...props }: SVGIconProps) => (<>
      <GitHub size={size} className={cn('', className)} {...props} />
    </>),
  },
  functionalIcons: {
    share: ({ className, size, ...props }: SVGIconProps) => (<>
      <Share size={size} className={cn('', className)} {...props} />
    </>),
    search: ({ className, size, ...props }: SVGIconProps) => (<>
      <Search size={size} className={cn('', className)} {...props} />
    </>),
    close: ({ className, size, ...props }: SVGIconProps) => (<>
      <CloseFilled size={size} className={cn('', className)} {...props} />
    </>),
    email: ({ className, size, ...props }: SVGIconProps) => (<>
      <Email size={size} className={cn('', className)} {...props} />
    </>),
    globe: ({ className, size, ...props }: SVGIconProps) => (<>
      <Globe size={size} className={cn('', className)} {...props} />
    </>),
    map: ({ className, size, ...props }: SVGIconProps) => (<>
      <Map size={size} className={cn('', className)} {...props} />
    </>)
  },
  auth: {
    anonymous: ({ className, size, ...props }: SVGIconProps) => (<>
      <Anonymous size={size} className={cn('', className)} {...props} />
    </>),
    google: ({ className, size, ...props }: SVGIconProps) => (<>
      <Google size={size} className={cn('', className)} {...props} />
    </>)
  }
}
