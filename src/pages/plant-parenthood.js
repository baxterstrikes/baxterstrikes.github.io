
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import CaseStudySummary from "../components/case_study/summary"

const summary = {
    areasOfFocus: [
        "Aligning product design with user research",
        "Exploring unique solution possibilities",
        "Planning for future opportunities beyond MVP"
    ],
    importantDetails: [
        "2 weeks for discovery & ideation",
        "Required to develop and ship MVP in 1 week",
        "Team included 1 designer, 1 UI dev, 3 react devs, and 1 backend dev"
   ],
    problem: "Many of us want to be proud plant parents, but end up not having the time or attention span to keep those plants in great health.",
    solution: "A plant care reminder app that does the hard work of scheduling for you, by using the happiness and health information you give us to send you periodic reminders to care for your plants."
}

const caseStudy = {
    title: "Plant Parenthood",
    summary: summary
}

const PlantParenthood = () => (
    <Layout>
        <SEO title={caseStudy.title}/>

        <h1>{caseStudy.title}</h1>

        <CaseStudySummary summary={summary}/>
    </Layout>
)

export default PlantParenthood;


{/* <h2>Discovery: Do people really want their plants to thrive?</h2>

<p>
    My first step was to take a deep dive into the product I was building and how it might be interpreted by users.
</p>

<div>
    <div> Questions I asked myself: </div>
    <ol>
        <li>If we were going to build this MVP based on the requirements listed, what might be lacking?</li>
        <li>How would it help different types of users, what would be frustrating for each of them?</li>
        <li>If the perfect product for this existed, what would it be able to do?</li>
    </ol>
</div>


Key insights from user interviews

Plant owners care for their plants based on intuition rather than knowledge.
2 out of the 3 people I spoke to didn’t bother finding out how to properly care for their plants. They watered them based on trial and error.

There is not a big incentive to making sure your plants stay alive.

100% of the people interviewed feel that if their plant dies they can simply go buy another one. The likelihood they would use and continue to use this service was solely based on how easy we could make it and how much fun they had while using it.


Ideation: Let’s build something for people who want plants

Identifying the Issues: How can this product solve our user’s problems?
 */}

