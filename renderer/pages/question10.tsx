import React, { Component, useState} from 'react'
import Head from 'next/head'
import QuizQuestion from '../components/QuizQuestion';

export default function SurveyPage() {

	return (
		<React.Fragment>
			<Head>
				<title>Survey</title>
			</Head>
            <QuizQuestion title="How familar are you with pet health needs"leftlabel="peeing blood is normal right?"rightlabel="I'm a vet"type="experience"qnum="10"></QuizQuestion>
		</React.Fragment>
	)
}
