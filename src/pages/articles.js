import React from "react";
import Layout from '../components/Layout';
import * as styles from "../styles/article-details.module.css"
import { graphql, Link, navigate } from "gatsby"

export default function ArticleDetails0({ data }) {
    const { html } = data.markdownRemark
    const { title } = data.markdownRemark.frontmatter

    const articles = data.allMarkdownRemark.nodes

    console.log(data);

    navigate("/articles/capturing-process");

    return (
        <div className={styles.fullWrapper}>
            
            <Layout>

                    <div className="sidenav">

                      {articles.map(article => (
                          <Link to={"/articles/" + article.frontmatter.slug} 
                                key={article.id} activeStyle={{ color: "blue", fontWeight: 700}}
                          >{ article.frontmatter.title }</Link>
                      ))}    
        
                    </div>
                    
                    <div className={styles.portfolio}> 
                        <h2>{ title }</h2>  
                    </div>
                    

                   <div className={styles.portfolio} dangerouslySetInnerHTML={{__html: html }} />

            </Layout>
        </div>
    
    )
}

export const query = graphql`
query ArtPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          title
        }
        id
      }
    }
    markdownRemark(frontmatter: {slug: {eq: "capturing-process"}}) {
      frontmatter {
        title
      }
      html
    }
  }
  
`