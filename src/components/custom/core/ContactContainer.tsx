import { ContainerWrapper } from "@/src/components/layouts";
import {
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/src/components/ui/card";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from "react";
import { Card } from ".";
const ContactContainer: React.FC<
	Partial<{
		cardContent: React.ReactNode;
	}>
> = ({ cardContent }) => {
	return (
		<ContainerWrapper
			Element={`section`}
			className="h-[100dvh] items-center flex justify-center"
		>
			<Card
				className={`rounded-xl text-card-foreground max-w-[740px] shadow flex flex-col items-center mx-auto h-fit min-h-[400px] max-h-[80%] bg-black bg-opacity-10 backdrop-filter backdrop-blur-[10px] fixed border border-black border-opacity-10 top-50`}
				children={
					<>
						<CardContent className={``}>{cardContent}</CardContent>
					</>
				}
			/>
		</ContainerWrapper>
	);
};

export default ContactContainer;
