"use client";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

export default function Header() {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	return (
		<section className="z-50 relative w-full flex justify-between items-center py-3 bg-white">
			{/* Logo */}
			<div className=" font-poppins text-3xl flex justify-center items-center gap-1 tracking-wide font-bold">
				<span className="flex justify-center items-center px-3.5 h-[40px] bg-skblue text-white">
					sk
				</span>
				<span className="text-skblue">oolution</span>
			</div>
			{/* Navbar */}
			<nav className="hidden lg:flex gap-[38px]">
				<a
					href="#"
					className="relative font-semibold text-skblue before:absolute before:bottom-0 before:w-[calc(100%+10px)] before:-left-[5px] before:h-0.5 before:bg-skblue"
				>
					Accueil
				</a>
				<a href="#">Services</a>
				<a href="#">Fonctionnalité</a>
				<a href="#">Témoignage</a>
				<a href="#">FAQ</a>
			</nav>
			{/* Login + Menu*/}
			<div className="flex justify-center items-center gap-4">
				{/* Login */}
				<div>
					<a
						href="#"
						className="flex justify-center items-center text-base text-white bg-skblue px-7 h-[40px] font-semibold"
					>
						Commencer
					</a>
				</div>
				{/* Humberger Menu */}
				<div className="lg:hidden">
					<AlignJustify
						className="cursor-pointer"
						size={28}
						onClick={() => {
							setIsOpenMenu(!isOpenMenu);
						}}
					/>
					<div
						className={`w-full bg-white py-8 flex flex-col items-center absolute right-0 top-16 gap-9 transition-all duration-500 ${
							isOpenMenu
								? "translate-x-0 opacity-100"
								: "translate-x-[110%] opacity-100"
						}`}
					>
						<a
							href="#"
							className="relative font-semibold text-skblue before:absolute before:bottom-0 before:w-[calc(100%+10px)] before:-left-[5px] before:h-0.5 before:bg-skblue"
						>
							Accueil
						</a>
						<a href="#">Services</a>
						<a href="#">Fonctionnalité</a>
						<a href="#">Témoignage</a>
						<a href="#">FAQ</a>
					</div>
				</div>
			</div>
		</section>
	);
}
