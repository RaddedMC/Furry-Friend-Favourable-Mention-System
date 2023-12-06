import React, { Component, useState} from 'react'
import Head from 'next/head'
import QuizQuestion from '../components/QuizQuestion';


export default function SurveyPage() {


	return (
		<React.Fragment>
			<Head>
				<title>Survey</title>
			</Head>
			<QuizQuestion title="How much free time will you dedicate to your pet?" leftlabel='little to none' rightlabel='all day baby' default='50' qnum="2"></QuizQuestion>
		</React.Fragment>
	)
}
