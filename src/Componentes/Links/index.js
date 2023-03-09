import React from 'react'
import styles from "./Links.module.css"
import link from "../../json/db.json"

export default function Links() {
    return (
        <div className={styles.links}>
            {link.map(key => {
                return <div key={key.id} className={styles.link}>
                    <div className={styles.img} >
                        <img src={key.capa} className={styles.capa}></img>
                        <h4 className={styles.titulo}>{key.titulo}</h4>
                    <div className={styles.fav}>

                    </div>
                    </div>
                </div>
            }
            )}
        </div>
    )
}
