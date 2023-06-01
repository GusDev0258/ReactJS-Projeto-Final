import React from 'react'
import styles from '../../css/Components/Global/Header.module.css';
import { Link } from 'react-router-dom'
import { ReactComponent as Dogs} from '../../Assets/dogs.svg';

const Header = () => {
  return (
    <header className={styles.header}>

      <nav className={`${styles.nav} container`}>
        <Link to={"/"} className={styles.logo} aria-label="Dogs - Home" > <Dogs/> </Link>
        <Link to={"/login"} className={styles.login}>Login</Link>
      </nav>

    </header>
  )
}

export default Header