import React, { Component, useState} from 'react'
import Head from 'next/head'
import QuizQuestion from '../components/QuizQuestion';

export default function SurveyPage() {

	return (
		<React.Fragment>
			<Head>
				<title>Survey</title>
			</Head>
            <QuizQuestion title="Do you live alone, or with others? Is it a big party?"leftlabel="I live Alone"rightlabel="My place is like a hotel"qnum="8"></QuizQuestion>
		</React.Fragment>
	)
}
