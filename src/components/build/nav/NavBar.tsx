"use client"

import { Logo } from "@/src/components/logo";
import { CustomPopover } from "@/src/components/custom/Popover";
import { Nav, Div } from "@/src/template/index";
import { MobileSidebar } from "./mobile-sidebar";
import { ModeToggle } from "@/src/custom/ThemeButton";
import { Hint } from "@/src/@/src/custom/Hint";

export const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <Nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm  flex items-center bg-background">
      <MobileSidebar />
      <Div className="flex items-center gap-x-4 justify-center">
        <Div className="hidden md:flex items-center">
          <Logo ContainerClassName={`pr-2`} />
          <p
            className={`
              text-xl font-bold text-primary
            `}
          >
            Next-Firebase
          </p>
        </Div>
      </Div>
      <Div className="ml-auto flex items-center gap-x-2">
        <Hint
          description="Toggle theme"
          sideOffset={10}
        >
          <ModeToggle />
        </Hint>
        {user.name !== '' ? (
          <CustomPopover>
            <Hint
              description="User profile"
              sideOffset={10}
            >
              <UserAvatar />
            </Hint>
          </CustomPopover>
        ) : (null)}
      </Div>
    </Nav>
  );
};
