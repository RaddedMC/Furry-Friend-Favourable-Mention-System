import React, { useEffect } from 'react'
import Head from 'next/head'
import LandingPagePet from '../components/LandingPagePet'


export default function HomePage() {

	let scrollDirection = 1;

	useEffect(() => {
		const scrollContainer = document.getElementById("scrollContainer");

		// Scroll the div
		const scrollDiv = () => {

			// Detect scrolled to top
			if (scrollContainer.scrollLeft == 0) {
				scrollDirection = 1;
			}

			// Detect scrolled to bottom
			if (Math.ceil(scrollContainer.scrollLeft + scrollContainer.clientWidth) == scrollContainer.scrollWidth) {
				scrollDirection = -1;
			}

			// Scroll in the set direction
			scrollContainer.scrollBy(2 * scrollDirection, 0);
		}

		scrollContainer.addEventListener("scroll", () => false);

		// Set scrolling interval
		const scrollInterval = setInterval(scrollDiv, 50);

		// Clean up the interval when the component unmounts
		return () => clearInterval(scrollInterval);
	}, []);
	
	return (
		<React.Fragment>
			<Head>
				<title>Welcome to the Furry Friend Favourable Mention System!</title>
			</Head>
			<div className=" h-screen items-center flex flex-col justify-center">
					<h1 className='text-3xl text-center'>Welcome to the<br>
					</br><b>Furry Friend Favourable Mention System!</b></h1>

					<p className='mt-2 text-center'>Take our short quiz to help determine which furry friend is best for you!</p>

					<div className='flex flex-col bg-black bg-opacity-70 rounded-3xl w-2/3 mt-2'>
						<p className='m-2 ml-4'>You could get any one of these pets!</p>
						<div className='flex flex-row overflow-x-auto scroll-smooth' id='scrollContainer'>
							<LandingPagePet imageUrl='https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg' name='Dog'/>
							<LandingPagePet imageUrl='https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg' name='Dog'/>
							<LandingPagePet imageUrl='https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg' name='Dog'/>
							<LandingPagePet imageUrl='https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg' name='Dog'/>
						</div>
					</div>
					<button className='mt-8 bg-blue-500 p-4 text-xl px-10 rounded-full' >Take the quiz!</button>
			</div>
		</React.Fragment>
	)
}
