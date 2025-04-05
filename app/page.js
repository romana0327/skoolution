"use client";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	return (
		<section
			className={`w-full flex justify-center overflow-x-hidden min-h-screen ${
				isOpenMenu && "overflow-y-hidden"
			}`}
		>
			<div className="w-full px-5 xl:px-0 lg:w-11/12 xl:w-10/12 max-w-[1260px]">
				<Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
				<Hero />
			</div>
		</section>
	);
}
