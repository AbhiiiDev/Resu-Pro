import React from 'react'
import styles from './InputControl.module.css'
function InputControl ({label , ...props})  {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input type="text" {...props}/> 
      {/* //...props:distributing all props(each and every component)  */}
    </div>
  )
}

export default InputControl
