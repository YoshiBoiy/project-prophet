import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'


import { DummyStock } from "../../public/images/dummystock";
import { CarouselItem } from "../components/carousel-item"
import Main from '../components/main'

export default function OBV() {
	return (
		<Main title="Golden Cross EMA" description="The Golden Cross EMA (Exponential Moving Average) is a bullish signal that occurs when a short-term EMA (50-day) crosses above the long-term EMA (200-day). The underlying logic is that there is more short-term bullish volatility compared to the term indicating strengthening buying interest and positive momentum" prediction="Bearish" />
	)
}
