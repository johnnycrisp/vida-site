/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
//  @type {import('gatsby').GatsbyNode['createPages']}
//  */

// const path = require(`path`);

// async function turnVideosIntoPages({ graphql, actions }) {
//   // 1. Get a template for this page
//   const videoTemplate = path.resolve("./src/templates/video.jsx");

//   // 2. Query all videos
//   const { data } = await graphql(`
//     query {
//       videos: allDatoCmsVideo {
//         nodes {
//           originalId
//           title
//           slug
//         }
//       }
//     }
//   `);
//   // 3. Loop over each video and create a page for that video

//   data.videos.nodes.forEach((video) => {
//     actions.createPage({
//       // The url for the new page
//       path: `/${video.slug}`,
//       component: videoTemplate,
//       context: {
//         slug: video.slug,
//         videoId: video.originalId,
//       },
//     });
//   });
// }

// exports.createPages = async function (params) {
//   // Create pages dynamically
//   //   Wait for all promises to be resolved before finishing this function
//   await Promise.all([turnVideosIntoPages(params)]);
// };
