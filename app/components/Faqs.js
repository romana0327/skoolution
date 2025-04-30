import Faq from "./Faq";

export default function Faqs() {
	return (
		<section className="w-full px-5 py-22 xl:px-0 lg:w-11/12 xl:w-10/12 max-w-[1260px] flex  flex-col gap-15">
			<h2 className="text-4xl md:text-5xl font-bold">
				Vous avez des <span className="text-skblue">Questions ?</span>
			</h2>
			<div className="grid grid-cols-1 min-[890px]:grid-cols-2 gap-5">
				<Faq />
				<Faq />
				<Faq />
				<Faq />
				<Faq />
				<Faq />
			</div>
		</section>
	);
}
