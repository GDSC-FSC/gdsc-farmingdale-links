import React from "react";
import { Div, Footer } from "@/src/components/templates";
import { FooterList } from "@/src/constants";
import { Link } from '@/src/components/custom/index'
import { Icons } from "../../icons/icons";
import { links } from "@/src/constants/card-content";
import { cn } from "@/src/lib/utils";
const FooterLeftList: React.FC<{
  links: {
    href: string;
    icon: React.ReactNode;
  }[];
}> = ({ links }) => {
  return (
    <ul
      className={`
        flex flex-row gap-4 items-center justify-center
      `}
    >
      {links.map((link, index) => (
        <li key={index} className="flex items-center justify-center">
          <Link
            href={link.href}
            target={`_blank`}
            rel={`noopener noreferrer`}
          >
            {link.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const FooterBar = ({ className, footerClass, isLegal }: Partial<{
  className: string;
  footerClass: string
  isLegal: boolean
}>) => {
  return (
    <Footer
      className={cn(`
        w-full bottom-0 z-10 fixed flex flex-row items-center justify-between bg-transparent text-white px-4 bg-gradient-to-b to-black/40 from-transparent py-10
      `, footerClass)}
    >
      <Div className={cn(`flex items-center justify-center max-w-screen-xl mx-auto px-4  sm:px-6 lg:px-8 h-full`, className)}>
        <Div
          className={`gap-8 flex flex-row items-center w-full ${!isLegal ? "justify-between" : "justify-center"}`}
        >
          <Div
            className={`
              flex flex-row items-center justify-start gap-3
            `}
          >
            <Icons.logo size="10" />
            <Div
              className={`
                flex flex-col gap-4 items-center justify-center
              `}
            >
                <FooterLeftList links={links} />
            </Div>
          </Div>
{isLegal          ? (<Div className="flex items-center justify-center w-full">
            <ul className="flex flex-row gap-4 w-full items-center justify-center ">
              {FooterList.map((section, index) => (
                <React.Fragment key={index}>
                  {section.middle.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.url}
                        className="text-white"
                      >{link.title}</Link>
                    </li>
                  ))}
                </React.Fragment>
              ))}
            </ul>
          </Div>): null}
          <Div className={``}>
            {FooterList.map((section, index) => (
              <React.Fragment key={index}>
                {section.right.component}
              </React.Fragment>
            ))}
          </Div>
        </Div>
      </Div>
    </Footer>
  );
};
