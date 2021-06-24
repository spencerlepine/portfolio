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
    <div className={classes.navbarContainer}>
      <div style={{ margin: "auto", maxWidth: 800, padding: `0 1rem` }}>
        <SEO
          title={siteMetadata.author + " | Full Stack Developer"}
          customTitle
          description={siteMetadata.description}
          image={siteMetadata.image}
          pathname={siteMetadata.siteUrl}
        />

        <header className={classes.navbar}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <img src={logo} className={classes.logo} />
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
    </div>
  );
}
