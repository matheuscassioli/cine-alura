import React from 'react'
import styles from "./Links.module.css"
import link from "../../json/db.json"
import "./Links.css"
import store, { SET_FAVS } from 'store/store'
import { useDispatch } from 'react-redux';

export default function Links() {

    const dispatch = useDispatch();

    const changeBgFav = (e) => {
        console.log(e.target.parentNode)
        e.target.classList.toggle('favPreen')
        dispatch({ type: SET_FAVS, favs:  e.target.parentNode})
    }

    return (
        <div className={styles.links}>
            {link.map(key => {
                return <div key={key.id} className={styles.link}>
                        <div className={styles.img} >
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
