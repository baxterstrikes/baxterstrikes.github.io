exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const result = await graphql(`
        query CaseStudies {
            allContentYaml {
                edges {
                    node {
                        title
                        path
                    }
                }
            }
        }
    `)

    result.data.allContentYaml.edges.forEach((edge, i) => {
        createPage({
            path: `/${edge.node.path}/`,
            component: require.resolve("./src/pages/case-study.js"),
            context: { edge: i },
        })
    });
}