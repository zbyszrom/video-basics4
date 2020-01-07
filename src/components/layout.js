
import React from "react"
import PropTypes from "prop-types"
import Nav from './nav'
import Footer from './footer' 
import '../styles/layout.scss'
import '../styles/backgrounds.scss'
import '../styles/pagination.scss'
import styled from "styled-components"



const Layout = ({ children }) => {

  const Container = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;`
  
  return (
    <Container>
         <Nav /> 
        {children}
        <Footer />      
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
