import React, { Component, useState} from 'react'
import Head from 'next/head'
import QuizQuestion from '../components/QuizQuestion';

export default function SurveyPage() {

	return (
		<React.Fragment>
			<Head>
				<title>Survey</title>
			</Head>
			<QuizQuestion title="What is your current financial situation?"leftlabel="Struggling" rightlabel="Mega Rich"qnum="3"></QuizQuestion>
		</React.Fragment>
	)
}
