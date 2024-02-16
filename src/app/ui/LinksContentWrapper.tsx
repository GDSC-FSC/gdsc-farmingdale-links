import SectionWrapper from "./SectionWrapper";
import React from 'react'
import { ShareVia } from "@/src/components/custom/buttons/ShareVia";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/src/components/ui/dialog";
import { CopyToClipboard } from "@/src/components/custom";
import { Div, Picture } from "@/src/components/templates";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "@/src/components/ui/button";
import { Link } from "@/src/components/custom/nextui/conversion";
import { CustomImage as Image } from "@/src/components/custom";
import { CardClasses } from "@/src/constants";

const LinksContentWrapper: React.FC<Links> = ({
  name,
  image,
  link,
  description
}) => {
  return (
    <SectionWrapper>
      <Link
        href={link}
        className={`
            flex flex-row items-center justify-center w-full px-16 text-center break-words appearance-none align-middle box-border relative h-full hyphens-auto whitespace-normal`}
        target={`_blank`}
        rel={`noopener`}
      >
        <Div className={`w-full h-full flex justify-center items-center`}>
          <Picture
            className={`
                cursor-none absolute top-[50%] transform -translate-y-1/2 justify-center flex left-[0.22rem]
              `}
          >
            <Image
              src={image}
              className={`
                  size-12 rounded-md
                `}
              alt={``}
            />
          </Picture>
          <p
            className={`relative hyphens-none w-full text-center break-words appearance-none align-middle box-border whitespace-normal line-clamp-1 text-foreground-100`}
          >
            {name}
          </p>
        </Div>
      </Link>
      <Dialog>
        <DialogTrigger
          asChild
          className={`
              flex absolute h-[40px] w-[40px] items-center justify-center lg:group-hover:flex rounded-full  transition z-[1] top-0 bottom-0 my-auto mx-0 right-[6px]
            `}
          role={`button`}
        >
          <Button
            variant={`ghost`}
            className={`
                bg-foreground-600
              `}
          >
            <DotsHorizontalIcon
              className={`
                  scale-150
                `}
              color={`#000000`}
            />
          </Button>
        </DialogTrigger>
        <DialogContent
          className={CardClasses}
        >
          <DialogHeader
            className={`
              w-full h-52 rounded-t-lg
            `}
          >
            <Image
              src={image}
              className={`
                  w-full h-
              `}
              alt={description}
            />
          </DialogHeader>
          <ShareVia shareUrl={link} />
          <CopyToClipboard content={link} />
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  )
}

export default LinksContentWrapper
