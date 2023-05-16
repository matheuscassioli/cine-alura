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
        let arr = []
        Object.keys(numbers == undefined ? '' : numbers).map(key => {
            Object.keys(link).filter(k => {
                if (link[k].id == numbers[key]) {
                    arr.push(link[k])
                }
            })
        })
        setFavs(arr)
    }, [])
    return (
        <>
            <Banner imagem="2" />
            <Titulo children="Meus Favoritos" />
            <div className={styles.links}>
                {Object.keys(favs).map(key => {
                    return <div key={favs[key].id} className={styles.link} >
                        <div className={styles.img} data={favs[key].id}>
                            <img src={favs[key].capa} className={styles.capa}></img>
                            <h4 className={styles.titulo}>{favs[key].titulo}</h4>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}
