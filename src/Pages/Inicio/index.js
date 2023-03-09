import React from 'react'
import Banner from 'Componentes/Banner'
import Titulo from "Componentes/Titulo"
import Links from 'Componentes/Links'

export default function Inicio() {
    return (
        <>
            <Banner imagem="1" />
            <Titulo children="Um lugar para guardar seus vídeos e filmes!"/>
            <Links />
        </>
    )
}
