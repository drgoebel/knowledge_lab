/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allContentfulKLabPage {
        nodes {
          id
          contentful_id
          title
          slug
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const klPages = result.data.allContentfulKLabPage.nodes;

  // klPages.forEach((page) => {
  //   createPage({
  //     path: `/${page.slug}`,
  //     component: path.resolve(`./src/templates/pageTemplate.js`),
  //     context: {
  //       slug: page.slug,
  //       pageTitle: page.title,
  //       id: page.id
  //     },
  //   });
  // });
};
