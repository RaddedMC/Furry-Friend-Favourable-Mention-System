import React, { Component, useState} from 'react'
import Head from 'next/head'
import QuizQuestion from '../components/QuizQuestion';

export default function SurveyPage() {

	return (
		<React.Fragment>
			<Head>
				<title>Survey</title>
			</Head>
            <QuizQuestion title="How often do you travel"leftlabel="never left my hometown"rightlabel="Travel guru"type="time"qnum="11"></QuizQuestion>
		</React.Fragment>
	)
}
