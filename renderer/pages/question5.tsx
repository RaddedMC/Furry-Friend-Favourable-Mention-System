import React, { Component, useState} from 'react'
import Head from 'next/head'
import QuizQuestion from '../components/QuizQuestion';

export default function SurveyPage() {

	return (
		<React.Fragment>
			<Head>
				<title>Survey</title>
			</Head>
			<QuizQuestion title="How much free time will you be able to dedicate to your pet?"leftlabel="Little to none"rightlabel="All day, baby"qnum="5"></QuizQuestion>
		</React.Fragment>
	)
}
