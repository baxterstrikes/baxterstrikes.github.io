import React from "react"
import Img from 'gatsby-image'

const CaseStudyCard = ({ caseStudy }) => {
  console.log("corey!", caseStudy.image)
  return (
    <section key={caseStudy.slug} className="h-full w-full flex overflow-hidden">
      <div className="w-5/12 p-4 self-center">
        <h2 className="text-H2">{caseStudy.title}</h2>
        <div>{caseStudy.description}</div>
        <a href={caseStudy.path}
          className="py-1 px-3 my-8 border border-current text-bamboo rounded inline-flex items-center">
          <span>Learn more</span>
          <svg className="w-2 h-3 ml-2" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.82386e-05 10.7629L0.716129 11.5L6.37866 6.00018L0.71613 0.500001L5.90713e-05 1.23725L4.90306 6.00018L5.82386e-05 10.7629Z"
              fill="#DF5F02" />
          </svg>
        </a>
      </div>
      <div className="w-7/12 px-5 pt-5">
        {caseStudy.image != null && <Img fluid={caseStudy.image.childImageSharp.fluid} />}
      </div>
    </section>
  )
}

export default CaseStudyCard