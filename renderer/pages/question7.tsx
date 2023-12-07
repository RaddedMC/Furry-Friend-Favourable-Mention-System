import React, { Component, useState} from 'react'
import Head from 'next/head'
import QuizQuestion from '../components/QuizQuestion';

export default function SurveyPage() {

	return (
		<React.Fragment>
			<Head>
				<title>Survey</title>
			</Head>
            <QuizQuestion title="Is home defense an important factor in your decision?"leftlabel="Not important"rightlabel="The most important reason"qnum="7"></QuizQuestion>
		</React.Fragment>
	)
}
