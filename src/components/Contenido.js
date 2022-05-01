import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../actions/actionLogin';
import { useForm } from '../hooks/useForm';
import { listUsers, userAddAsincrono } from '../actions/actionUsers';
import { ListUsers } from './ListUsers';

import { DivForm, DivWelcome } from './styles/Contenido.Styled';
import { Button, Form } from 'react-bootstrap';

const Contenido = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    cedula: '',
    nombres: '',
    username: '',
    tarjeta: '',
    celular: '',
    direccion: '',
    email: '',
    imagen: ''
  })



  let { cedula, nombres, username, tarjeta, celular, direccion, email, imagen } = values;

  const handleRegistro = e => {
    e.preventDefault();
    dispatch(userAddAsincrono(cedula, nombres, username, tarjeta, celular, direccion, email, imagen));
    reset();
  }

  const handleLogout = () => {
    dispatch(logout())

    navigate('/login')
  }

  useEffect(() => {
    dispatch(listUsers())
  }, [])

  return (
    <>
        <div>
          <Link to='/products'>
            <button className='btn btn-info' type='button'>Comprar</button>
          </Link>
          <button className="btn btn-danger" type='button'
            onClick={handleLogout}>Cerrar Sesión</button>
        </div>

      <div>
        <DivForm>

          <form onSubmit={handleRegistro}>
            <h1>Completa tu perfil</h1>
            <p>Para poder comprar los productos debes completar toda la información.</p>
            <div className="form-group">
              <div className="form-group col-md-4">
                <input
                  className="form-control"
                  type="text" name="cedula"
                  id="cedula"
                  placeholder='Cédula'
                  value={cedula}
                  onChange={handleInputChange} />
              </div>

              <div className="form-group col-md-4">
                <input
                  className="form-control"
                  type="text"
                  name="nombres"
                  id="nombres"
                  placeholder='Nombres'
                  value={nombres}
                  onChange={handleInputChange} />
              </div>

              <div className="form-group col-md-4">
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  id="username"
                  placeholder='Username'
                  value={username}
                  onChange={handleInputChange} />
              </div>

              <div className="form-group col-md-4">
                <input
                  className="form-control"
                  type="text"
                  name="tarjeta"
                  id="tarjeta"
                  placeholder='Tarjeta de Crédito xxx - xxx - xxx'
                  value={tarjeta}
                  onChange={handleInputChange} />
              </div>

              <div className="form-group col-md-4">
                <input
                  className="form-control"
                  type="text"
                  name="celular"
                  id="celular"
                  placeholder='(+ 57) Celular'
                  value={celular}
                  onChange={handleInputChange} />
              </div>

              <div className="form-group col-md-4">
                <input
                  className="form-control"
                  type="text"
                  name="direccion"
                  id="direccion"
                  placeholder='Dirección'
                  value={direccion}
                  onChange={handleInputChange} />
              </div>

              <div className="form-group col-md-4">
                <input
                  className="form-control"
                  type='email'
                  name="email"
                  id="email"
                  placeholder='E-mail'
                  value={email}
                  onChange={handleInputChange} />
              </div>
              <br />
              <div>
                <Button
                  className="btn btn-success"
                  type='submit'>Guardar</Button>
              </div>
            </div>
          </form>
        </DivForm>
      </div>
      <ListUsers />
    </>
  )
}

export default Contenido