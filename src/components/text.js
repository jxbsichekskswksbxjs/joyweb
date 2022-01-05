import React from 'react'

import projectStyles from '../style.module.css'
import styles from './text.module.css'

const Text = () => {
  return (
    <div className={styles['container']}>
      <span className={` ${styles['text']} ${projectStyles['textSM']} `}>
        PROFILE
      </span>
    </div>
  )
}

export default Text
