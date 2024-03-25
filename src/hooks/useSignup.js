import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth, db } from "../firebaseConfig"
import { doc, setDoc } from "firebase/firestore"

export const useSignup = () => {
    const [error, setError] = useState(null)

    const signup = ({ email, password, firstName, lastName }) => {
        setError(null)

        createUserWithEmailAndPassword(auth, email, password)
            .then((response) => {
                const user = response.user
                
                const docRef = doc(db, 'users', user.uid)
                setDoc(docRef, {firstName, lastName})
            })
            .catch((error) => {
                console.log(error.message)
                setError(error.message)
            })
    }

    return { signup, error }
}