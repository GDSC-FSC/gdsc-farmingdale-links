import { Card, CardContent, CardHeader } from "@/src/components/ui/card"
import { Tabs, TabsList } from "@/src/components/ui/tabs"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/src/components/ui/scroll-area"
import { Picture, Section, Article, Aside, Header } from '@/src/components/templates'
import { Link } from '@/src/components/custom'
import { TabsContentWrapper } from '../ui/TabsContentWrapper'
import TabsTriggers from '../ui/TabsTriggers'
import { links } from '@/src/constants/card-content'
import { Links, PastEvents, UpcomingEvents } from "../server/index";
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
              {["links", "upcoming", "past"].map((value, index) => (
                <TabsTriggers key={index} value={value} title={value} />
              ))}
            </TabsList>
            {["links", "upcoming", "past"].map((value, index) => (
              <TabsContentWrapper
                key={index}
                value={value}
              >
                {value === "links" ? (
                  <Links />
                ) : value === "upcoming" ? (
                  <UpcomingEvents />
                ) : (
                  <PastEvents />
                )}
              </TabsContentWrapper>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </>
  )
}

export default ContentCard
