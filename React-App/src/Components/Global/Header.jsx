import React from 'react'
import styles from '../../css/Glboal/Header.module.css'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../Assets/dogs.svg';

const Header = () => {
  return (
    <div className={styles.header}>

      <nav>
        <Link to={"/"} aria-label="Dogs - Home"><Logo/></Link>
        <Link to={"/login"}>Login</Link>
      </nav>

    </div>
  )
}

export default Header