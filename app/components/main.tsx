import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'


import { NavBar } from '../components/navbar'
import { DummyStock } from "../../public/images/dummystock";
import { CarouselItem } from "../components/carousel-item"

export default function Main({ title, description, prediction }) {
	return (
		<div className="h-full">
			<div className="w-full px-10 h-3/4 text-white grid grid-cols-2 items-center mt-20">
				<div className="w-full max-w-[720px]">
					<DummyStock />
				</div>
				<div className="flex flex-col gap-4 pl-10  font-sans">
					<h1 className="font-murs text-3xl">{title}</h1>
					<p className="text-xl leading-snug whitespace-pre-wrap">{description}</p>
					<div className="flex flex-row gap-2 items-center text-3xl">
						<h2>Prediction:</h2>
						<div className="relative">
							<h2 className="text-error absolute -top-4">{prediction}</h2>
							<h2 className="text-error absolute -top-4 blur-sm">{prediction}</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="carousel flex flex-row h-1/4 -mt-20 gap-4 w-full">
				<div className="carousel-item h-36 w-4"></div>
				<CarouselItem title="On Balance Volume" number="21%" active={title=="On Balance Volume"}></CarouselItem>
				<CarouselItem title="Maximum Pain" number="56%" active={title=="Maximum Pain"}></CarouselItem>
				<CarouselItem title="Fibonnaci Retracement" number="79%" active={title=="Fibonnaci Retracement"}></CarouselItem>
				<CarouselItem title="Golden Cross EMA" number="43%" active={title=="Golden Cross EMA"}></CarouselItem>
				<CarouselItem title="Death Cross EMA" number="21%" active={title=="Death Cross EMA"}></CarouselItem>
				<CarouselItem title="PE Multiple" number="21%" active={title=="PE Multiple"}></CarouselItem>
				<CarouselItem title="PE Multiple" number="21%" active={title=="PE Multiple"}></CarouselItem>
				<div className="carousel-item h-36 w-4"></div>
			</div>
		</div>
	)
}
