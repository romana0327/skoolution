import { Award, Check, GraduationCap, Send } from "lucide-react";
import Button from "./ui/Button";

export default function Hero() {
	return (
		<section className="w-full h-[calc(100dvh-64px)] flex flex-col-reverse gap-5 sm:gap-0 sm:flex-row justify-center sm:justify-between items-center">
			<div className="z-10 flex flex-col gap-2 sm:gap-3">
				<h2 className="text-2xl xxs:text-3xl md:text-4xl xl:text-5xl font-bold flex flex-col gap-2 sm:gap-4">
					<p className="text-nowrap">Révisez intelligemment,</p>
					<p className="text-nowrap">progressez rapidement</p>
					<p className="text-nowrap">
						avec <span className="text-skblue">Skoolution.</span>
					</p>
				</h2>
				<p className="text-[#848484] block w-full sm:w-7/8 md:w-5/6">
					Bienvenue sur SKOOLUTION, la plateforme d’évaluation en ligne pour les
					lycéens au Maroc.
				</p>
				<div className="flex items-center  gap-2">
					<img src="/morocco.png" alt="Moroccan Flag" />
					<p className="text-[#848484]">Programme officiel 2024-2025</p>
				</div>
				<div className="flex gap-3">
					<Button href="#" color="text-white" bg="bg-skblue" text="Commencer" />
					<Button
						href="#"
						color="text-skblue"
						bg="bg-white"
						text="Testez gratuitement"
					/>
				</div>
			</div>
			<div className="z-0 relative flex justify-center items-center ml-0 sm:-ml-10 md:ml-0 w-1/2 mt-0 sm:-mt-10 md:mt-0 sm:w-auto sm:h-auto">
				{/* Student */}
				<img
					src="/sk_images/student_one.png"
					className="min-w-[200px] bg-linear-to-t from-skblue/40 via-white to-white rounded-full md:rounded-4xl px-8"
				/>
				{/* Send */}
				<Send
					strokeWidth={1.25}
					className="absolute top-1/6 -left-8 sm:left-0 text-skblue w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 p-2 sm:p-2.5 md:p-3"
				/>
				{/* Graduation Cap */}
				<GraduationCap
					strokeWidth={1.25}
					className="absolute bottom-1/12 sm:bottom-1/8 right-0 sm:right-4 text-white bg-skblue rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 p-2 sm:p-2.5 md:p-3"
				/>
				{/* Top Div */}
				<div className="absolute bottom-10 xxs:bottom-15  sm:top-1/12 lg:top-1/6 -right-10 sm:-right-0 lg:-right-3">
					<div className="relative flex flex-col justify-center gap-5 items-center text-[8px] lg:text-[10px] h-40 p-3.5">
						<p className="-mt-12 lg:-mt-0 text-nowrap">Augmenter l'audience</p>
						<div>
							<div className="absolute top-5 lg:top-10 left-1/5 w-full">
								<img
									src="/sk_images/Ellipse_blue.png"
									alt="Blue Circle"
									className=" w-[60%]"
								/>
							</div>
							<div className="absolute top-5 lg:top-10 left-1/5 w-full">
								<img
									src="/sk_images/Ellipse_orange.png"
									alt="Orange Circle"
									className=" w-[55%]"
								/>
							</div>
						</div>
						<Check
							strokeWidth={2.5}
							className="absolute top-0 right-0 -translate-y-5 bg-blue-700 text-white rounded-full p-1 w-5 h-5 md:w-7 md:h-7"
						/>
						<div className="absolute top-9 lg:top-14 right-1/2 translate-x-1/2 bg-[#F77E53] w-4 h-4 rounded-full"></div>
						<p className="absolute bottom-20 lg:bottom-12 right-1/8 text-right w-full text-neutral-500">
							50%
						</p>
						<div className="flex flex-col gap-2 lg:gap-5 items-center">
							<p className="text-lg lg:text-2xl font-semibold">125K</p>
							<p>Élèves</p>
						</div>
					</div>
				</div>
				{/* Blue Circle */}
				<div className="absolute -left-[45px] -bottom-2.5 md:bottom-[calc(1/60*100%)] -translate-1/2 w-8 h-8 md:w-10 md:h-10 bg-blue-300 rounded-full"></div>
				{/* Bottom Div */}
				<div className="absolute bottom-1/10 -left-[45px] bg-white p-2.5 rounded-xl">
					<div className="flex items-center gap-3">
						<Award
							className="bg-amber-400 text-white rounded-full p-1"
							size={30}
						/>
						<div>
							<p className="text-[8px] md:text-[10.5px]">Counting</p>
							<p className="text-[16px] md:text-[22px] font-semibold">
								100,000+
							</p>
						</div>
					</div>
					<div className="text-skblue text-[6.5px] md:text-[9px] flex gap-5 justify-between">
						<p className="text-nowrap">Élèves qui réussissent</p>
						<p>15.35%/yr</p>
					</div>
				</div>
			</div>
		</section>
	);
}
