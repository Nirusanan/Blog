import React, { useState } from 'react'
import "./Login.css"
import NavbarPost from '../../components/navbar/NavbarPost'
import ThemeSwitch from '../../components/switch/Themeswitch'
import Appsubmitbutton from '../../components/appsubmitbutton/Appsubmitbutton'
import { useAuthentication } from '../../hooks/useAuthentication'


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validationError, setValidationError] = useState(null)
    const { login, error}= useAuthentication('')

    

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email) {
            setValidationError("Email can not be empty")
            return
        } else if (!password) {
            setValidationError("Password can not be empty")
            return
        }
        setValidationError(null)

        console.log({ email, password })

        // server authentication
        login({ email, password })
    }

    return (
        <div>
            <div>
                <NavbarPost />
                <ThemeSwitch />
            </div>
            <div className='outercontainer'>
                    <h2 className='titlespacing'>Login</h2>
                    <form onSubmit={handleSubmit}>
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
                            <Appsubmitbutton title="Login" />
                        </div>
                    </form>
                </div>
        </div>
    )
}
