import { CustomAlert } from "@/src/components/custom";
import { Skeleton } from "@/src/components/ui/skeleton";
import { CardClasses } from "@/src/constants";
import { useUpcomingEventsStore } from "@/src/core/store";
import { fetchData } from "@/src/utils/typeSafeFetch";
import { useQuery } from "react-query";
import EventsDataContentWrapper from "../ui/DataContentWrapper";
export const UpcomingEvents = () => {
	const { setUpcomingEvents } = useUpcomingEventsStore();
	const {
		data: event,
		isLoading,
		isError,
	} = useQuery(
		"upcomingEvents",
		() =>
			fetchData<Events[]>("https://gdsc-api.onrender.com/api/upcoming-events"),
		{
			refetchOnReconnect: true,
			onSuccess: (data) => {
				setUpcomingEvents(data);
			},
		},
	);
	/*
    const intervalId = setInterval(fetchData, 24 * 60 * 60 * 1000);
    return () => clearInterval(intervalId);
*/
	return (
		<>
			{isLoading && (
				<>
					{[1, 2, 3, 4].map((index) => (
						<Skeleton
							key={index}
							className={`h-14 w-full mt-[0.2rem] shadow-md transition-all ease-in-out duration-[85ms] bg-slate-200 relative`}
						/>
					))}
				</>
			)}

			{isError && (
				<>
					<CustomAlert
						title={`There was an error`}
						description={`Failed to fetch upcoming events`}
						variant={`destructive`}
						className={`${CardClasses}`}
					/>
				</>
			)}

			{!isLoading && !isError && (
				<>
					{event?.length === 0 ? (
						<CustomAlert
							title={`There are no upcoming events`}
							description={`Please check back later`}
							variant={`default`}
						/>
					) : (
						event?.map((event, index) => (
							<EventsDataContentWrapper {...event} key={index} />
						))
					)}
				</>
			)}
		</>
	);
};
