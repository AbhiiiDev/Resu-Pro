import React from 'react'
import styles from './Editor.module.css'

function Editor (props) {
    const sections=props.sections;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key)=>(
            <div className={styles.sections} key={key}>
                {sections[key]}
                </div>
        ))}
      </div>
    </div>
  )
}

export default Editor 
