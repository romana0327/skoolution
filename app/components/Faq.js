"use client";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function Faq({ title, description }) {
	const [appear, setAppear] = useState(false);
	return (
		<div
			className={`${
				appear
					? "bg-skblue text-white h-auto"
					: "bg-white dark:bg-skblack-second text-skblack dark:text-skgray-second h-[84px] min-[450px]:h-[61px]"
			}
      relative border border-skgray/30 py-4.5 pl-6 pr-13 cursor-pointer transition-all duration-500`}
			onClick={() => {
				setAppear(!appear);
			}}
		>
			<h3>{title}</h3>
			<p
				className={`${
					appear
						? "translate-y-0 opacity-100 scale-100"
						: "-translate-y-10 opacity-0 scale-0"
				} mt-4 italic  transition-all duration-500`}
			>
				{description}
			</p>
			<span
				className={`absolute right-4 top-4.5 block ${
					appear ? "bg-white text-skblue" : "bg-skblue text-white"
				}`}
			>
				<Plus size={26} className="p-0.5" />
			</span>
		</div>
	);
}
