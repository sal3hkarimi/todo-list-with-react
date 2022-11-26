import React from 'react'
import { useContext } from 'react'
import { useReducer } from 'react'
import { initialState, reducer } from './reducer'


const todoStateContext = React.createContext()
const todoDispatcherContext = React.createContext()

export function useTodoState() {
    const context = useContext(todoStateContext)
    if (!context) {
        throw Error('useTodoState must be used with a todoProvider')
    }
    return context;
}

export function useTodoDispatch(){
    const context = useContext(todoDispatcherContext)
    if (!context) {
        throw Error('useDispatchState must be used with a todoProvide')
    }
    return context;
}

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <todoStateContext.Provider value={state}>
            <todoDispatcherContext.Provider value={dispatch}>
                {children}
            </todoDispatcherContext.Provider>
        </todoStateContext.Provider>
    )
}