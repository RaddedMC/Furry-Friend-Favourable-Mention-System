import React, { Component, useState} from 'react'
import Head from 'next/head'
import QuizQuestion from '../components/QuizQuestion';

export default function SurveyPage() {

	return (
		<React.Fragment>
			<Head>
				<title>Survey</title>
			</Head>
            <QuizQuestion title="How tolerant are you to noise?"leftlabel="Hate it"rightlabel="Very tolerant"qnum="11"></QuizQuestion>
		</React.Fragment>
	)
}
