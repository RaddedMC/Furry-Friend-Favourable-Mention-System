import React, { Component, useState} from 'react'
import Head from 'next/head'
import QuizQuestion from '../components/QuizQuestion';

export default function SurveyPage() {

	return (
		<React.Fragment>
			<Head>
				<title>Survey</title>
			</Head>
            <QuizQuestion title="Do you have a backyard or large open spaces in/near your house?"leftlabel="Nothing"rightlabel="Massive"qnum="9"></QuizQuestion>
		</React.Fragment>
	)
}
