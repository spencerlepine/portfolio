const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { format } = require("date-fns");

const nodeHtmlToImage = require("node-html-to-image");

const html = ({
  title,
  domain,
  border,
  titleColor,
  bgColor,
  imgHeight,
  imgWidth,
  style = "",
}) => `
    <html>
        <head>
            <style>
            ${
              style.length !== 0
                ? style
                : `
                    :root {
                        --imgHeight: ${imgHeight};
                        --imgWidth: ${imgWidth};
                    }
                    * {
                        box-sizing: border-box;
                    }
                    body {
                        font-family: monospace;
                        width: var(--imgWidth);
                        height: var(--imgHeight);
                        padding: 30px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: ${bgColor};
                    }
                    .container {
                        width: 100%;
                        height: 100%;
                        padding: 30px;
                        border: ${border ? "2px solid #ddd" : "none"}; 
                        display: flex;
                        flex-flow: column;
                        justify-content: flex-start;
                        box-shadow: 10px 10px 0 rgb(0, 0, 0, .1);
                    }
                    .blog-title {
                        display: flex;
                        align-items: center;
                        height: 90%;
                    }
                    h1{
                        font-size: 80px;
                        text-transform: uppercase;
                        margin: 0;
                        color: ${titleColor ? titleColor : "black"};
                    }
                    .domain {
                        display: flex;
                        justify-content: flex-end;
                        color: #ddd;
                    }
                    p {
                        font-size: 20px;
                    }
                `
            }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='blog-title'>
                    <h1>${title}</h1>
                </div>
                <div class='domain'>
                    <p>${domain}</p>
                </div>
            </div>
        </body>
    </html>
`;

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

createImage = ({
  title,
  imgPath,
  // default values bgColor, titleColr, image width and height
  bgColor = "white",
  titleColor = "black",
  border = true,
  domain,
  imgHeight = "600px",
  imgWidth = "1000px",
  // Empty string is the default value for style which means the default style would be used
  style = "",
}) => {
  const image = html({
    title,
    domain,
    border,
    titleColor,
    bgColor,
    imgHeight,
    imgWidth,
    style,
  });

  const imgName = titleToSlug(title);
  const imgSlug = `${imgPath}/${imgName}.png`;

  nodeHtmlToImage({
    output: imgSlug,
    html: image,
  }).catch((err) => {
    console.log(
      `Error from ${"pluginName"},\nCouldn't create image because: ${err}`
      
    );
  });

  // Remove './src/' and return the image slug
  return imgSlug.replace(/^(\.\/src\/)/, "");
};

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
    const generatedCoverSlug = createImage({
      title,
      imgPath: "./src/images",
      domain: "https://spencerlepine.com",
    });
    console.log(generatedCoverSlug);
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
