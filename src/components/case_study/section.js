import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const Title = ({ content }) => (
    <h2 className="my-4">{content.title}</h2>
)

const Introduction = ({ content }) => {
    const { body } = content;
    return body.map((paragraph, i) =>
        <p key={"intros-" + i} className="my-4">{paragraph}</p>
    );
}

const OrderedList = ({ content }) => {
    const items = content.items.map((item, i) =>
        <li key={"items-" + i} className="my-4">{item}</li>
    )
    return (
        <div>
            <h4>{content.title}</h4>
            <ol>{items}</ol>
        </div>
    )
}

const ImageExhibition = ({ content }) => {
    const { title, images, summary } = content;

    var imageSet = (images || []).reduce((set, image, i) => {
        set.push(
            <Img key={"images-" + i} fluid={image.childImageSharp.fluid} />
        )
        return set
    }, []);

    return (
        <div className="my-4">
            <h3 className="my-4">{title}</h3>
            {imageSet}
            <p className="my-4">{summary}</p>
        </div>
    )
}

const KeyInsights = ({ content }) => {
    const { title, insights } = content;

    const insightSet = insights.map(({ title, body }, i) => (
        <div key={"insights-" + i}>
            <h4 className="my-4">{title}</h4>
            <p className="my-4">{body}</p>
        </div>
    ))

    return (
        <div>
            <h3 className="my-4">{title}</h3>
            {insightSet}
        </div>
    )
}

const ProcessionalGuide = ({ content }) => {
    const { body } = content;
    return body.map((paragraph, i) =>
        <p className="my-4" key={"pg" + i}>{paragraph}</p>
    );
}

const Section = ({ section }) => {
    const contents = section.contents.map((section, i) => {
        const key = "contents-" + i;
        switch (section.type) {
            case "Heading":
                return <Title key={key} content={section} />
            case "Introduction":
                return <Introduction key={key} content={section} />
            case "OrderedList":
                return <OrderedList key={key} content={section} />
            case "ImageExhibition":
                return <ImageExhibition key={key} content={section} />
            case "KeyInsights":
                return <KeyInsights key={key} content={section} />
            case "ProcessionalGuide":
                return <ProcessionalGuide key={key} content={section} />
            default:
                return <h1>missing section type</h1>
        };
    })
    return <section>{contents}</section>;
}

export const sectionFragment = graphql`
    fragment Sections on ContentYaml {
        sections {
            id
            contents {
                type
                title
                body
                items
                images {
                    childImageSharp {
                        fluid(maxWidth: 300) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                summary
                insights {
                    title
                    body
                }
            }
        }
    }
`

export default Section