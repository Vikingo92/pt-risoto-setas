import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import Login from '../components/Login'
import { Registro } from '../components/Registro'
import PrivateRouters from './PrivateRouters'
import PublicRouters from './PublicRouters'
import Dashboard from './Dashboard'

import Header from '../components/Header'

const Routers = () => {

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedIn(true)
            }
            else {
                setIsLoggedIn(false)
            }
            setChecking(false)
        })
    }, [setIsLoggedIn, setChecking])

    if (checking) {
        return (
            <h2>Cargando...</h2>
        )
    }

    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/login' element={
                    <PublicRouters isAut={isLoggedIn}>
                        <Login />
                    </PublicRouters>} />
                <Route path='/registro' element={
                    <PublicRouters isAut={isLoggedIn}>
                        <Registro />
                    </PublicRouters>} />

                <Route path='/*' element={
                    <PrivateRouters isAut={isLoggedIn}>
                        <Dashboard />
                    </PrivateRouters>
                } />

            </Routes>
        </BrowserRouter>
    )
}

export default Routers