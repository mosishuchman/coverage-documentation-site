import React from "react";
import Layout from '../components/Layout';
import * as styles from "../styles/article-details.module.css"
import { graphql, Link } from "gatsby"

export default function ArticleDetails({ data }) {
    const { html } = data.markdownRemark

    const articles = data.allMarkdownRemark.nodes

    console.log(data);

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
                    

                   <div className={styles.portfolio} dangerouslySetInnerHTML={{__html: html }} />

            </Layout>
        </div>
    
    )
}

export const query = graphql`
  query ArticleHTML($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(sort: {fields: frontmatter___order, order: ASC}) {
        nodes {
            frontmatter {
                title
                slug
            }
            id
        }
    }
  }
`



  // allMarkdownRemark(sort: {fields: frontmatter___order, order: ASC}) {
  //   nodes {
  //     frontmatter {
  //       slug
  //       title
  //     }
  //     id
  //   }
  // }
