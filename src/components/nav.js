import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Nav = () => {

   const Items = styled.div`
    background-color: transparent;
    border: none;
    height: 2.5rem;
    margin-top: 2.5rem;
    display: flex;
    
    justify-content: start;
    align-items: start;`
  
return(

    <Items>
<Link to='/' className='navLink' activeStyle={{ color: "#f06666" }}>Początek</Link>
<Link to='/video' className='navLink' activeStyle={{ color: "#f06666" }}>Filmy</Link>
        <Link to='/contact' className='navLink' activeStyle={{ color: "#f06666" }}>Kontakt</Link>      
        
    </Items>
)}

export default Nav