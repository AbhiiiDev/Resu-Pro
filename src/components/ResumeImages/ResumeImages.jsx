import React from "react";
import styles from "./ResumeImages.module.css"

function ResumeImages() {
    return (
        <div className={styles.images}>
            <img className={styles.image} src='src\assets\templated1.png' />
            <img className={styles.image} src="src\assets\template2.jpg" />
            <img className={styles.image} src="src\assets\template3.png" />
            <img className={styles.image} src="src\assets\template4.png" />
          
        </div>
    )
}
export default ResumeImages;


