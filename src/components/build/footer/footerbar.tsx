import { Div, Footer } from "../../templates";
import { CustomImage as Image } from "../../custom/media/image/Image";
import { FooterList } from "@/src/constants";
import { Link } from '@/src/components/custom/index'

const FooterLeftList: React.FC<{
  links: {
    name: string;
    link: string;
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
        <li key={index}>
          <Link
            href={link.link}
            target={`_self`}
            rel={`noopener noreferrer`}
          >
            {link.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const FooterBar = () => {
  return (
    <Footer
      className={`
        w-full bottom-0 flex flex-row items-center justify-between bg-accent-foreground/30 text-white p-4
      `}
    >
      <Div className="max-w-screen-xl px-4 pb-8 mx-auto sm:px-6 lg:px-8">
        <Div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <Div
            className={`
              flex flex-row items-center justify-around gap-2
            `}
          >
            <Image
              src={`/assets/images/logo.png`}
              className={``}
              alt={``}
            />
            <Div
              className={`
                flex flex-col gap-4
              `}
            >
              {FooterList.map((section, index) => (
                <FooterLeftList
                  key={index}
                  links={section.left.socials.socialHandles.map((socialHandle) => ({
                    name: socialHandle.aria,
                    link: socialHandle.url,
                    icon: socialHandle.icon as unknown as React.ReactNode,
                  }))}
                />
              ))}
            </Div>
          </Div>
          {FooterList.map((section, index) => (
            <Div key={index} className="mb-4">
              <h2 className="text-xl font-bold mb-2">Middle Section</h2>
              <ul>
                {section.middle.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </Div>
          ))}
          {FooterList.map((section, index) => (
            <Div key={index}>
              <h2 className="text-xl font-bold mb-2">Subscribe</h2>
              {section.right.component}
            </Div>
          ))}
        </Div>
      </Div>
    </Footer>
  );
};
