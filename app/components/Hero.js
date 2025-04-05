import Button from "./ui/Button";

export default function Hero() {
	return (
		<section className="w-full min-h-[calc(100vh-64px)] flex flex-col-reverse gap-5 sm:gap-0 sm:flex-row justify-center sm:justify-between py-5 md:py-0 items-center">
			<div className="flex flex-col gap-3">
				<h2 className="text-2xl xxs:text-3xl md:text-4xl xl:text-5xl font-bold flex flex-col gap-4">
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
			<div className="relative ml-0 sm:-ml-10 md:ml-0 w-1/2 mt-0 sm:-mt-10 md:mt-0 sm:w-auto sm:h-auto rounded-full bg-linear-to-t px-8 from-skblue/40 via-white to-white">
				<img
					src="/sk_images/student_one.png"
					className="min-w-[200px] rounded-2xl"
				/>
				<img
					src="/sk_images/send.png"
					className="absolute top-1/6 left-4 w-[20%] max-w-[70px]"
				/>
				<img
					src="/sk_images/hut.png"
					className="absolute bottom-1/8 right-4 w-[20%] max-w-[70px]"
				/>
			</div>
		</section>
	);
}
