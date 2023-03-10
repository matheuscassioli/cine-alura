import React from 'react'
import not from "./not-found.png"
import styles from "./notfound.module.css"

export default function NotFound() {
  return (
    <div className={styles.notFoundPage}>
      <img src={not} className={styles.imgNot} alt='Imagem de pessoas desconectadas entre aspas' />
      <div className={styles.list}>
        <h2 className={styles.ops}>Ops! Página não encontrada</h2>
        <h3 className={styles.verifique}>Verifique se você não digitou algo erro :)</h3>
      </div>
    </div>
  )
}
