import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

export default function GettingStarted({ data }) {
  const { html } = data.markdownRemark
  console.log({ html});



  return (
      <Layout>
        <div style={{ maxWidth: 800, margin: "auto", textAlign: "left" }}>
            <div dangerouslySetInnerHTML={{ __html: html }}/> 
        </div>
      </Layout>
  )
}

// export page query
export const query = graphql`
query mainConceptsMD($frontmatter: MarkdownRemarkFrontmatterFilterInput = {title: {eq: "main conpects"}}) {
  markdownRemark(frontmatter: $frontmatter) {
    html
  }
}
`