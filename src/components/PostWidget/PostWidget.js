import React from "react";
import useStyles from "./styles"

import { Link } from "gatsby"

export default function PostWidget({ allMdx }) {
  const classes = useStyles();

  return (
    <div className={classes.postWidgetContainer}>
      <h4 className={classes.widgetTitle} >Posts</h4>
      {allMdx.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            className={classes.postLink}
          >
            <h3>
              {node.frontmatter.title}
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div >
  );
}