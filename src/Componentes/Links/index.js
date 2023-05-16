import React, { useState } from 'react'
import styles from "./Links.module.css"
import link from "../../json/db.json"
import "./Links.css"
import store, { SET_FAVS } from 'store/store'
import { useDispatch } from 'react-redux';

export default function Links() {

    const dispatch = useDispatch();

    const [favs, setFavs] = useState([])

    const changeBgFav = (e) => {
        e.target.classList.toggle('favPreen')
        let data = e.target.parentNode.getAttribute('data')
        if (e.target.classList.contains('favPreen')) {
            if (favs.hasOwnProperty(data)) {
                console.log('sim')
            } else {
                favs.push(data)
            }
            dispatch({ type: SET_FAVS, favs: favs })
        } else {
            var indice = favs.indexOf(data);
            favs.splice(indice, 1)
            dispatch({ type: SET_FAVS, favs: favs })
        }
    }

    return (
        <div className={styles.links}>
            {link.map(key => {
                return <div key={key.id} className={styles.link} >
                    <div className={styles.img} data={key.id}>
                        <img src={key.capa} className={styles.capa}></img>
                        <h4 className={styles.titulo}>{key.titulo}</h4>
                        <div className={styles.fav} onClick={(e) => changeBgFav(e)}>
                        </div>
                    </div>
                </div>
            }
            )}
        </div>
    )
}
