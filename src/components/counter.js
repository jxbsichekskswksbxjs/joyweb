import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './counter.module.css'

const Counter = (props) => {
  return (
    <div className={styles['container']}>
      <h1 className={` ${styles['text']} ${projectStyles['textXL']} `}>
        {props.number}
      </h1>
      <span className={` ${styles['text1']} ${projectStyles['textSM']} `}>
        {props.type}
      </span>
    </div>
  )
}

Counter.defaultProps = {
  type: 'Friends',
  number: '22',
}

Counter.propTypes = {
  type: PropTypes.string,
  number: PropTypes.string,
}

export default Counter
