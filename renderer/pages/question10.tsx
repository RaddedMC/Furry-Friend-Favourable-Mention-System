import React, { Component, useState} from 'react'
import Head from 'next/head'
import QuizQuestion from '../components/QuizQuestion';

export default function SurveyPage() {

	return (
		<React.Fragment>
			<Head>
				<title>Survey</title>
			</Head>
            <QuizQuestion title="How often do you feel loneliness?"leftlabel="Never"rightlabel="Always lonely"qnum="10"></QuizQuestion>
		</React.Fragment>
	)
}
