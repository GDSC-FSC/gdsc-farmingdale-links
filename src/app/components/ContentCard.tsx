import { Link } from "@/src/components/custom";
import {
	Article,
	Aside,
	Header,
	Picture,
	Section,
} from "@/src/components/templates";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { ScrollArea, ScrollBar } from "@/src/components/ui/scroll-area";
import { Tabs, TabsList } from "@/src/components/ui/tabs";
import { links } from "@/src/constants/card-content";
import { Links, PastEvents, UpcomingEvents } from "../server/index";
import { TabsContentWrapper } from "../ui/TabsContentWrapper";
import TabsTriggers from "../ui/TabsTriggers";
const ContentCard = () => {
	return (
		<>
			<Card
				className={`
rounded-xl text-card-foreground max-w-[740px]  shadow z-10 flex flex-col items-center mx-auto h-fit min-h-[400px] max-h-[80%] bg-black bg-opacity-10 backdrop-filter backdrop-blur-[10px] border border-black border-opacity-10 fixed overflow-x-hidden mb-10
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
							<img
								src="/assets/images/Logo.png"
								alt=""
								className={`
                size-24
                object-cover object-center bg-center bg-no-repeat rounded-full
                shadow-md transition-all ease-in-out duration-[85ms]
                `}
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
							marginTop: "0",
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
								GDSC Farmingdale
							</h3>
							<ScrollArea className={`flex flex-col`}>
								<p
									className={`
                    text-left text-sm text-white mt-2 h-full overflow-scroll w-full scrollbar-thin scrollbar-thumb-gray-400 overflow-x-hidden overflow-y-hidden
                  `}
								>
									{
										"The mission of GDSCFarmingdale State College is an opportunity for students to gain practical experience in building applications and services, develop their skills in software engineering, and explore new areas of technology. This helps them to become better prepared for careers in the technology industry and to contribute to the development of innovative solutions that can make a positive impact on society."
									}
									<br className={`my-2`} />
									{
										"Google Developer Student Clubs (DSC) are community groups for students who are interested in learning about and practicing development skills. These clubs are designed to help students learn how to build real-world solutions using Google's technologies and platforms, as well as to provide a platform for students to connect, learn, and grow together."
									}
									<br />
									{
										"The purpose of Google DSC is to empower students to learn, grow, and connect with other developers through hands-on workshops, mentorship, and collaboration. Google DSC provides a platform for students to explore new technologies, work on real-world projects, and build their professional networks."
									}
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
                flex flex-row items-center justify-center w-full h-9  rounded-lg p-1 text-white bg-black bg-opacity-20 backdrop-filter backdrop-blur-[10px] relative shadow-md transition-all ease-in-out duration-[85ms] mb-2
              `}
						>
							{["links", "upcoming", "past"].map((value, index) => (
								<TabsTriggers key={index} value={value} title={value} />
							))}
						</TabsList>
						{["links", "upcoming", "past"].map((value, index) => (
							<TabsContentWrapper key={index} value={value}>
								{value === "links" && <Links />}
								{value === "upcoming" && <UpcomingEvents />}
								{value === "past" && <PastEvents />}
							</TabsContentWrapper>
						))}
					</Tabs>
				</CardContent>
			</Card>
		</>
	);
};

export default ContentCard;
