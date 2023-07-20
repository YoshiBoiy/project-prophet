export function Carousel() {

	return (
		<div className="carousel gap-4 h-1/3">
			<div className="carousel-item h-36 w-4"></div>
			<div className="carousel-item h-36 w-48 flex flex-col gap-2 items-left text-2xl font-sans bg-neutral p-8 rounded-3xl border-[3px] border-stroke shadow-2xl shadow-stroke">
				<h1 className="grow">On Balance Volume</h1>
				<p className="h-8 text-xl text-font-bg2">21%</p>
			</div>
			<div className="carousel-item h-36 w-48 flex flex-col gap-2 items-left text-2xl font-sans bg-neutral  p-8 rounded-3xl border-[3px] border-stroke shadow-2xl shadow-stroke">
				<h1 className="grow">Maximum Pain</h1>
				<p className="h-8 text-xl text-font-bg2">56%</p>
			</div>
			<div className="carousel-item h-36 w-48 flex flex-col gap-2 items-left text-2xl font-sans bg-accent-bg p-8 rounded-3xl border-[3px] border-accent-stroke shadow-2xl shadow-accent-stroke">
				<h1 className="grow">Fibonnaci Retracement</h1>
				<p className="h-8 text-xl text-font-bg2">79%</p>
			</div>
			<div className="carousel-item h-36 w-48 flex flex-col gap-2 items-left text-2xl font-sans bg-neutral  p-8 rounded-3xl border-[3px] border-stroke shadow-2xl shadow-stroke">
				<h1 className="grow">Golden Cross Ema</h1>
				<p className="h-8 text-xl text-font-bg2">43%</p>
			</div>
			<div className="carousel-item h-36 w-48 flex flex-col gap-2 items-left text-2xl font-sans bg-neutral  p-8 rounded-3xl border-[3px] border-stroke shadow-2xl shadow-stroke">
				<h1 className="grow">PE Multiple</h1>
				<p className="h-8 text-xl text-font-bg2">21%</p>
			</div>
			<div className="carousel-item h-36 w-48 flex flex-col gap-2 items-left text-2xl font-sans bg-neutral  p-8 rounded-3xl border-[3px] border-stroke shadow-2xl shadow-stroke">
				<h1 className="grow">Fibonnaci Retracement</h1>
				<p className="h-8 text-xl text-font-bg2">51%</p>
			</div>
			<div className="carousel-item h-36 w-48 flex flex-col gap-2 items-left text-2xl font-sans bg-neutral  p-8 rounded-3xl border-[3px] border-stroke shadow-2xl shadow-stroke">
				<h1 className="grow">Fibonnaci Retracement</h1>
				<p className="h-8 text-xl text-font-bg2">51%</p>
			</div>
			<div className="carousel-item h-36 w-4"></div>
		</div>
	)
}