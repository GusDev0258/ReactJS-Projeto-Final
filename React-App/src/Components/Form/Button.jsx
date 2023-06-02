import React from 'react'
import styles from '../../css/Components/Form/Button.module.css';

const Button = ({children, ...props}) => {
  return (
    <button {...props} className={styles.button}>{children}</button>
  )
}

export default Button