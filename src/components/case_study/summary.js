import React from "react"

const SummaryList = ({ title, items }) => {
    const lis = items.map((item) => <li className="my-4">{item}</li>)
    return (
        <div>
            <h4 className="my-4">{title}</h4>
            <ul>
                {lis}
            </ul>
        </div>
    )
}

const SummaryStatement = ({ problem, solution }) =>
    (
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
    )

const CaseStudySummary = ({ summary }) => (
    <>
        <SummaryList
            title="Areas of Focus"
            items={summary.areasOfFocus} />

        <SummaryList
            title="Important Details"
            items={summary.importantDetails} />

        <SummaryStatement
            problem={summary.problem}
            solution={summary.solution} />
    </>
)

export default CaseStudySummary