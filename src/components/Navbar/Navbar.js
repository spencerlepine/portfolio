import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import SEO from "../SEO/SEO";
import useStyles from "./styles.js";
import logo from "../../images/logo.svg"

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
  );

  const classes = useStyles();
  const { siteMetadata } = data.site;

  return (
    <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
      <SEO
        title={siteMetadata.author + " | Full Stack Developer"}
        customTitle
        description={siteMetadata.description}
        image={siteMetadata.image}
        pathname={siteMetadata.siteUrl}
      />

      <header className={classes.navbar} style={{ marginBottom: `1.5rem`, display: "flex" }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}><img src={logo} className={classes.logo}></img></h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <li className={classes.link}>
            <Link to="/blog" className={classes.linkText}>
              Blog
            </Link>
          </li>
          <li className={classes.link}>
            <Link to="/about" className={classes.linkText}>
              About
            </Link>
          </li>
          <li className={classes.link}>
            <Link to="/contact" className={classes.linkText}>
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
