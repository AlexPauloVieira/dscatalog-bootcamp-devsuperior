import React from 'react';
<<<<<<< HEAD
import { Link, NavLink } from 'react-router-dom';
=======
>>>>>>> 79e6e9679815baeb7a869b2e4542955250cd1b83
import './styles.scss';

const Navbar = () => (
    <nav className="row bg-primary main-nav">
        <div className="col-2">
<<<<<<< HEAD
            <Link to="/" className="nav-logo-text">
                <h4>DS Catalog</h4>
            </Link>
=======
            <a href="link" className="nav-logo-text">
                <h4>DS Catalog</h4>
            </a>
>>>>>>> 79e6e9679815baeb7a869b2e4542955250cd1b83
        </div>
        <div className="col-6 offset-2">
            <ul className="main-menu">
                <li>
<<<<<<< HEAD
                    <NavLink to="/" activeClassName="active" exact>
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/catalog" activeClassName="active">
                        CATÁLOGO
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin" activeClassName="active">
                        ADMIN
                    </NavLink>
=======
                    <a href="link" className="active">
                        HOME
                    </a>
                </li>
                <li>
                    <a href="link">
                        CATÁLOGO
                    </a>
                </li>
                <li>
                    <a href="link">
                        ADMIN
                    </a>
>>>>>>> 79e6e9679815baeb7a869b2e4542955250cd1b83
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;