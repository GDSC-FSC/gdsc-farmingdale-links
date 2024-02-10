"use client"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { UserContext } from "@/contexts/UserContext"
import { useContext } from "react"
import { CustomPopover } from "@/components/custom/Popover"

export function UserAvatar() {
  const { user } = useContext(UserContext)
  return (
    <CustomPopover side="bottom" >
      <Avatar
        className={`
          cursor-pointer
          relative
          flex
          items-center
          justify-center
        `}
      >
        <AvatarImage src={user ? user.avatar : `/assets/images/NoImage.jpg`} alt={`${user.name}`} />
        <AvatarFallback>
          {user.name ? user.name.charAt(0): user.email.charAt(0)}
        </AvatarFallback>
      </Avatar>
    </CustomPopover>
  )
}