import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

export default function GettingStarted({ data }) {
  const { html } = data.markdownRemark
  console.log({ html});



  return (
      <Layout>
        <div style={{ color: "white", maxWidth: 800, margin: "auto", textAlign: "left" }}>
            <h1>Getting Started</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='' dangerouslySetInnerHTML={{ __html: html }}/> 
        </div>
      </Layout>
  )
}

// export page query
export const query = graphql`
query gettingStartedMD($frontmatter: MarkdownRemarkFrontmatterFilterInput = {title: {eq: "testing started"}}) {
  markdownRemark(frontmatter: $frontmatter) {
    html
  }
}
`

