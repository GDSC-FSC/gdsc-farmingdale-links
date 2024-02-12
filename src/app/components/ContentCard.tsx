import React, { Suspense } from 'react'
import { Pagination } from '@/src/components/ui/pagination'
import { Skeleton } from '@/src/components/ui/skeleton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { CiGlobe } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/src/components/ui/scroll-area"
import { Picture, Section, Article, Aside, Header } from '@/src/components/templates'
import { Link } from '@/src/components/custom'

interface Link {
  href: string
  icon: JSX.Element
}

const links: Link[] = [
  { href: 'https://mikeodnis.com', icon: <CiGlobe />, },
  { href: 'https://twitter.com/OdnisMike', icon: <FaXTwitter />, },
  { href: 'https://github.com/WomB0ComB0', icon: <FaGithub />, },
  { href: 'https://linkedin.com/mikeodnis', icon: <FaLinkedin />, },
]

const ContentCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]

  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <>
      <Card
        className={`
          z-10 flex flex-col items-center mx-auto
          h-fit w-[680px] max-w-[740px] min-w-[340px] min-h-[400px] max-h-[80%]
        bg-black bg-opacity-10 backdrop-filter backdrop-blur-[10px]
          border border-black border-opacity-10 relative overflow-x-hidden
        `}
      >
        <CardHeader
          className={`
          flex flex-row items-center
            w-full p-[0.5rem] gap-2 justify-center
          `}
        >
          <Aside
            className={`
              flex flex-col items-center justify-center h-full w-fit rounded-md p-2 bg-black bg-opacity-10 backdrop-filter backdrop-blur-[10px] relative shadow-md transition-all ease-in-out duration-[85ms]
            `}
          >
            <Picture
              className={`
                overflow-hidden
                flex items-center justify-center
                relative w-full h-full
            `}

            >
              <motion.img
                src="https://github.com/WomB0ComB0.png"
                alt=""
                className={`
                size-24
                object-cover object-center bg-center bg-no-repeat rounded-full
                shadow-md transition-all ease-in-out duration-[85ms]
                `}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateY,
                  rotateX,
                  transformStyle: "preserve-3d",

                }}
              />
            </Picture>
            <Section
              className={`
                flex flex-row items-center gap-2 justify-center
                w-full mb-0 pt-2
              `}
            >
              {links.map((link, index) => (
                <Link
                  key={index}
                  className={`
                    w-8 h-8 flex flex-row items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all ease-in-out duration-[85ms]
                  `}
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                >
                  {link.icon}
                </Link>
              ))}
            </Section>
          </Aside>
          <Header
            className={`
              w-full rounded-md items-center justify-items-start pl-1 bg-black bg-opacity-10 backdrop-filter backdrop-blur-[10px] shadow-md transition-all ease-in-out duration-[85ms] relative h-[152px]
            `}
            style={{
              marginTop: '0'
            }}
          >
            <Article
              className={`
                flex flex-col items-start justify-start
                w-full h-full p-2 pt-0 rounded-md relative
              `}
            >
              <h3
                className={`
                  mt-2 text-2xl font-bold text-left w-full text-white
                `}
              >
                Mike Odnis
              </h3>
              <ScrollArea>
                <p
                  className={`
                    text-left text-sm text-white mt-2  h-full overflow-scroll w-full scrollbar-thin scrollbar-thumb-gray-400 overflow-x-hidden overflow-y-hidden
                  `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur qui ullam nostrum. Ea voluptas libero reprehenderit cumque accusantium delectus perferendis molestias, corporis soluta ex nemo modi natus, itaque rem esse earum excepturi necessitatibus. Necessitatibus, amet eos. Dolor reprehenderit harum id magni velit, autem deserunt excepturi consequatur atque adipisci debitis perferendis aperiam unde assumenda quisquam dolores ducimus a, molestiae, quo itaque.
                </p>
                <ScrollBar />
              </ScrollArea>
            </Article>
          </Header>
        </CardHeader>
        <CardContent
          className={`
            flex flex-col items-center justify-start w-full h-fit overflow-y-auto overflow-x-hidden p-2 pt-0 rounded-b-xl
          `}
        >
          <Tabs
            defaultValue="links"
            className={`
              w-full flex flex-col items-center justify-start h-full
            `}
          >
            <TabsList
              className={`
                flex flex-row items-center justify-center w-full h-9  rounded-lg p-1 text-white bg-black bg-opacity-20 backdrop-filter backdrop-blur-[10px] relative shadow-md transition-all ease-in-out duration-[85ms]
              `}
            >
              <TabsTrigger
                value="links"
                className={`
                  w-1/3
                  font-semibold
                `}

              >
                Links
              </TabsTrigger>
              <TabsTrigger
                value="upcoming"
                className={`
                  w-1/3 font-semibold
                `}
              >
                Upcoming
              </TabsTrigger>
              <TabsTrigger
                value="past"
                className={`
                  w-1/3
                  font-semibold
                `}
              >
                Past
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="links"
              className={`
                bg-transparent
              `}
            >
              <Card>
                <CardHeader>
                  <CardTitle>
                    Links
                  </CardTitle>
                  <CardDescription>
                    These are all the relevant links
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    {/* Map starts here */}
                    <DialogTrigger asChild>
                      <Button>
                        Show Dialog
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          Share this link
                        </DialogTitle>
                      </DialogHeader>
                      {/* Map here */}
                      {["https://github.com/Womb0Comb0", "https://linkedin.com/mikeodnis", "https://mikeodnis.com"].map((link, index) => (
                        <Button key={index} onClick={() => window.open(link, '_blank', 'noopener')}>
                          {link.replace(/https?:\/\//, '')}
                        </Button>
                      ))}
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="upcoming">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Upcoming Events
                  </CardTitle>
                  <CardDescription>
                    These are all upcoming events
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    {/* Map starts here */}
                    <DialogTrigger asChild>
                      <Button>
                        Show Dialog
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          Share this link
                        </DialogTitle>
                      </DialogHeader>
                      {/* Map here */}
                      {["https://github.com/Womb0Comb0", "https://linkedin.com/mikeodnis", "https://mikeodnis.com"].map((link, index) => (
                        <Button key={index} onClick={() => window.open(link, '_blank', 'noopener')}>
                          {link.replace(/https?:\/\//, '')}
                        </Button>
                      ))}
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent
              value="past"
              className={`
                flex flex-col items-center justify-start w-full h-full bg-transparent
              `}
            >
              <Card
                className={`
                  w-full flex flex-col items-center justify-start h-full rounded-lg bg-black bg-opacity-10 backdrop-filter backdrop-blur-[10px] relative shadow-md transition-all ease-in-out duration-[85ms] border-none
                `}
              >
                <CardHeader
                  className={`
                    w-full flex flex-col items-center justify-start h-fit 2 p-2 rounded-t-sm bg-black bg-opacity-20 relative shadow-lg transition-all ease-in-out duration-[85ms]
                  `}
                  role={`article`}
                >
                  <CardTitle
                    className={`text-white text-md font-bold`}
                  >
                    Past Events
                  </CardTitle>
                </CardHeader>
                {/* <Separator /> */}
                <CardContent
                  className={`w-full flex flex-col items-center h-full pt-0 rounded-b-sm p-2`}
                >
                  <ScrollArea
                    className={`
                      w-full h-fit max-h-[400px] min-h-[200px] overflow-y-auto overflow-x-hidden flex flex-col items-center justify-start gap-1
                    `}
                  >
                    <Section
                      className={`
                        w-full flex flex-row items-center justify-between h-14 mt-[0.2rem] rounded-lg shadow-md transition-all ease-in-out duration-[85ms] bg-slate-200 relative
                      `}
                      onMouseOver={(e) => {
                        e.preventDefault()
                        e.currentTarget.style.scale = '.98'
                      }}
                      onMouseOut={(e) => {
                        e.preventDefault()
                        e.currentTarget.style.scale = '1'
                      }}
                    >
                      <Link
                        href="https://github.com/WomB0ComB0"
                        className={`
                          flex flex-row items-center justify-center w-full px-16 text-center break-words appearance-none align-middle box-border relative h-full hyphens-auto whitespace-normal`}
                        target={`_blank`}
                        rel={`noopener`}
                      >
                        <div className={`w-full h-full flex justify-center items-center`}>
                          <Picture
                            className={`
                              cursor-none absolute top-[50%] transform -translate-y-1/2 justify-center flex left-[0.22rem]
                            `}
                          >
                            <img
                              src="https://github.com/WomB0ComB0.png"
                              className={`
                              size-12 rounded-md
                            `}
                              loading="lazy"
                              alt={``}
                            />
                          </Picture>
                          <p
                            className={`relative hyphens-none w-full text-center break-words appearance-none align-middle box-border whitespace-normal`}
                          >
                            hello
                          </p>
                        </div>
                      </Link>
                      <Dialog>
                        {/* Map starts here */}
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
                          {/* Map here */}
                          {links.map((link, index) => (
                            <Button key={index} onClick={() => window.open(link.href, '_blank', 'noopener')}>
                              {link.href.replace(/https?:\/\//, '')}
                            </Button>
                          ))}
                          {/* One big share */}
                        </DialogContent>
                      </Dialog>
                    </Section>
                    <ScrollBar />
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  )
}

export default ContentCard
