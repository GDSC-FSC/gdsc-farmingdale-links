import { Link } from '@/src/components/custom/nextui/conversion'
import { Div, Picture } from '@/src/components/templates/semantics'
import { Button } from '@/src/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/src/components/ui/dialog'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import React from 'react'
import { CopyToClipboard, CustomImage as Image } from '@/src/components/custom'
import SectionWrapper from './SectionWrapper'
import { ShareVia } from '@/src/components/custom/buttons/ShareVia'

const EventsDataContentWrapper: React.FC<Required<Events>> = (
  {
    title,
    thumbnailLink,
    detailsLink
  }
) => {
  return (
    <>
      <SectionWrapper>
        <Link
          href={detailsLink!}
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
                src={thumbnailLink!}
                className={`
                  size-12 rounded-md
                `}
                alt={``}
              />
            </Picture>
            <p
              className={`relative hyphens-none w-full text-center break-words appearance-none align-middle box-border whitespace-normal`}
            >
              {title}
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
            >
              <DotsHorizontalIcon
                className={`
                  scale-150
                `}
              />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Share this link
              </DialogTitle>
            </DialogHeader>
            <ShareVia shareUrl={detailsLink!} />
            <CopyToClipboard content={detailsLink!} />
          </DialogContent>
        </Dialog>
      </SectionWrapper>
    </>
  )
}

export default EventsDataContentWrapper