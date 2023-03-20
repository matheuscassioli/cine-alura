import React, { useEffect, useState } from 'react'
import Banner from 'Componentes/Banner'
import Titulo from "Componentes/Titulo"
import store from 'store/store'
import link from "../../json/db.json"
import styles from "../../Componentes/Links/Links.module.css"

export default function Favoritos() {

    const [favs, setFavs] = useState({})

    useEffect(() => {
        let numbers = store.getState().favs

        Object.keys(numbers == undefined ? '' : numbers).map(key => {
            Object.keys(link).filter(k => {
                if (link[k].id == numbers[key]) {
                    setFavs(link[k])
                }
            })
        })
    }, [])
    return (
        <>
            <Banner imagem="2" />
            <Titulo children="Meus Favoritos" />
            <div className={styles.links}>
                {Object.keys(favs).map(key => {
                    return <div key={favs.id + Math.random()} className={styles.link} >
                        <div className={styles.img} data={favs.id}>
                            <img src={favs.capa} className={styles.capa}></img>
                            <h4 className={styles.titulo}>{favs.titulo}</h4>
                        </div>
                    </div>
                })}
                
            </div>
        </>
    )
}
