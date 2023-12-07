import React, { Component, useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link';
import LandingPagePet from '../components/LandingPagePet';


export default function SurveyPage() {
    const [pet, setpet] = useState("")
    const [description, setdesc] = useState("")

    useEffect(() => {
        window.questionsAPI.getresult().then(res => {
            const petobj = JSON.parse(res) 
            setpet(petobj["name"]);
            setdesc(petobj["desc"]);
            console.log(pet, description);
        })
    })

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
            </div>
        </React.Fragment>
    )
}
