import React from 'react'
import {Link} from 'gatsby'

const Nav = () => {

  
    return(

    <nav>
<Link to='/' activeStyle={{ color: "#f06666" }}>Początek</Link>
        <Link to='/contact' activeStyle={{ color: "#f06666" }}>Kontakt</Link>      
        
    </nav>
)}

export default Nav