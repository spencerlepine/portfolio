import React from 'react'
import { Link } from 'gatsby'

const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px'
}

const Posts = ({ posts }) => (
  <div style={divStyle}>
    {posts.map(post => {
      const {
        id,
        fields: { slug, publishedAt },
        frontmatter: { title }
      } = post.node

      return (
        <Link
          to={slug}
          key={id}
        >
          <article
            style={{
              display: 'flex',
              margin: 'auto',
              borderBottom: '1px solid rgba(0, 0, 0, 0.2)'
            }}
          >
            <h3
              style={{
                flex: 1
              }}
            >
              {title}
            </h3>
            <h4
              style={{
                textAlign: 'right',
              }}
            >
              {publishedAt}
            </h4>
          </article>
        </Link>
      )
    })}
  </div>
)

export default Posts