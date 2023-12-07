import React, { Component, useState} from 'react'
import Head from 'next/head'
import QuizQuestion from '../components/QuizQuestion';

export default function SurveyPage() {

	return (
		<React.Fragment>
			<Head>
				<title>Survey</title>
			</Head>
			<QuizQuestion title="How much free space will you be able to give to your pet?"leftlabel="Little to none"rightlabel="it gets its own room"type="space"qnum="5"></QuizQuestion>
		</React.Fragment>
	)
}
