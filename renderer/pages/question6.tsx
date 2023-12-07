import React, { Component, useState} from 'react'
import Head from 'next/head'
import QuizQuestion from '../components/QuizQuestion';

export default function SurveyPage() {

	return (
		<React.Fragment>
			<Head>
				<title>Survey</title>
			</Head>
			<QuizQuestion title="Have you had previous experience owning a pet?"leftlabel="No experience"rightlabel="I'm a zoo owner"type="experience"qnum="6"></QuizQuestion>
		</React.Fragment>
	)
}
