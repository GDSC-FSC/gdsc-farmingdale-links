import { memo } from "react";
import { Icons } from "../../icons/icons";
import { CustomPopover } from "@/src/components/custom/index";
import { Nav, PrimitiveDiv as Div } from "@/src/components/templates/index";
import { MobileSidebar } from "./mobile-sidebar";
import { ModeToggle } from "@/src/components/providers/theme/index";
import { Hint, Language } from "@/src/components/custom/index";
import { useCurrentUser } from "@/src/core/auth";
import { UserAvatar } from "../../auth";
import { SearchButton } from "../../search";

export const Navbar = memo(function NavBar() {
  const user = useCurrentUser();
  return (
    <Nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm  flex items-center bg-background">
      <Div className="flex items-center gap-x-4 justify-center">
        <Div className="hidden md:flex items-center">
          {Icons.logo({
            size: `12`
          })}
          <p
            className={`
              text-xl font-bold text-primary
            `}
          >
            GDSC Farmingdale
          </p>
        </Div>
      </Div>
      <Div className="ml-auto flex items-center gap-x-2 md:hidden sm:block">
        <NavFeatures />
        {user?.displayName !== '' ? (
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
      <MobileSidebar />
    </Nav>
  );
});

const NavFeatures = () => {
  const Features = [
    {
      description: "Search",
      component: <SearchButton />
    },
    {
      description: "Change Language",
      component: <Language />
    },
    {
      description: "Toggle theme",
      component: <ModeToggle />
    },
  ]
  return (
    <>
      {Features.map((feature, i) => (
        <Hint
          key={i}
          description={feature.description}
          sideOffset={10}
        >
          {feature.component}
        </Hint>
      ))}
    </>
  )
}
