'use client';

import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";

interface CarouselItemProps {
	title: string;
	number: string;
	active: boolean;
}

export function CarouselItem({ title, number, active }: CarouselItemProps) {
	const currentRoute = usePathname();
	let url = title.replace(/\s+/g, '-').toLowerCase()

	return (
		
		<Link className={active ? "carousel-item h-36 w-48 flex-1 flex flex-col gap-2 items-left text-2xl font-sans p-8 rounded-3xl border-[3px] shadow-2xl cursor-pointer hover:scale-105 lg:hover:scale-[1.01] transition duration-200 bg-accent-bg border-accent-stroke shadow-accent-stroke" : "carousel-item h-36 w-48 flex-1 flex flex-col gap-2 items-left text-2xl font-sans bg-neutral p-8 rounded-3xl border-[3px] border-stroke shadow-2xl shadow-stroke cursor-pointer hover:scale-105 lg:hover:scale-[1.01] transition duration-200"}
		href={url} shallow={true}>
			<h1 className="grow">{title}</h1>
			<p className="h-8 text-xl text-font-bg2">{number}</p>
		</Link>
	)
}