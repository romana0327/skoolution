import { Mail } from "lucide-react";

export default function Subscribe() {
	return (
		<section className="bg-skblue text-white w-full flex justify-center px-5 xl:px-0 py-20 text-[14px] lg:text-[16px]">
			<div className="flex items-center gap-40 text-center sm:text-start w-full lg:w-11/12 xl:w-10/12 max-w-[1260px]">
				<p className="w-1/2 text-4xl font-semibold leading-[1.2]">
					Join the world largest online learning platform
				</p>
				<form className="w-1/2 relative">
					<input
						type="email"
						placeholder="name@email.com"
						className="w-full bg-white placeholder:text-neutral-500 py-8 px-20 outline-0 border-0 text-skblack"
					/>
					<Mail
						size={32}
						strokeWidth={1.25}
						className="absolute left-10 top-1/2 -translate-y-1/2 text-neutral-500"
					/>
					<button
						type="button"
						className="absolute right-2 top-1/2 -translate-y-1/2 h-[calc(100%-16px)] bg-skblue py-6 px-12"
					>
						Rejoignez-nous
					</button>
				</form>
			</div>
		</section>
	);
}
