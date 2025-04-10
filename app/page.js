"use client";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";

export default function Home() {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	return (
		<section
			className={`w-full flex flex-col items-center overflow-x-hidden text-skblack ${
				isOpenMenu && "overflow-y-hidden h-screen"
			}`}
		>
			<Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
			<Hero />
			<Subscribe />
			<Footer />
		</section>
	);
}
