import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const NuevaCuenta = () => {

    // useState
    const [nuevacuenta, guardarNuevaCuenta] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    // extraigo de nuevacuenta
    const {name, email, password, confirmPassword} = nuevacuenta

    const onChange = e => {
        guardarNuevaCuenta({
            ...nuevacuenta,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        // validar campos vacios

        // password minimo 6 caracteres
        
        // los dos password deben ser iguales.
    }

    return (
        <div className="container-sm p-5 my-5 bg-dark text-white">
            <h1 className="p-1 my-5">Obtener una cuenta</h1>
            <form
                onSubmit={onSubmit}
            >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}
                    />
                </div>
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
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                    <input
                        className="form-control"
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Registrarme"
                    />
                </div>
            </form>
            <Link
                className="link-light"
                to={'/'}
            >
            Volver a iniciar sesión
            </Link>
        </div>
    )
}

export default NuevaCuenta