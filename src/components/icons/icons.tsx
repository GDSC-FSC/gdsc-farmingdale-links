import { cn } from "@/src/@/src/lib/utils"
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
  logo: ({ className, props }: LucideIconWrapperProps) => (
    <>
      <Logo className={cn('', className)} {...props} />
    </>
  ),
  closeFilled: ({ className, props }: LucideIconWrapperProps) => (
    <>
      <CloseFilledIcon className={cn('', className)} {...props} />
    </>
  ),
  search: ({ className, props }: LucideIconWrapperProps) => (
    <>
      <SearchIcon className={cn('', className)} {...props} />
    </>
  ),
  webIcons: {
    instagram: ({ className, props }: LucideIconWrapperProps) => (
      <>
        <InstagramIcon className={cn('', className)} {...props} />
      </>
    ),
    globe: ({ className, props }: LucideIconWrapperProps) => (
      <>
        <GlobeIcon className={cn('', className)} {...props} />
      </>
    ),
    share: ({ className, props }: LucideIconWrapperProps) => (
      <>
        <ShareIcon className={cn('', className)} {...props} />
      </>
    ),
    gitHub: ({ className, props }: LucideIconWrapperProps) => (
      <>
        <Github className={cn('', className)} {...props} />
      </>
    ),
    gdsc: ({ className, props }: LucideIconWrapperProps) => (
      <>
        <GDSCIcon className={cn('', className)} {...props} />
      </>
    ),
  }
}