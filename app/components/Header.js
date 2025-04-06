import { AlignJustify, X } from "lucide-react";
import Button from "./ui/Button";

export default function Header({ isOpenMenu, setIsOpenMenu }) {
	return (
		<section className="z-50 relative w-full flex justify-between items-center py-3 bg-white">
			{/* Logo */}
			<div className=" font-poppins text-2xl sm:text-3xl flex justify-center items-center gap-1 tracking-wide font-semibold">
				<span className="flex justify-center items-center px-3.5 h-[40px] bg-skblue text-white">
					sk
				</span>
				<span className="text-skblue hidden sm:inline-block">oolution</span>
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
			<div className="flex justify-center items-center gap-6">
				{/* Login */}
				<Button href="#" color="text-white" bg="bg-skblue" text="Commencer" />
				{/* Humberger Menu */}
				<div className="lg:hidden relative">
					<AlignJustify
						className={`cursor-pointer transition-all duration-300 absolute -translate-1/2 ${
							!isOpenMenu ? "scale-100 rotate-0" : "scale-0 rotate-180"
						}`}
						size={28}
						onClick={() => {
							setIsOpenMenu(!isOpenMenu);
						}}
					/>
					<X
						className={`cursor-pointer transition-all duration-300 absolute -translate-1/2 ${
							!isOpenMenu ? "scale-0 rotate-180" : "scale-100 rotate-0"
						}`}
						size={28}
						onClick={() => {
							setIsOpenMenu(!isOpenMenu);
						}}
					/>
					<div
						className={`w-screen bg-white py-8 flex flex-col items-center absolute -right-8 top-5 gap-9 transition-all duration-500 ${
							isOpenMenu
								? "translate-x-0 opacity-100"
								: "translate-x-[110%] opacity-100"
						}  h-dvh`}
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
