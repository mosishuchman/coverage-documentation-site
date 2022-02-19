import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function APIHTML(props) {

    let t = props.title;

    console.log("Greetings from a componeant " + t );

    

    const data = useStaticQuery(graphql`
        query getH {
            markdownRemark(frontmatter: {title: {eq: "Listening process"}}) {
                html
            }
        }
    `)

    console.log(data);

    return (
        <div> <h2 style={{color: "red"}}>Hello--: {props.title} :--Hello</h2>
            <div className='' dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>  
    )
}


