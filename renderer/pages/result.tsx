'use client';
import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link';
import LandingPagePet from '../components/LandingPagePet';
import ReviewDialog from '../components/ReviewDialog';

/**
 * show resulting pet 
 * @returns 
 */
export default function SurveyPage() {
    const [pet, setpet] = useState("")
    const [description, setdesc] = useState("")
    const [image, setimg] = useState("")
    const [openState, setOpenState] = useState(false);

	/**
	 * fetch the calculated result from the IPC
	 */
    useEffect(() => {
        const tempwindow: any = window;
        tempwindow.questionsAPI.getresult().then(res => {
            const petobj = JSON.parse(res) 
            setpet(petobj["name"]);
            setdesc(petobj["desc"]);
            setimg(petobj["img"]);
            console.log(pet, description);
        })
    })

	/**
	 * show the result 
	 */
    return (
        <React.Fragment>
            <Head>
                <title>Results!</title>
            </Head>
            <div className=" h-screen items-center flex flex-col justify-center">
                <h1 className='text-3xl text-center'>
                    You should get a <br>
                    </br><b>{pet}!</b>
                </h1>

                <p className='mt-2 text-center flex-wrap max-w-md'>{description}</p>

                <div className='flex content-center flex-row center bg-black bg-opacity-70 rounded-3xl'>
                    <LandingPagePet imageUrl={image} name={pet} />
                </div>
                <Link href="/home">
                    <button className='mt-8
						bg-gradient-to-r
						from-cyan-500
						via-blue-700
						to-purple-500
						p-4
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
                    >Try Again</button>
                </Link>

                <button
				onClick={() => setOpenState(true)}
				className='mt-8
						bg-gradient-to-r
						from-cyan-800
						to-cyan-600
						p-4
						text-xl
						px-10
						rounded-full
						transition
						duration-100 
						ease-in-out
						hover:from-cyan-700
						hover:to-cyan-500
						hover:scale-110
						hover:text-black
						hover:font-extrabold
						active:scale-95
						active:from-cyan-900
						active:to-cyan-800
						active:text-white'
                    >Write a review?</button>

                <ReviewDialog openState={openState} onClose={() => {setOpenState(false)}}/>
            </div>
        </React.Fragment>
    )
}
