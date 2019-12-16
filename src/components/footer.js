import React from 'react'


const Footer = ({children}) => {
       
    return (
        <footer >            
            <p>Created by zbyszrom, © 2019</p> 
            <div style={{backgroundColor: '#bbb', margin: '0 1rem'}}>
            <a style={{color:'blue'}} href="https://www.facebook.com/profile.php?id=100004800559124" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-2x "></i></a>
            <a style={{color:'purple'}} href="https://www.youtube.com/user/zbyszrom/videos?view_as=subscriber" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube fa-2x "></i></a> 
            </div>          
        </footer>
    )
}

export default Footer