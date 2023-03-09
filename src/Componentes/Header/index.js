import React from 'react'
import styles from './header.module.css'
import logo from "./logo.png"
import nav from "../../json/nav.json"
import { Link, useLocation } from 'react-router-dom'
import "rsuite/dist/rsuite.css";


export default function Header() {

    const location = useLocation();

    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <img src={logo} alt="Logo Cine Alura" />
            </div>
            <div className={styles.headerRight}>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        {
                            nav.map((key) => {
                                return <Link key={key.id} className={`${styles.item} +  ${location.pathname === key.path ? styles.underline : ''}`} to={key.path}>{key.navItem}</Link>
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>

    )
}

{/* <Navbar.Brand href="#"></Navbar.Brand> LOGO */ }