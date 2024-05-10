import { Article, Main, Menu, Section } from "@/src/components/templates/index";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export const NotFound = (): JSX.Element => {
	const navigate = useNavigate();
	return (
		<>
			<Main className="flex flex-col items-center justify-center w-screen h-[100dvh]">
				<Section
					className={`

          `}
				>
					<Article
						className={`
              flex flex-col items-center justify-center w-full h-full relative z-50
            `}
					>
						<h1
							className={`

              `}
						>
							<span className={``}>404</span>
							<i
								className={`

                `}
							>
								{" "}
								-{" "}
							</i>
							<span
								className={`

                `}
							>
								Not Found
							</span>
						</h1>
						<p
							className={`

              `}
						>
							<b className={``}>The page you are looking for does not exist.</b>
						</p>
					</Article>
					<Menu
						className={`flex  justify-around items-center w-full relative z-50`}
					>
						<li
							className={`

              `}
						>
							<Button
								radius={`md`}
								color={`primary`}
								variant={`ghost`}
								onClick={() => navigate("/")}
							>
								Home
							</Button>
						</li>
						<li>
							<Button
								radius={`md`}
								color={`primary`}
								variant={`ghost`}
								onClick={() => navigate(-1)}
							>
								Back
							</Button>
						</li>
					</Menu>
				</Section>
			</Main>
		</>
	);
};
