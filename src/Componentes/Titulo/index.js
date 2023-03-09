import React from 'react'
import styles from "./Titulo.module.css"

export default function Titulo({ children }) {
    return (
        <h3 className={styles.titulo}>{children}</h3>
    )
}
