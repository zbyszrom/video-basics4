import React from 'react';
import { graphql, navigate } from 'gatsby';
import styled from 'styled-components'
import Layout from '../components/layout';





const VideoTemplate = (props) => {

    const videoContent = props.data.contentfulVideo

    const Content = styled.div`
    max-width: 80rem;
    margin: 3.5rem auto;
    padding: 0 5%;`


    const Iframe = styled.div`
    padding-bottom: 56.25%; 
    position: relative; 
    display: block; 
    width: 100%;`

    const Text = styled.div`
    max-width: 80rem;
    margin: 3.75rem auto;
    padding: 0 10%;
        font-size: 1.1rem;
        line-height: 2rem;
        font-weight: 300;
        margin: 2.5rem 0;`
    
   
     const Title = styled.div`
      font-family: Baskerville,serif;
      text-align: center;
      font-size: 1.5rem;
      line-height: 1.75;
      font-weight: 400;
      margin: 0 0 .6rem 0;`

      const Excerpt = styled.div`  
      line-height: 2rem;  
      font-style: italic; 
       `

    return (

        <Layout> 
         
        <Content>
                        
            <h1 >{videoContent.title}</h1>
            
            <Iframe >
            <iframe className ='frame' title = {videoContent.title} src={props.data.contentfulVideo.videoUrl}
                 frameborder="0"   width="960" height="540"  allowfullscreen="allowfullscreen"></iframe>
            </Iframe>     
            <Text >
            <p>Główny utwór: </p><h3>{videoContent.lyric.artists}</h3>
            <Title> {videoContent.lyric.title}</Title>
            
            <Excerpt dangerouslySetInnerHTML={
            {__html: `${videoContent.lyric.text.childMarkdownRemark.excerpt}`} }/>
            <Title> {videoContent.lyric.polskiTytu} </Title>
            <Excerpt dangerouslySetInnerHTML={
            {__html: `${videoContent.lyric.polskiTekst.childMarkdownRemark.excerpt}`} }/>
            {/* <p  className = 'link' onClick={() => navigate(`/text/${videoContent.lyric.slug}`)}>Cały utwór</p>*/}
            </Text>   
        </Content>
       
        
        </Layout>
    )
}

export default VideoTemplate;

export const query = graphql`
        query VideoTemplate($id: String!){
            contentfulVideo(id: {eq: $id}) {
                id
                slug
                title
                videoUrl
                lyric {
                  artists
                  title   
                  text {
                    childMarkdownRemark {
                      excerpt
                    }
                  }
                  polskiTytu
                  polskiTekst {
                    childMarkdownRemark {
                      excerpt
                    }
                  }
                  slug
                }
              }

        }`


