import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'


import { DummyStock } from "../../public/images/dummystock";
import { CarouselItem } from "../components/carousel-item"
import Main from '../components/main'

export default function OBV() {
	return (
		<Main title="Death Cross EMA" description="The Death Cross EMA is a bearish signal that occurs when the short-term EMA crosses below the long-term EMA indicating an increase in selling and potential bearish momentum." prediction="Bearish" />
	)
}
