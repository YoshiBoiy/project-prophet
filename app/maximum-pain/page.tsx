import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'


import { DummyStock } from "../../public/images/dummystock";
import { CarouselItem } from "../components/carousel-item"
import Main from '../components/main'

export default function OBV() {
	return (
		<Main title="Maximum Pain" description={`The idea behind the Max Pain theory is that option sellers (those who write call and put options) have the most to gain when the greatest number of options expire worthless. This is because they get to keep the premium (price of an option contract) they collected when they sold the options without having to pay out any money to the option buyers. This data suggests that the stock price will gravitate towards this price as options expiration approaches, because option sellers will attempt to manipulate the stock price to close at or near this price.

The payout for call options is the sum of the maximum difference between the stock price and call strike price for in-the-money options, multiplied by the number of contracts and the contract multiplier (usually 100). For put options, it's the sum of the maximum difference between the put strike price and stock price for in-the-money options, multiplied similarly. The strike price where these combined payouts are minimized represents the Max Pain point.`} prediction="Bearish" />
	)
}
