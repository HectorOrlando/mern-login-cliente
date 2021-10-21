import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import imagenes from '../../assets/imagenes'

const Proyectos = () => {

    return (
        <Fragment>
            <header className="p3 bg-dark text-white">
                <div className="container-5m p-4">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <h1 className="h1">Desde Proyectos</h1>
                        <div className="text-end col-4">
                            <Link
                                className="btn btn-warning"
                                type="button"
                                to={'/'}
                            >
                                Sing-up
                            </Link>
                        </div>
                    </div>

                </div>
            </header>

            <div className="container-sm p-4  text-center">
                <img src={imagenes.gatoAnimado} className="img-fluid" />
            </div>
        </Fragment>


    )
}

export default Proyectos