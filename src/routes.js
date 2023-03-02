import Inicio from 'Pages/Inicio'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from 'Pages/NotFound'
import Header from 'Componentes/Header'
import Favoritos from 'Pages/Favoritos'

export default function AopRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Inicio />}></Route>
                <Route path='/favoritos' element={<Favoritos />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
