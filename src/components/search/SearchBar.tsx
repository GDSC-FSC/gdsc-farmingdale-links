import { Dialog, DialogTrigger } from "@/src/components/ui/dialog";
import { cn } from "@/src/lib/utils";
import { RESET_DELAY_MS } from "@/src/types/global/global";
import { SearchIcon } from "lucide-react";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import { CommandMenu } from ".";
import { useToast } from "../ui/use-toast";
export const SearchButton = ({ className }: { className?: string }) => {
	const onOverlayClick = () => {
		setIsSearchOpen(false);
	};
	const { SHORT } = RESET_DELAY_MS;
	const { toast } = useToast();
	const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

	const openSearch = useCallback(() => {
		setIsSearchOpen(true);
	}, []);

	const closeSearch = useCallback(() => {
		setIsSearchOpen(false);
	}, []);

	useEffect(() => {
		const handleGlobalKeyDown = (event: KeyboardEvent) => {
			if (event.key === "k" && event.ctrlKey) {
				event.preventDefault();
				if (isSearchOpen) {
					closeSearch();
				} else {
					openSearch();
				}
			}
			if (event.key === "Escape") {
				closeSearch();
			}
		};

		window.addEventListener("keydown", handleGlobalKeyDown);

		return () => {
			window.removeEventListener("keydown", handleGlobalKeyDown);
		};
	}, [isSearchOpen, openSearch, closeSearch, toast]);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;

		if (isSearchOpen) {
			timeoutId = setTimeout(() => {
				closeSearch();
				toast({
					title: "Search closed",
					description: `Search was closed after being open for ${
						SHORT / 1000
					} seconds`,
				});
			}, SHORT);
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [SHORT, isSearchOpen, closeSearch, toast]);
	return (
		<Dialog>
			<DialogTrigger className={`${className}`}>
				<div
					className={cn(
						`p-2 rounded-lg flex items-center justify-center space-x-2 bg-foreground-800 hover:bg-black/20 aria-selected:bg-black/20`,
						className,
					)}
					onClick={openSearch}
				>
					<span
						className={cn(
							`flex items-center justify-start gap-2 opacity-60 hover:opacity-100`,
							className,
						)}
					>
						<SearchIcon color="grey" />
						<span className="text-[16px] font-bold text-slate-400">Search</span>
					</span>
					<span className="border-1 flex space-x-1 rounded-[4px] border-primary-60 px-[3px] bg-slate-300">
						<kbd className={`text-black`}>Ctrl+</kbd>
						<kbd className={`text-black`}>K</kbd>
					</span>
				</div>
			</DialogTrigger>
			{isSearchOpen && (
				<div
					className={
						"fixed inset-0 z-50 bg-black/20  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
					}
					onClick={onOverlayClick}
				>
					<CommandMenu open={isSearchOpen} setOpen={openSearch} />
				</div>
			)}
		</Dialog>
	);
};
