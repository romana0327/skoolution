import Button from "./ui/Button";

export default function Hero() {
	return (
		<section className="w-full min-h-[calc(100vh-64px)] flex justify-between py-5 md:py-0 items-center">
			<div className="flex flex-col gap-3">
				<h2 className="text-3xl md:text-4xl xl:text-5xl font-bold flex flex-col gap-4">
					<p className="text-nowrap">Révisez intelligemment,</p>
					<p className="text-nowrap">progressez rapidement</p>
					<p className="text-nowrap">
						avec <span className="text-skblue">Skoolution.</span>
					</p>
				</h2>
				<p className="text-[#848484] block w-full">
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
			<div></div>
		</section>
	);
}
