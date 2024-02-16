import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar"
import { useCurrentUser } from "@/src/core/auth"
import { CustomPopover } from "../custom"
export function UserAvatar() {
  const user  = useCurrentUser()
  return (
    <CustomPopover side="bottom" >
      <Avatar
        className={`
          cursor-pointer relative flex items-center justify-center
        `}
      >
        <AvatarImage src={`${user?.photoURL ?? ``}`} alt={`${user?.displayName || ''}`} />
        <AvatarFallback>
          {user ? user.displayName?.charAt(0) : 'U'}
        </AvatarFallback>
      </Avatar>
    </CustomPopover>
  )
}
