import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from '../components/CodeBlock/CodeBlock';
import Layout from '../components/Layout/Layout'

const components = {
  pre: CodeBlock
}

const BlogPost = ({ data }) => {
  const post = data.mdx

  let origin = 'https://www.spencerlepine.com'
  let imageSrc = post.frontmatter.thumbnail ? post.frontmatter.thumbnail.childImageSharp.sizes.src : null

  return (
    <Layout>
      <Helmet
        title={`${ post.frontmatter.title } | Spencer`}
        meta={[
          { name: 'description', content: `Check out this post: ${ post.frontmatter.title } by Spencer Lepine.` },
          { property: 'og:title', content: `${ post.frontmatter.title } | Spencer Lepine` },
          { property: 'og:url', content: `https://spencerlepine.com/blog/${ post.fields.slug }` },
          { property: 'og:image', content: origin + imageSrc },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: '@SpencerLepine' },
          { name: 'twitter:title', content: post.frontmatter.title },
          { name: 'twitter:description', content: 'sample description' }, //post.frontmatter.description
          { name: 'twitter:image', content: origin + imageSrc },
        ]}
        
      />
      <h2 blogPost>{post.frontmatter.title}</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px 0'
        }}
      >
        <a
          href={`http://twitter.com/share?text=${ 'Check out this article: ' }&url=https://spencerlepine.com${ post.fields.slug }${ post.frontmatter.tags ? `&hashtags=${ post.frontmatter.tags }` : '' }`}
          class='twitter-share-button'
          data-text=''
          data-via='spencerlepine'
          data-show-count='false'>Tweet
        </a>

        <img src={require(`../${post.fields.generatedCoverSlug}`)} alt='Blog Cover' width='100%' />
      </div>

      <p>{origin}</p>
      <p>{imageSrc}</p>
      <p>{origin + imageSrc}</p>

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
        thumbnail {
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
