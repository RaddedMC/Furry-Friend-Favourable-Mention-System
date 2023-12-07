import React, { Component, useState} from 'react'
import Head from 'next/head'
import QuizQuestion from '../components/QuizQuestion';


export default function SurveyPage() {

	return (
		<React.Fragment>
			<Head>
				<title>Survey</title>
			</Head>
			<QuizQuestion title="How much free time do you have?" leftlabel='little to none' rightlabel='all day baby' type="time" qnum="1"></QuizQuestion>
			

		</React.Fragment>
	)
}
