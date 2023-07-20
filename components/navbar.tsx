import { ProphetLogo } from "../public/logos/prophet";
import Link from "next/link";

export function NavBar() {

	return (
		<div className="z-50 fixed h-16 w-full left-0 top-0 px-10 pt-5 text-white grid grid-cols-2 items-center">
			<div className="h-16 inline-flex items-center">
				<div className="relative h-full w-16 ">
					<Link href="/" className="h-full w-16 aspect-square flex items-center absolute">
						<ProphetLogo />
					</Link>
					<Link href="/" className="h-full w-16 aspect-square flex items-center absolute blur-[2px]">
						<ProphetLogo />
					</Link>
				</div>
				<div className="grow pl-10 font-sans">
					<input type="text" placeholder="Search Ticker" className="input input-bordered input-stroke w-full shadow-md shadow-stroke" />
				</div>
			</div>
			<div className="h-full pt-2 pr-2 flex justify-between items-center w-full">
					<div></div>
					<Link href="/" className="text-white text-base md:text-lg lg:text-2xl font-murs">Our Goal</Link>
					<Link href="/" className="text-white text-base  md:text-lg lg:text-2xl font-murs">Project Prophet</Link>
					<Link href="/" className="text-white text-base  md:text-lg lg:text-2xl font-murs">About</Link>
			</div>
		</div>
	);
}
