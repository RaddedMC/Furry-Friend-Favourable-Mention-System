import React, { Component, useState} from 'react'
import Head from 'next/head'
import QuizQuestion from '../components/QuizQuestion';

export default function SurveyPage() {

	return (
		<React.Fragment>
			<Head>
				<title>Survey</title>
			</Head>
            <QuizQuestion title="What size of animals do you prefer?"leftlabel="Tiny"rightlabel="The Most Massive"type="space"qnum="5"></QuizQuestion>
		</React.Fragment>
	)
}
