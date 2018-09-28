const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const categoryEquipementTemplate = path.resolve(
    `src/templates/equipement.js`
  );

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              client
              excerpt
              path
              image {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: categoryEquipementTemplate
      });
    });
  });
};
