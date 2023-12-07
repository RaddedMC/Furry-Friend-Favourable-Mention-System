'use client';

import React, { Component, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link';
import LandingPagePet from '../components/LandingPagePet';
import ReviewDialog from '../components/ReviewDialog';


export default function SurveyPage() {

    const [openState, setOpenState] = useState(false);

    let pet = "Dog"
    let description = ""

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

                <p className='mt-2 text-center'>{description}</p>

                <div className='flex content-center flex-row center pt-2 bg-black bg-opacity-70 rounded-3xl'>
                    <LandingPagePet imageUrl='https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg' name='Dog' />
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
