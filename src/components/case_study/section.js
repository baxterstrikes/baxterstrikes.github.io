import React from "react"
import Image from "../../components/image"


const Title = ({ content }) => (
    <h2 className="my-4">{content.title}</h2>
)

const Introduction = ({ content }) => {
    const { body } = content;
    return body.map((paragraph) =>
        <p class="my-4">{paragraph}</p>
    );
}

const OrderedList = ({ content }) => {
    const items = content.items.map((item, i) =>
        <li className="my-4">{item}</li>
    )
    return (
        <div>
            <h4>{content.title}</h4>
            <ol>{items}</ol>
        </div>
    )
}

const ImageExhibition = ({ content }) => {
    const { title, imageSets, summary } = content;
    return (
        <div className="my-4">
            <h3 className="my-4">{title}</h3>
            <Image/>
            <p className="my-4">{summary}</p>
        </div>
    )
}

const KeyInsights = ({ content }) => {
    const { title, insights } = content;

    const insights_ = insights.map(({ title, body }, i) => (
        <>
            <h4 className="my-4">{title}</h4>
            <p className="my-4">{body}</p>
        </>
    ))

    return (
        <div>
            <h3 className="my-4">{title}</h3>
            {insights_}
        </div>
    )
}

const ProcessionalGuide = ({ content }) => {
    const { body } = content;
    return body.map((paragraph) =>
        <p class="my-4">{paragraph}</p>
    );
}

const Section = ({ section }) => {
    const contents = section.map((content) => {
        // TODO create tag with type?
        switch (content.type) {
            case "Heading":
                return <Title content={content} />
            case "Introduction":
                return <Introduction content={content} />
            case "OrderedList":
                return <OrderedList content={content} />
            case "ImageExhibition":
                return <ImageExhibition content={content} />
            case "KeyInsights":
                return <KeyInsights content={content} />
            case "ProcessionalGuide":
                return <ProcessionalGuide content={content} />
            default: return (
                <h1>missing section type</h1>
            )
        }
    });
    return <section>{contents}</section>

}

export default Section