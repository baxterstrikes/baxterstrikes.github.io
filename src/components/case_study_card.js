import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// TODO do images the gatsby way
// TODO does the svg arrow need to be done differently?

const CaseStudyCard = ({ caseStudy }) => {
  return (
    <section className="h-full w-full flex overflow-hidden">
      <div className="w-5/12 p-4 self-center">
        <h2 class="text-lg">{caseStudy.title}</h2>

        {caseStudy.description}
        <a href={caseStudy.slug}
          class="py-1 px-3 my-8 border border-current text-bamboo rounded inline-flex items-center">
          <span>Learn more</span>
          <svg class="w-2 h-3 ml-2" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.82386e-05 10.7629L0.716129 11.5L6.37866 6.00018L0.71613 0.500001L5.90713e-05 1.23725L4.90306 6.00018L5.82386e-05 10.7629Z"
              fill="#DF5F02" />
          </svg>
        </a>
      </div>
      <div className="w-7/12 px-5 pt-5 bg-gray-400">
        <img alt="" className="object-contain w-3/5 m-auto"
          src="./images/landingpage/lp_trashpandamock.png"></img>
      </div>
    </section>
  )
}

export default CaseStudyCard