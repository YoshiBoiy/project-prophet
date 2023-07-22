import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'


import { NavBar } from '../components/navbar'
import { Carousel } from '../components/carousel'
import { DummyStock } from "../public/images/dummystock";


export default function Home() {
	return (
		<main className="flex flex-col h-screen bg-gradient-to-t from-primary to-secondary">
			<NavBar />
			<div className="w-full px-10 h-3/4 text-white grid grid-cols-2 items-center mt-20">
				<div className="w-full max-w-[720px]">
					<DummyStock />
				</div>
				<div className="flex flex-col gap-4 pl-10  font-sans">
					<h1 className="font-murs text-3xl">Fibonnacci Retracement</h1>
					<p className="text-xl leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<div className="flex flex-row gap-2 items-center text-3xl">
						<h2>Prediction:</h2>
						<div className="relative">
							<h2 className="text-error absolute -top-4">Bearish</h2>
							<h2 className="text-error absolute -top-4 blur-sm">Bearish</h2>
						</div>
					</div>
				</div>
			</div>
			<Carousel />
		</main>
	)
}
