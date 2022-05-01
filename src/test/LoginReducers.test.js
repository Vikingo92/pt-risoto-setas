import { LoginReducers } from '../reducers/LoginReducers'

describe('prueba autenticacion', () => {

    test('retorna el estado', () => {

        const state = LoginReducers({ logout: false }, {})

        expect(state).toEqual({ logout: false })
    })

    
})