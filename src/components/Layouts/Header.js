import React, { useContext } from 'react';
import AuthContext from './../../Context/auth'
import { Link, NavLink } from 'react-router-dom'


function Header() {

    const authContext =  useContext(AuthContext)

    let doLogin = () => authContext.dispatch({ type: 'login_user'});
    let doLogout = () => authContext.dispatch({ type: 'logout_user'});

    return (
        <header>
            <div className="navbar navbar-dark bg-dark shadow-sm navbar-expand-md">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <strong>Todo App</strong>
                    </a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={{
                                pathname: "/about",
                                search: '?name=sima',
                                hash:'#mypage'
                            }}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link" to="/contact">Contact</Link> */}
                            <NavLink className="nav-link" to={location => `/contact${location.search}`}>Contact</NavLink>
                        </li>
                    </ul>
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