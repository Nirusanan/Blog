import React, { useState } from 'react'
import './Signup.css'
import Appsubmitbutton from '../../components/appsubmitbutton/Appsubmitbutton'
import { useAuthentication } from '../../hooks/useAuthentication'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [validationError, setValidationError] = useState(null)
    const { signup, error } = useAuthentication('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!firstName) {
            setValidationError("First Name can not be empty")
            return
        } else if (!lastName) {
            setValidationError("Last Name can not be empty")
            return
        } else if (!email) {
            setValidationError("Email can not be empty")
            return
        } else if (!password) {
            setValidationError("Password can not be empty")
            return
        }
        setValidationError(null)

        console.log({ email, password, firstName, lastName })

        // server authentication
        signup({ email, password, firstName, lastName })
    }

    return (
        <div className='outercontainer'>
            <h2 className='titlespacing'>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="inputFirstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="inputFirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputLastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="inputLastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {
                    validationError && <div className="alert alert-danger" role="alert">
                        {validationError}
                    </div>
                }
                {
                    error && <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                }
                <div className="float-end">
                    <Appsubmitbutton title="Signup" />
                </div>
            </form>
        </div>


    )
}
