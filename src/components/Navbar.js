import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function Navbar() {
    const data = useStaticQuery(graphql`
        query MyQuery {
            site {
            siteMetadata {
                title
            }
            }
        }  
        
    `)

    const { title } = data.site.siteMetadata



  return (
    <nav>
        <div id="navButtons">
            <Link id="homeBtn" to="/">
                <h1>{ title }</h1>
            </Link>
            <div className="links">
                <Link to="/getting-started" activeStyle={{fontWeight: "bold"}}>Getting Started</Link>
                <Link to="/main-concepts" activeStyle={{fontWeight: "bold"}}>Main Concepts</Link>
                <Link id='APILink' to="/articles/" activeStyle={{fontWeight: "bold"}} partiallyActive={true}>API</Link>
                        
            </div>
        </div>
        
    </nav>

  )
    
  

}
