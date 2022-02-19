import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { Link } from "gatsby"
import MarketingCard from "../components/MarketingCard"

export default function Home() {

  return (
    <Layout>
      <section className={styles.header}>
          <h2>Business users deserve awesome UX</h2>
          <h3>Grant them 100% Automation</h3>
          <p> Use JS to expand generic platform coverate for Uniphore RPA Automation</p>
          <Link className={styles.btn} to="/getting-started">Get Started</Link>

          <div className={styles.mCardDivGroup}>
            <MarketingCard
              title= 'Fast'
              content= 'A very intualtive guided wizard that make your expansion journey magical!'
            />
            <MarketingCard
              title= 'Intuative'
              content= 'Expand generic platform coverage to fit any application, providing 100% coverage in matter of days!'
            />
            <MarketingCard 
              title= 'Reliable'
              content= 'Build by the original JBot team providing a full-proof library.'
            />
          </div>
      </section>
    </Layout>
    
  )
    
}
 
