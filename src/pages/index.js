import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from '../components/intro'
import Featured from '../components/featured'

const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
    <Intro/>
    <Featured/> 
  </Layout>
)

export default IndexPage
