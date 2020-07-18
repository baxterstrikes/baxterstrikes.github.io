import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Overview from '../components/case_study/overview'
import Section from '../components/case_study/section'

export const pageQuery = graphql`
    query CaseStudy {
        allContentYaml {
            edges {
                node {
                    title
                    ...Overview
                    ...Sections
                }
            }
        }
    }
`

const CaseStudy = ({ data, pageContext }) => {
    const caseStudy = data.allContentYaml.edges[pageContext.edge].node;
    const sections = caseStudy.sections.map((section, i) =>
        <Section key={"section" + i} section={section} />
    )
    return (
        <Layout>
            <SEO title={caseStudy.title} />
            <h1 className="my-4">{caseStudy.title}</h1>
            <Overview overview={caseStudy.overview} />
            {sections}
        </Layout>
    )
}

export default CaseStudy;
