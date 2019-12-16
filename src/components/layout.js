
import React from "react"
import PropTypes from "prop-types"
import Nav from './nav'
import Footer from './footer' 
import '../styles/layout.scss'



const Layout = ({ children }) => {
  
  return (
    <div className='container'>
         <Nav /> 
        <main>{children}</main>
        <Footer />      
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
