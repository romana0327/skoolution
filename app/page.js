"use client";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	return (
		<section
			className={`w-full flex flex-col items-center overflow-x-hidden text-[#1D1D1B] ${
				isOpenMenu && "overflow-y-hidden h-screen"
			}`}
		>
			{/* <div className="w-full px-5 xl:px-0 lg:w-11/12 xl:w-10/12 max-w-[1260px]"> */}
			<Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
			<Hero />
			<Footer />
			{/* </div> */}
		</section>
	);
}
