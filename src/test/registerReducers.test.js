import { registerReducers } from "../reducers/registerReducers";

describe('prueba autenticacion', () => {

    test('retorna el estado', () => {

        const state = registerReducers({ state:false }, {})

        expect(state).toEqual({ state:false })
    })

    
})