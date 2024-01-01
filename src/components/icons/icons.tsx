import { cn } from "@/src/lib/utils"
import { Github } from 'lucide-react';
import {
  GlobeIcon,
  InstagramIcon,
  GDSCIcon,
  ShareIcon,
  CloseFilledIcon,
  SearchIcon,
  Logo
} from "./components"

export const Icons: IconsProps = {
  logo: ({ className }: SVGIconProps) => (
    <>
      <Logo size={`0`} className={cn('', className)} props={{
        
      }} />
    </>
  ),
  closeFilled: ({ className, props }: SVGIconProps) => (
    <>
      <CloseFilledIcon className={cn('', className)} {...props} />
    </>
  ),
  search: ({ className, props }: SVGIconProps) => (
    <>
      <SearchIcon className={cn('', className)} {...props} />
    </>
  ),
  webIcons: {
    instagram: ({ className, props }: SVGIconProps) => (
      <>
        <InstagramIcon className={cn('', className)} {...props} />
      </>
    ),
    globe: ({ className, props }: SVGIconProps) => (
      <>
        <GlobeIcon className={cn('', className)} {...props} />
      </>
    ),
    share: ({ className, props }: SVGIconProps) => (
      <>
        <ShareIcon className={cn('', className)} {...props} />
      </>
    ),
    gitHub: ({ className, props }: SVGIconProps) => (
      <>
        <Github className={cn('', className)} {...props} />
      </>
    ),
    gdsc: ({ className, props }: SVGIconProps) => (
      <>
        <GDSCIcon className={cn('', className)} {...props} />
      </>
    ),
  }
}