import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'


import { DummyStock } from "../../public/images/dummystock";
import { CarouselItem } from "../components/carousel-item"
import Main from '../components/main'

export default function OBV() {
	return (
		<Main title="Fibonnaci Retracement" description={`The Fibonacci retracement indicator is derived from the Fibonacci sequence that predicts potential support and resistance levels using the key levels of 23.6%, 38.2%, 50%, and 61.8%. These levels represent areas where the price might reverse or stall after a substantial move.

Identify a significant peak (top) and trough (bottom) of an area with a strong price movement, and then apply the Fibonacci levels starting from 0% at the peak to 100% at the trough. These levels represent key support and resistance levels that can help identify TP (take profit), entries, and reversals`} prediction="Bearish" />
	)
}
