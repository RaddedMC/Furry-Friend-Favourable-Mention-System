import React, { Component, useState} from 'react'
import Head from 'next/head'
import QuizQuestion from '../components/QuizQuestion';

export default function SurveyPage() {

	return (
		<React.Fragment>
			<Head>
				<title>Survey</title>
			</Head>
			<QuizQuestion title="How would you describe your living space?"leftlabel="No space (Cramped)"rightlabel="Fits 100 Elephants"qnum="4"></QuizQuestion>
		</React.Fragment>
	)
}
