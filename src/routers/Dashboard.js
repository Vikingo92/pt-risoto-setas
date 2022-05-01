import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Comprar from '../components/Comprar'
import Products from '../components/Products'
import Cart from '../components/Cart'
import Contenido from '../components/Contenido'

const Dashboard = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Contenido />} />
                <Route path='/contenido' element={<Contenido />} />
                <Route path='/comprar' element={<Comprar />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </>
    )
}

export default Dashboard