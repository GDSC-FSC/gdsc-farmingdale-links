import { CustomAlert } from "@/src/components/custom";
import { Skeleton } from "@/src/components/ui/skeleton";
import { usePastEventsStore } from "@/src/core/store";
import { fetchData } from "@/src/utils/typeSafeFetch";
import { useQuery } from "react-query";
import EventsDataContentWrapper from "../ui/DataContentWrapper";

export const PastEvents = () => {
	const { setPastEvents } = usePastEventsStore();
	const {
		data: event,
		isLoading,
		isError,
	} = useQuery(
		"pastEvents",
		() => fetchData<Events[]>("https://gdsc-api.onrender.com/api/past-events"),
		{
			refetchOnReconnect: true,
			onSuccess: (data) => {
				setPastEvents(data);
			},
		},
	);

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
						description={`Failed to fetch past events`}
						variant={`destructive`}
					/>
				</>
			)}

			{!isLoading && !isError && (
				<>
					{event?.map((events, index) => (
						<EventsDataContentWrapper {...events} key={index} />
					))}
				</>
			)}
		</>
	);
};
