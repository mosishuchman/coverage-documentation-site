import React from 'react';
import * as styles from "../styles/home.module.css"

export default function MarketingCard(props) {
  return (
    <div className={styles.marketingCard}>
        <h3>{ props.title }</h3>
        <p>{ props.content }</p>

    
    
    
    

    </div>
  )
}
