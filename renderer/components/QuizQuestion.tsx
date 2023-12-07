import Link from 'next/link'
import { ChangeEventHandler, MouseEventHandler, SetStateAction, useEffect, useState } from 'react';

const tempwindow: any = window;

type questionprops = {
	title: string,
	leftlabel: string,
	rightlabel: string,
	type: string,
	qnum: string
}

let initialized = false
let finalQ = 11

export default function QuizQuestion(props: questionprops) {
	const [sliderval, setsliderval] = useState(5);
	let hideback = true // set to false later if we wanna implement

	if (Number(props.qnum) != 1) {
		hideback = false
	}

	useEffect(() => {
	const handleScroll = () => false;
    window.addEventListener("scroll", handleScroll);
    
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
	}, []);

	useEffect(() => {
		if (!initialized) {
			initialized = true
			tempwindow.questionsAPI.getqs().then(vals => {
				let qvals = JSON.parse(vals)
				if (qvals[props.qnum]) {
					console.log(qvals[props.qnum])
					setsliderval(qvals[props.qnum][1])
				}
			})
		}
	}, []) // only run once	

	const handleSlider = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
		e.preventDefault();
		setsliderval(Number(e.target.value));
	}

	const handleBack: MouseEventHandler = (e) => {
		tempwindow.questionsAPI.setqresponse({ q: props.qnum, val: sliderval });
		window.location.href = "/question" + String(Number(props.qnum) - 1)
	}
	const handleNext: MouseEventHandler = (e) => {
		tempwindow.questionsAPI.setqresponse({ q: props.qnum, val: [props.type, sliderval] })
		if(Number(props.qnum) >= finalQ) {
			window.location.href = "/result"
			return;
		}
		window.location.href = "/question" + String(Number(props.qnum) + 1)
	}

	return (
		<div className=" h-screen items-center flex flex-col justify-center">

			<h1 className='text-3xl text-center'>
				<br />
				<b id="titlebar">{props.title}</b>
			</h1>

			<br /><br /><br />
			<div className=" rounded items-center flex flex-col w-full">
				<p id="description">{sliderval}</p>
				<input className="w-3/4" type="range" min="0" max="10" step="0.1"
					id="slider" value={sliderval} onChange={handleSlider} />
			</div>
			<div className=" rounded items-center flex flex-row w-full">
				<div className="mx-10 px-10">{props.leftlabel}</div>
				<div className="flex-grow" />
				<div className="mx-10 px-10">{props.rightlabel}</div>
			</div>
			<div className=" rounded items-center flex flex-row w-full">
				<div className=" rounded flex flex-row w-quarter" >
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
						id="back"
						onClick={(e) => handleBack(e)}>back</button>
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
						onClick={handleNext}
					>
					{Number(props.qnum) === finalQ ? "Submit Results" : "next"}
					</button>
				</div>

			</div>

		</div >
	);
}