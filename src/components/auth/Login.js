import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })

    // Extraer de usuario
    const {email, password} = usuario

    const onChange = e => {

        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault()
        // validar campos vacios

        // pasarlo al action
    }

    return (
        <div className="container-sm p-5 my-5 bg-dark text-white">
            <h1>Mi primer proyecto MERN</h1>
            <form
                onSubmit={onSubmit}
            >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <input 
                        className="btn btn-primary"
                        type="submit"
                        value="Iniciar Sesión"
                    />
                </div>
            </form>
            <Link
                className="link-light"
                to={'/nueva-cuenta'}
            >
                Obtener Cuenta
            </Link>
        </div>
    )
}

export default Login




// <button className="btn btn-primary">Prueba Bootstrap</button>