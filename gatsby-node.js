const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { format } = require("date-fns");

const titleToSlug = (title) =>
  title
    // replace characters that are not letters, numbers or whitespaces
    // with empty strings
    .replace(/[^a-z0-9 ]/gi, "")
    //replace whitespaces with hyphens
    .replace(/\s/g, "-")
    // replace double hyphens with one
    .replace(/--/g, "-")
    // change to lowercase
    .toLowerCase();

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` });
    createNodeField({
      node,
      name: `slug`,
      value: `/blog${slug}`,
    });
    createNodeField({
      node,
      name: `publishedAt`,
      value: format(new Date(node.frontmatter.date), "MMM dd, yyyy"),
    });

    const { title } = node.frontmatter;
    const generatedCoverSlug = "images/" + titleToSlug(title) + ".png"

    createNodeField({
      node,
      name: "generatedCoverSlug",
      value: generatedCoverSlug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx {
          edges {
            node {
              id
              fields {
                slug
                generatedCoverSlug
                publishedAt
              }
            }
          }
        }
      }
    `).then((result) => {
      result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: { id: node.id },
        });
      });
      resolve();
    });
  });
};
