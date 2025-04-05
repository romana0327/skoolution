export default function Button({ text, color, bg, href }) {
	return (
		<div>
			<a
				href={href}
				className={`flex justify-center items-center text-base ${color} ${bg} border border-skblue px-5 sm:px-7 h-[40px] font-semibold text-nowrap`}
			>
				{text}
			</a>
		</div>
	);
}
