import { CarouselItem } from "./carousel-item"

export function Carousel() {
	return (
		<div className="carousel gap-4 h-1/3">
			<div className="carousel-item h-36 w-4"></div>
			<CarouselItem title="On Balance Volume" number="21%"></CarouselItem>
			<CarouselItem title="Maximum Pain" number="56%"></CarouselItem>
			<CarouselItem title="Fibonnaci Retracement" number="79%"></CarouselItem>
			<CarouselItem title="Golden Cross Ema" number="43%"></CarouselItem>
			<CarouselItem title="PE Multiple" number="21%"></CarouselItem>
			<CarouselItem title="PE Multiple" number="21%"></CarouselItem>
			<CarouselItem title="PE Multiple" number="21%"></CarouselItem>
			<div className="carousel-item h-36 w-4"></div>
		</div>
	)
}