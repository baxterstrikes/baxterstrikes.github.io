import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CaseStudyCard from "../components/case_study_card"

const caseStudies =
  [
    {
      title: "Trash Panda",
      slug: "trash-panda",
      description: "Helping people create better recycling habits, one bit of trash at a time"
    },
    {
      title: "Plant Parenthood",
      slug: "plant-parenthood",
      description: "Ensuring the health and happiness of all plants everywhere"
    },
    {
      title: "NextBook",
      slug: "nextbook",
      description: "Assisting book lovers in finding their next great book"
    }
  ];

const caseStudyCards = caseStudies.map((caseStudy, i) =>
  (<CaseStudyCard caseStudy={caseStudy} />)
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="text-left my-24 text-4xl">
      Hi! I'm Lynn - a UX Designer, book nerd, and science enthusiast located in Berkeley, CA
    </div>

    {caseStudyCards}

  </Layout>
)

export default IndexPage
