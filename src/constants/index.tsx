import { Icons } from "../components/icons/icons"
import { NewsLetter } from "../components/build/footer/newsletter"

// eslint-disable-next-line react-refresh/only-export-components
export const FooterList: FooterProps[] = [
  {
    left: {
      socials: {
        socialHandles: [
          {
            icon: Icons.socialIcons.instagram,
            aria: "instagram",
            url: "https://www.instagram.com/gdsc.farmingdale/",
          },
          {
            icon: Icons.socialIcons.linkedIn,
            aria: "linkedin",
            url: "https://www.linkedin.com/groups/12917927/",
          },
          {
            icon: Icons.socialIcons.gitHub,
            aria: "github",
            url: "https://github.com/GDSC-FSC"
          },
        ],
        contactHandles: [
          {
            icon: Icons.functionalIcons.globe,
            aria: "website",
            url: ""
          },
          {
            icon: Icons.functionalIcons.email,
            aria: "gmail",
            url: "mailto:gdsc.farmingdale@gmail.com"
          },
          {
            icon: Icons.functionalIcons.map,
            aria: "location",
            url: "https://maps.app.goo.gl/FQ6Zx263vEubmoc68"
          }
        ]
      },
    },
    middle: [
      {
        title: "Privacy Policy",
        url: "/privacy"
      },
      {
        title: "Terms of Service",
        url: "/terms"
      },
      {
        title: "Accessibility",
        url: "/accessibility"
      },
      {
        title: "Cookie Policy",
        url: "/cookies"
      }
    ],
    right: {
      component: <NewsLetter />
    }
  }
]

export const CardClasses = ``
export const EmailRegex = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/
