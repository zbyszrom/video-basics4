import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import Layout from '../components/layout'


const VideosArchive = (props) => {
        const videoContent = props.data.allContentfulVideo
        const { currentPage, numPages } = props.pageContext
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const prevPage = currentPage - 1 === 1 ? '/video' : `/video/${currentPage - 1}`
        const nextPage = `/video/${currentPage + 1}` 
    

    return (
        <Layout>
            
            
        
        <div className = 'cards'>
            {videoContent.edges.map(edge => (
                <div key={edge.node.id} className = 'card' >
                <br/>
                <h3 >{edge.node.title}</h3>
                <img src={edge.node.featuredImage.fluid.src} alt=""
            onClick={() => navigate(`/video/${edge.node.slug}`)}/>
            
            <p className = 'link'  onClick={() => navigate(`/text/${edge.node.lyric.slug}`)} >
                {edge.node.lyric.artists} - {edge.node.lyric.title}</p>

            </div>          
 
            
            ))}
        </div>
        <div >
            <div >
                {!isFirst && (
                    <Link to={prevPage} rel='prev'>
                        <div ></div>
                    </Link>
                )}
            </div>
            <div >
                {!isLast && (
                    <Link to={nextPage} rel='next'>
                        <div ></div>
                    </Link>
                )}
            </div>
        </div> 
        <div className = 'hero-foot' />    
        </Layout>
    )

}
export default VideosArchive

export const pageQuery = graphql` 
 query ArchiveQuery($skip: Int!, $limit: Int!){
   allContentfulVideo(
       sort: { fields: [videoCreatedAt], order: DESC }
       skip: $skip
       limit: $limit
     ) {
     edges {
       node {
          id
          slug
          title 
          featuredImage {
          fluid {
            src             
            }
          }
          lyric {
            artists
            title
            slug
          }           
       }
     }
   }
}
`