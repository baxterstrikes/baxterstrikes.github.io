import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CaseStudyCard from "../components/case_study_card"

export const pageQuery = graphql`
    query CaseStudiesIndex {
        allContentYaml {
            edges {
                node {
                    title
                    description
                    path
                    image {
                        childImageSharp {
                            fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`

const IndexPage = ({ data }) => {
  const caseStudies = data.allContentYaml.edges.map(edge => edge.node);
  const caseStudyCards = caseStudies.map((caseStudy, i) =>
    (<CaseStudyCard key={"case-study-" + i} caseStudy={caseStudy} />)
  )

  return (
    <Layout>
      <SEO title="Home" />
      <div className="text-left my-24 px-4 text-H1 font-bold">
        Hi! I'm Lynn — a UX Designer, book nerd, and science enthusiast located in Berkeley, CA.
      </div>
      {caseStudyCards}
    </Layout>
  )
}
export default IndexPage
