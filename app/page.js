"use client";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";
import WhySK from "./components/WhySK";
import OffreSK from "./components/OffreSK";
import Functionality from "./components/Functionality";

export default function Home() {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	return (
		<section
			className={`w-full flex flex-col items-center overflow-x-hidden text-skblack dark:text-neutral-100  ${
				isOpenMenu && "overflow-y-hidden h-screen"
			} bg-white dark:bg-gray-900`}
		>
			<Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
			<Hero />
			<WhySK />
			<OffreSK />
			<Functionality />
			<Subscribe />
			<Footer />
		</section>
	);
}
