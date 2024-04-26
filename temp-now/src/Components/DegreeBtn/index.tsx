import React from 'react'
import styles from "./DegreeBtn.module.css"

function DegreeBtn() {
  return (
    <div>
        <label className={styles.switch} htmlFor="checkbox">
     
            <input type="checkbox" id="checkbox" checked={true} />
            <div className={`${styles.round} ${styles.slider} center`}>
                <div>°C</div>
                <div>F</div>
            </div>
            
        </label>
    </div>
  )
}

export default DegreeBtn