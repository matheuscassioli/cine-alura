import React from 'react'
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p className={styles.texto}>Desenvolvido por Alura</p>
            <p className={styles.texto}>Coded by Matheus Cassioli</p>
        </div>
    )
}
