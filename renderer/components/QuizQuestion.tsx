import Link from 'next/link'

type questionprops = {
	title: string,
	leftlabel: string,
	rightlabel: string,
	default: string,
	qnum: string
}

export default function QuizQuestion(props: questionprops) {
	const slider = document.getElementById("slider");
	const output = document.getElementById("description");
	const back = document.getElementById("back");
	const next = document.getElementById("next");
	let input = props.default
	let hideback = true // set to false later if we wanna implement
	var prevlink = "question" + String(Number(props.qnum) - 1);
	var nextlink = "question" + String(Number(props.qnum) + 1);

	if (Number(props.qnum) == 1) {
		hideback = true
	}


	if (slider instanceof HTMLInputElement) {
		slider.oninput = () => {
			output.innerHTML = slider.value;
			slider.value = slider.value;
			input = slider.value
		}
	}

	if (back instanceof HTMLButtonElement) {
		back.onclick = () => {
			console.log("back");
		}
	}

	if (next instanceof HTMLButtonElement) {
		next.onclick = () => {

			if (slider instanceof HTMLInputElement) {
				window.electronAPI.setQuestion({ question: props.qnum, number: slider.value });
			}
		}
	}

	return (
		<div className=" h-screen items-center flex flex-col justify-center">

			<h1 className='text-3xl text-center'>
				<br />
				<b id="titlebar">{props.title}</b>
			</h1>

			<br /><br /><br />
			<div className=" rounded items-center flex flex-col w-full">
				<p id="description">50</p>
				<input className="w-3/4" type="range" min="0" max="100"
					defaultValue="50" id="slider" />
			</div>
			<div className=" rounded items-center flex flex-row w-full">
				<div className="mx-10 px-10">{props.leftlabel}</div>
				<div className="flex-grow" />
				<div className="mx-10 px-10">{props.rightlabel}</div>
			</div>
			<div className=" rounded items-center flex flex-row w-full">
				<div className=" rounded flex flex-row w-quarter" >
					<Link href={prevlink}>
						<button hidden={hideback} className='
						mt-8
						bg-gradient-to-r
						from-cyan-500
						via-blue-700
						to-purple-500
						p-4
						mx-10
						text-xl
						px-10
						rounded-full
						transition
						duration-100 
						ease-in-out
						hover:from-cyan-300
						hover:to-purple-300
						hover:scale-110
						hover:text-black
						hover:font-extrabold
						active:scale-95
						active:from-cyan-700
						active:to-purple-700
						active:text-white'
							id="back">back</button>
					</Link>
				</div>
				<div className="flex-grow flex flex-row w-quarter" />
				<div className=" rounded flex flex-row w-quarter" >
					<button className='mt-8
						bg-gradient-to-r
						from-cyan-500
						via-blue-700
						to-purple-500
						p-4
						mx-10
						text-xl
						px-10
						rounded-full
						transition
						duration-100 
						ease-in-out
						hover:from-cyan-300
						hover:to-purple-300
						hover:scale-110
						hover:text-black
						hover:font-extrabold
						active:scale-95
						active:from-cyan-700
						active:to-purple-700
						active:text-white'
						id="next"
					>next</button>
				</div>

			</div>

		</div >
	);
}