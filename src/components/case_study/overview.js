import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const AtAGlance = ({ title, items }) => {
    const lis = items.map((item, i) =>
        <li
            className="my-4"
            key={title + i}>
            {item}
        </li>
    )
    return (
        <div>
            <h4 className="my-4">{title}</h4>
            <ul>
                {lis}
            </ul>
        </div>
    )
}

const ProblemStatement = ({ problem, solution }) =>
    <>
        <div className="my-4">
            <h4 className="inline">Problem: </h4>
            <p className="inline">{problem}</p>
        </div>
        <div className="my-4">
            <h4 className="inline">Solution: </h4>
            <p className="inline">{solution}</p>
        </div>
    </>

const Overview = ({ overview }) => {
    return (
        <>
            <Img fluid={overview.image.childImageSharp.fluid} />

            <AtAGlance
                title="Areas of Focus"
                items={overview.areasOfFocus} />

            <AtAGlance
                title="Important Details"
                items={overview.importantDetails} />

            <ProblemStatement
                problem={overview.problem}
                solution={overview.solution} />
        </>
    )
}

export const overviewFragment = graphql`
  fragment Overview on ContentYaml {
    overview {
        image {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        areasOfFocus
        importantDetails
        problem
        solution
      }
  }
`

export default Overview
