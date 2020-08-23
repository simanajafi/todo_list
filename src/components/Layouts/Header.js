import React, { useContext } from 'react';
import AuthContext from './../../Context/auth'


function Header() {

    const authContext =  useContext(AuthContext)

    let doLogin = () => authContext.login();
    let doLogout = () => authContext.logout();

    return (
        <header>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <strong>Todo App</strong>
                    </a>
                    {
                        ! authContext.authenticated
                        ? <button className="btn btn-sm btn-success" onClick={ doLogin }>login</button>
                        // ? <button className="btn btn-sm btn-success" onClick={ authContext.login }>login</button> injori ham mishod
                        : <button className="btn btn-sm btn-danger" onClick={ doLogout }>logout</button>
                    }
                </div>
            </div>
        </header>
    )
}


export default Header;