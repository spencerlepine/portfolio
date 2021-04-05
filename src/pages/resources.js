import React from "react"
import Layout from "../components/Layout/Layout"

export default function Resources() {
  return (
    <Layout>
        <p>Links and articles used to build the site.</p>
        <br />
        <ul>
          <li>
            Set up Gatsby app:
            <a href="https://www.gatsbyjs.com/docs/tutorial/part-one/"> Article</a>
          </li>
          <li>
            Configure files and styles:
            <a href="https://www.gatsbyjs.com/docs/tutorial/part-two/"> Article</a>
          </li>
          <li>
            Set up tailwind in Gatsby:
            <a href="https://www.gatsbyjs.com/docs/how-to/styling/tailwind-css/"> Article</a>
            <a href="https://tailwindcss.com/docs/guides/gatsby"> Docs</a>
          </li>
          <li>
            Npm install gatsby-plugin-postcss
          </li>
          <li>
            Add typography plugin:
            <a href="https://www.gatsbyjs.com/docs/tutorial/part-three/"> Article</a>
          </li>
          <li>
            Add typography theme
          </li>
          <li>
            Add typography theme
          </li>
          <li>
            Add GraphQL queries:
            <a href="https://www.gatsbyjs.com/docs/tutorial/part-four/"> Article</a>
          </li>
          <li>
            Import graphql
          </li>
          <li>
            Destructure <code>{"{ data }"}</code> in function component arguments (when query-ing)
          </li>
          <li>
            Export graphql query at bottom of file
          </li>
          <li>
            Plugins and more Queries:
            <a href="https://www.gatsbyjs.com/docs/tutorial/part-five/"> Article</a>
          </li>
          <li>
          Add remark plugin:
            <a href="https://www.gatsbyjs.com/docs/tutorial/part-six/"> Article</a>
          </li>
          <li>
            Programmatically create blog pages
            <ul>
              <li>
                <code>
                {"//gastby-config.js:\n\
                    resolve: `gatsby-source-filesystem`,\n\
                    options: {\n\
                      name: `posts`,\n\
                      path: `./src/posts/`,\n\
                    },\
                  },"}
                </code>
              </li>
              <li>
                It creates pages that go INTO the posts folder, not routing through the entire app directories
              </li>
            </ul>
          </li>
          <li>
            Set up queries
          </li>
          <li>
            Queries broken?
          </li>
          <li>
            Gatsby plugins on different versions and not lining up
          </li>
          <li>
            Add siteUrl to siteMetadata in <code>gatsby-config.js</code>
            <a href="https://github.com/gatsbyjs/gatsby/issues/13412"> Question</a>
          </li>
          <li>
            CONVERT package.json to older versions
          </li>
          <li>
            Gatsby Remark gist?
            <a href="https://www.gatsbyjs.cn/packages/gatsby-remark-embed-gist/"> Article</a>
          </li>
          <li>
            Post about Gatsby Remark gist
            <a href="https://nicu.dev/posts/gatsby-embed-url"> Article</a>
          </li>
          <li>
            Migrate to mdx (issue with remark):
            <a href="https://www.gatsbyjs.com/docs/how-to/routing/migrate-remark-to-mdx/"> Article</a>
          </li>
          <li>
            Add prism:
            <a href="https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/"> Article</a>
          </li>
          <li>
            Add prism:
            <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx-prismjs/"> Article</a>
          </li>
          <li>
            Use this for Prism:
            <a href="https://github.com/FormidableLabs/prism-react-renderer"> Article</a>
          </li>
          <li>
            Add prism to MDX files:
            <a href="https://codetrain.io/adding-prism-syntax-highlighting-to-gatsby-mdx"> Article</a>
          </li>
        </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
