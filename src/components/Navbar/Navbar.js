import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import SEO from "../SEO/SEO"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Navbar() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            image
            description
            author
          }
        }
      }
    `
  )

  const { siteMetadata } = data.site
 
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
        <SEO
          title={siteMetadata.author + " | Full Stack Developer"}
          customTitle
          description={siteMetadata.description}
          description={siteMetadata.description}
          image={siteMetadata.image}
          pathname={siteMetadata.siteUrl}
        />

        <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>{siteMetadata.title}</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/blog">Blog</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
    </div>
  )
}