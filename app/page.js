import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
	return (
		<section className="w-full flex justify-center overflow-x-hidden min-h-screen">
			<div className="w-full px-5 xl:px-0 xl:w-10/12 max-w-[1260px]">
				<Header />
				<Hero />
			</div>
		</section>
	);
}
