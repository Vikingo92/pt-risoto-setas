import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUsers } from '../actions/actionUsers';
import EditarUsuarios from './EditarUsuarios';
import {  DivTable } from './styles/ListUser.Styled';

export const ListUsers = () => {

    const dispatch = useDispatch();

    const [modal, setModal] = useState(false);
    const [sendData, setSendData] = useState([])

    const { users } = useSelector(state => state.users);
    // console.log(users);


    const editar = (email) => {

        const showUsuarios = users.find(u => u.email === email)
        setModal(true)
        setSendData(showUsuarios)

    }

    useEffect(() => {

    }, [])

    return (
        <>
            <DivTable>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombres</th>
                            <th>Username</th>
                            <th>Cedula</th>
                            <th>Tarjeta de Credito</th>
                            <th>Celular</th>
                            <th>Dirección</th>
                            <th>E-mail</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users ?
                                users.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.nombres}</td>
                                                <td>{item.username}</td>
                                                <td>{item.cedula}</td>
                                                <td>{item.tarjeta}</td>
                                                <td>{item.celular}</td>
                                                <td>{item.direccion}</td>
                                                <td>{item.email}</td>
                                                <td>
                                                    <Button className='btn btn-danger' onClick={() => dispatch(deleteUsers(item.email))}>Eliminar</Button>
                                                </td>
                                                <td>
                                                    <Button className='btn btn-warning' onClick={() => editar(item.email)}>Editar</Button>
                                                </td>
                                            </tr>
                                        ))
                                :
                                <p>Datos no disponibles</p>
                        }

                    </tbody>
                </Table>
            </DivTable>

            <div>

                {
                    modal === true ? <EditarUsuarios setModal={setModal} modalBooleana={modal} modal={sendData} /> : ''
                }
            </div>
        </>
    )

}