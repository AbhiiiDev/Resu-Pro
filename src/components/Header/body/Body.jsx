import React from 'react'
import Editor from '../../Editor/Editor '
import styles from './Body.module.css'

function Body() {
    const colors=[ "#239ce2" , "#48bb78" , "#0bc5ea", "#a0aec0" , "#ed8936"  ];
    const sections ={
        basinInfo:"Basic Info",
        workExp:"Work Experience",
        project:"Project",
        education:"Education",
        achievements:"Achievements",
        summary:"Summary",
        others:"Others"
    }; 
  return (
    <div className={styles.container}>
<p className={styles.heading}>Resume Builder</p>
<div className={styles.toolbar}>
    <div className={styles.colors}>
{
    colors.map((item)=>(
        <span className={styles.color} 
        key={item}
style={{backgroundColor:item}}

/>
        ))
}
    </div>
    <button>download</button>
</div> 
<div className={styles.main}>
    <Editor sections={sections}/>
</div>
    </div>
  ) 
}

export default Body