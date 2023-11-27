import React, { Component } from 'react'
import Head from 'next/head'

export default function SurveyPage() {
	const slider = document.getElementById("slider");
	const output = document.getElementById("description");

	if (slider instanceof HTMLInputElement) {
		slider.oninput = () => {
			output.innerHTML = slider.value;
			slider.value = slider.value;
		}
	}

	return (
		<React.Fragment>
			<Head>
				<title>Survey</title>
			</Head>

			<div className=" h-screen items-center flex flex-col justify-cent er">

				<h1 className='text-3xl text-center'>
					<br />
					<b id="titlebar">Quiz Question</b>
				</h1>

				<br /><br /><br />
				<div className=" rounded items-center flex flex-col w-full">
					<p id="description">stest</p>
					<input className="w-3/4" type="range" min="-100" max="100"
						value="0" id="slider" />
				</div>

			</div>
		</React.Fragment>
	)
}
