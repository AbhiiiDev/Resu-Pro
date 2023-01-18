import React from 'react'
import styles from './Header.module.css'
import resumeSVG from '../../assets/resume.svg'

function Header() {
  return (
<div className={styles.container}>
    <p className={styles.heading}>
        A <span>Resume</span> that stand out!
      
    </p>
     <p className={styles.heading}>
        Make your own resume. <span>It's free</span>
    </p> 
    <div className={styles.right}>
      <img src={resumeSVG} alt="Resume" />
    </div>
</div>
  )
}

export default Header