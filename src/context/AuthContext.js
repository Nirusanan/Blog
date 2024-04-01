// useContext - Autentication (global state)
import { createContext, useReducer } from "react";


// create context
export const AuthContext = createContext();

//User Reducer
const userReducer = (state, action) =>{
    switch (action.type){
        case 'LOGIN':
            return {...state, user: action.payload}
        case 'LOGOUT':
            return {...state, user: null}
        default:
            return state
    }
}

export const AuthContextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(userReducer, {user:null})

    console.log("Auth state is", state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}