import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'


import { DummyStock } from "../../public/images/dummystock";
import { CarouselItem } from "../components/carousel-item"
import Main from '../components/main'

export default function OBV() {
	return (
		<Main title="On Balance Volume" description="On Balance Volume (OBV) relates trading volume to price changes to indicate a potential upward or downward movement. The OBV accumulates volume, adding the day's volume when the close is higher than the previous day's close and subtracting the day's volume when the close is lower. This accumulation creates a running total of volume which is then plotted as a line. The idea behind OBV is that volume precedes price movements; thus, a rise in OBV signals bullish, while a decline in OBV signals bearish." prediction="Bearish" />
	)
}
