import React from 'react'
import styles from './Header.module.css'
import resumeSVG from '../../assets/resume.svg'
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import videoFile from "./videoFile.mp4";
function Header() {
  const [text]=useTypewriter({
    words:['to help you','to build resume'],
    loop:{},
    typeSpeed:120,
    deleteSpeed: 80,
  });
  return (
    <div className={styles.container} >
<div >
    <p style={{fontSize:'30px'}} >
      <h1 style={{margin:'30px',border:'2px'}}>
      We are here {' '}
      <span style={{fontWeight:'bold',color:'green'}}>
        {text}
      </span>
      <span style={{color:'black'}}>
        <Cursor cursorStyle='>'/>
      </span>
    
    </h1>
        {/* A <span>Resume</span> that stand out! */}
    </p>
    {/* <p className={styles.heading} style={{flexDirection:'row-reverse'}} >
    Get noticed by recruiters <span> Resupro</span>
    </p> */}
    
</div>
{/* <div className={styles.right}>
      <img src={resumeSVG} alt="Resume" />
    </div> */}
    <div className={styles.video_container}>

    <div className={styles.heading}  >
    Get noticed by recruiters <span> Resupro</span>
    </div>
    <div>
    <video className={styles.video} src={videoFile} controls autoPlay loop muted />
    </div>
        
      </div>
    </div>
  )
}

export default Header