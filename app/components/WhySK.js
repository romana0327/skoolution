import { FlaskConical } from "lucide-react";
import Button from "./ui/Button";

export default function WhySK() {
	return (
		<section className="bg-skblue-second w-full flex justify-center px-5 xl:px-0 py-16 text-[14px] lg:text-[16px] min-h-screen">
			<div className="flex flex-col justify-between items-center gap-10 sm:gap-3 md:gap-10 sm:flex-row w-full lg:w-11/12 xl:w-10/12 max-w-[1260px]">
				{/* Left Column */}
				<div className="relative flex flex-col items-center w-7/8 min-[460px]:w-2/3 sm:w-full  md:w-2/4 lg:max-w-[350px]">
					<img src="/SK/student_22.png" alt="Student 2" />
				</div>
				{/* Right Column */}
				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-4">
						<h2 className="text-2xl xxs:text-3xl md:text-4xl xl:text-5xl font-bold">
							Pourquoi <span className="text-skblue">Skoolution?</span>
						</h2>
						<p className="text-skblack-second">
							La plateforme qui s'adapte à vos besoins pour améliorer vos notes
						</p>
					</div>
					<div className="grid grid-cols-2 gap-5 min-[500px]:gap-18 sm:gap-10 xl:gap-x-24 gap-y-12">
						{/* First */}
						<div className="flex flex-col gap-4">
							<div className="bg-skblue-third w-fit p-4 text-skblue rounded-sm">
								<FlaskConical />
							</div>
							<h3 className="font-bold">Suivi personnalisé</h3>
							<p className="text-skblack-second -my-1.5 max-w-[300px]">
								Des tests qui s'adaptent à ton niveau et te guident étape par
								étape.
							</p>
						</div>
						{/* Second */}
						<div className="flex flex-col gap-4">
							<div className="bg-skblue-third w-fit p-4 text-skblue rounded-sm">
								<FlaskConical />
							</div>
							<h3 className="font-bold">Suivi personnalisé</h3>
							<p className="text-skblack-second -my-1.5 max-w-[300px]">
								Des tests qui s'adaptent à ton niveau et te guident étape par
								étape.
							</p>
						</div>
						{/* Third */}
						<div className="flex flex-col gap-4">
							<div className="bg-skblue-third w-fit p-4 text-skblue rounded-sm">
								<FlaskConical />
							</div>
							<h3 className="font-bold">Suivi personnalisé</h3>
							<p className="text-skblack-second -my-1.5 max-w-[300px]">
								Des tests qui s'adaptent à ton niveau et te guident étape par
								étape.
							</p>
						</div>
						{/* Fourth */}
						<div className="flex flex-col gap-4">
							<div className="bg-skblue-third w-fit p-4 text-skblue rounded-sm">
								<FlaskConical />
							</div>
							<h3 className="font-bold">Suivi personnalisé</h3>
							<p className="text-skblack-second -my-1.5 lg:max-w-[300px]">
								Des tests qui s'adaptent à ton niveau et te guident étape par
								étape.
							</p>
						</div>
					</div>
					<Button
						text="voir plus"
						bg="bg-white"
						color="text-skblue"
						addStyle="w-[160px]"
					/>
				</div>
			</div>
		</section>
	);
}
