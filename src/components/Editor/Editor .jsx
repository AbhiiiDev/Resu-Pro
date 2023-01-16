import React from 'react'
import styles from './Editor.module.css'
import { useState } from 'react';

function Editor (props) {
    const sections=props.sections;
const [ActiveSectionKey, setActiveSectionKey] = useState(
  Object.keys(sections)[0]
)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key)=>(
            <div className={`${styles.section} ${
              ActiveSectionKey===key ? styles.active : ""
              }`
            }
            key={key}
            onClick={()=>setActiveSectionKey(key)}>
                {sections[key]}
              
                </div>
        ))}
      </div>
    </div>
  )
}

export default Editor 
