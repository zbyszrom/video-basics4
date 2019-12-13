

const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
 // Query for nodes to use in creating pages.
 resolve(
   graphql(request).then(result => {
     if (result.errors) {
       reject(result.errors)
     }
     return result;
   })
 )
});

// Implement the Gatsby API "createPages". This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
 const { createPage } = actions;

// Create pages for each video.
 const getVideo = makeRequest(graphql, `
   {
     allContentfulVideo (
      sort: { fields: videoCreatedAt, order: DESC }
       )
     {
       edges {
         node {
           id
           slug
         }
       }
     }
   }
   `).then(result => {
   result.data.allContentfulVideo.edges.forEach(({ node }) => {
     createPage({
       path: `video/${node.slug}`,
       component: path.resolve(`src/templates/video.js`),
       context: {
         id: node.id,
       },
     })
   })
});


// Create archive page for all videos, including pagination
const getArchive = makeRequest(graphql, `
{
  allContentfulVideo (
    sort: { fields: videoCreatedAt, order: DESC }
  )
  {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const videos = result.data.allContentfulVideo.edges
  const videosPerPage = 9
  const numPages = Math.ceil(videos.length / videosPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/video` : `/video/${i + 1}`,
      component: path.resolve("./src/templates/videos_archive.js"),
      context: {
        limit: videosPerPage,
        skip: i * videosPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});



return Promise.all([
  getVideo,
  getArchive
 ])
};

