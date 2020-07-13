import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import CaseStudySummary from "../components/case_study/summary"
import Section from "../components/case_study/section"

const summary = {
    areasOfFocus: [
        "Using research to guide & focus the team",
        "Collaborating with different functions to create cohesive product",
        "Creating an executable design that the team can quickly iterate on"
    ],
    importantDetails: [
        "8 weeks to deliver fully functional product",
        "Provided with a Product Vision to expand",
        "Team included 2 designers, 4 data science partners, and 4 web devs"
    ],
    problem: "Humans need to rethink how we are interacting with our environment. Creating better recycling habits will directly affect the world and how the future lives in it.",
    solution: "Focus on reaching as large an audience as possible and help them to create better recycling habits."
}

const discovery = [
    {
        type: "Heading",
        title: "Discovery: Using research to refine how we can help"
    },
    {
        type: "Introduction",
        body: [
            "Initially, we knew we wanted to work with Earth911. Their API would give us the data we needed to create some kind of informational base to build from."
        ]
    },
    {
        type: "OrderedList",
        title: "Data we could expect from Earth911:",
        items: [
            "Specific item descriptions. Items included plastic bottles, engine parts, household cleaners, etc.",
            "Location-based information on how each item is disposed of or recycled in that area.",
            "Location-based information on specific disposal facilities that accept the item in question."
        ]
    },
    {
        type: "ImageExhibition",
        title: "We started with analyzing the current competition",
        imageSets: [],
        summary: ""
    },
    {
        type: "OrderedList",
        title: "Competition takeaways:",
        items: [
            "In nearly all the competition, UX / UI was outdated and felt clunky and cluttered.",
            "All competitors failed to explain the what & why of what they were trying to accomplish.",
            "Many of these companies were not utilizing current technology to create a better experience."
        ]
    }
]

const ideation = [
    {
        type: "Heading",
        title: "Ideation: What could we build that promotes recycling?"
    },
    {
        type: "Introduction",
        body: [
            "We knew that we needed to make sure we utilized current technology to help solve this problem and keep younger users engaged with the product.",
            "We wondered, what would happen if we enabled users to take a photo of an item in order to streamline the process of locating the item details within our database?"
        ]
    },
    {
        type: "KeyInsights",
        title: "Key insights from user interviews",
        insights: [
            {
                title: "Any amount of inaccuracy in the image recognition causes a significant amount of distrust.",
                body: "5 of the 6 people we spoke to reported they would not use the product if the image recognition accuracy was below 80%."
            },
            {
                title: "Motivation to recycle is present, yet people are hard-pressed to change their habits.",
                body: "People are motivated to recycle in a myriad of ways - but not motivated enough to put a lot of energy into helping themselves learn or create better habits."
            }
        ]
    },
    {
        type: "ProcessionalGuide",
        body: ["If we can’t guarantee 100% accuracy for image recognition, we need reliable fallbacks that the user can access with ease."]
    },
    {
        type: "ImageExhibition",
        title: "",
        imageSets: [],
        summary: "This model ensured that our users were never more than 3 taps away from the information they were looking for."
    },
]

const progression = [
    {
        type: "Heading",
        title: "Progression: Continuously asking our users what works"
    },
    {
        type: "Introduction",
        body: [
            "A note about partnership in design:  This was an incredible first experience in teamwork and collaboration with a design partner.",
            "We would frequently come to a point where we were not agreeing with the direction the design was going and we didn’t have time to get stuck."
        ]
    },
    {
        type: "OrderedList",
        title: "Here are some things we both learned during our collaborative efforts:",
        items: [
            "If you get stuck when pair-designing, take an hour or two to design on your own. Then come back and see where each of you went. Taking the best parts of each design and seeing how they can work together can create incredible results.",
            "Always make sure there is a user-experience based reason for all your decisions. Keep the user in the forefront of your mind!",
            "Be kind and take breaks. If you really can’t see the reasoning behind something, ask questions and seek out other resources that support the other person’s idea."
        ]
    },
    {
        type: "ProcessionalGuide",
        body: [
            "Knowing we were on a timeline, we quickly came up with several creative ideas for layout and flow. Below you can see the progression as we continued to build, test, and iterate."
        ]
    },
    {
        type: "ImageExhibition",
        title: "Home Page Progression",
        imageSets: [],
        summary: "We started not knowing whether we should showcase the image recognition over category search. Right away we knew we wanted to create a simplistic design, so we progressed into giving the user all 3 options on the landing page. You can see that more clearly in the final designs below."
    },
    {
        type: "ImageExhibition",
        title: "Category Search Flow Progression",
        imageSets: [],
        summary: [
            "For category search, we wanted to remove any friction the user might encounter. We considered whether the user would prefer actual photos or icons to describe an item or material.",
            "From user testing, we learned that users more easily recognize photos of items over icons. We realized we would have to sacrifice some aesthetics to include photos of all 300 items in the database, but it was something we did not regret doing in the end."
        ]
    },
    {
        type: "ImageExhibition",
        title: "Camera & Results Progression",
        imageSets: [],
        summary: [
            "We wanted to make this flow as simple as possible: take a picture, get a result. This was where we had to collaborate closely with the data science team. We weren’t sure if their image recognition model would be able to take information from users to learn, or if the user took another picture that the results would be any different."
        ]
    },
    {
        type: "ImageExhibition",
        title: "Navigation Progression",
        imageSets: [],
        summary: [
            "We went through many iterations trying to find a good solution for navigation. The app was simple but still needed some flexibility.",
            "Still in love with this little curve today!"
        ]
    },
    {
        type: "KeyInsights",
        title: "Key Insights from usability testing",
        insights: [
            {
                title: "Users were delighted by the image recognition feature.",
                body: "It was incredible to see users actually having fun with a recycling app. Although the average accuracy hovered at 55% for all items, users were impressed each time our model recognized an item correctly."
            },
            {
                title: "Users love being able to visually identify items during category search.",
                body: "We chose photos over icons due to this discovery. While icons would have created a more cohesive design, users have an easier time identifying actual items in photos. We optimized for speed of discovery."
            },
            {
                title: "Users want more information at their fingertips.",
                body: "We received a lot of positive feedback that this product would help people create better recycling habits. However, they wanted even more information regarding what the material is, why it may be hard to recycle, who is coming up with new procedures to improve the recyclability of certain items, etc."
            }
        ]
    },
]

const finalDesigns = [
    {
        type: "Heading",
        title: "Final Designs"
    },
    {
        type: "ImageExhibition",
        title: "Getting permissions without adding a lot of friction",
        imageSets: [],
        summary: []
    },
    {
        type: "ImageExhibition",
        title: "With the camera feature, users can identify recyclables quickly and easily",
        imageSets: [],
        summary: []
    },
    {
        type: "ImageExhibition",
        title: "Providing the option to search by category helped engage more users",
        imageSets: [],
        summary: []
    },
    {
        type: "ImageExhibition",
        title: "Each results page was designed to feature the most valuable info to the user",
        imageSets: [],
        summary: []
    }
]

const caseStudy = {
    title: "Trash Panda",
    summary: summary,
    discovery: discovery,
    progression: progression,
    finalDesigns: finalDesigns
}

const TrashPanda = () => (
    <Layout>
        <SEO title={caseStudy.title} />

        <h1 className="my-4">{caseStudy.title}</h1>

        <CaseStudySummary summary={summary} />
        <Section section={discovery} />
        <Section section={ideation} />
        <Section section={progression} />
        <Section section={finalDesigns} />

    </Layout>
)

export default TrashPanda;
