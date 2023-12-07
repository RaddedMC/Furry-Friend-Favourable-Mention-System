import React, { Component, useState} from 'react'
import Head from 'next/head'
import QuizQuestion from '../components/QuizQuestion';

export default function SurveyPage() {

	return (
		<React.Fragment>
			<Head>
				<title>Survey</title>
			</Head>
            <QuizQuestion title="How much of your income are you willing to spend on your pet?"leftlabel="100$ a month"rightlabel="my sugar babies can have my whole paycheck"type="money"qnum="7"></QuizQuestion>
		</React.Fragment>
	)
}
