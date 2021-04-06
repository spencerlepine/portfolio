import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "../components/CodeBlock/CodeBlock";
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"

const components = {
  pre: CodeBlock
}

const BlogPost = ({ data }) => {
  const post = data.mdx

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt || "nothing"}
        image={post.frontmatter.image.childImageSharp.sizes.src}
        pathname={post.fields.slug}
        article
      />

      <h2>{post.frontmatter.title}</h2>
      
      <img src={require(`../${post.fields.generatedCoverSlug}`)} alt="Blog Cover" width="100%" />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0"
        }}
      >
        <a
          href={`http://twitter.com/share?text=${ "Check out this article: " }&url=https://spencerlepine.com${ post.fields.slug }${ post.frontmatter.tags ? `&hashtags=${ post.frontmatter.tags }` : "" }`}
          className="twitter-share-button"
          data-text=""
          data-via="spencerlepine"
          data-show-count="false">Tweet
        </a>
      </div>

      <MDXProvider components={components}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date
        tags
        image {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      fields {
        slug
        generatedCoverSlug
      }
    }
  }
`
