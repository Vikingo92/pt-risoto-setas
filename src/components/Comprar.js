import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../actions/actionLogin';
import Navbar from './Navbar';
import { DivWelcome } from './styles/Contenido.Styled'


const Comprar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <div>
            
            <DivWelcome>
                <Navbar/>
                <Link to='/products' style={{ textDecoration: 'none' }}>
                    <h2>Comprar!</h2>
                </Link>
                <div>
                    <Link to='/contenido'>
                        <button className='btn btn-info' type='button'>Home</button>
                    </Link>
                    <button className="btn btn-danger" type='button' onClick={handleLogout}
                    >Cerrar Sesión</button>
                </div>
            </DivWelcome>
        </div>
    )
}


export default Comprar