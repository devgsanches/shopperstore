import {
    faBars, faSearch, faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar({ setShowSidebarCart, selectedProducts }) {
    const [show, setShow] = useState(false)

    return (
        <div>
            <div className="nav">
                <div className="inner-content">
                    <div className="logo-shopper">
                        <img src='../images/shopper.png' className='logo-shopper' alt='logo-shopper' />
                    </div>
                    <h1 className="logo">
                        SHOPPER <span>STORE</span>
                    </h1>
                    <nav className={`${show && "show"}`} >
                        <div className="navbar-center">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/products">Produtos</Link>
                                </li>
                                <li>
                                    <Link to="/about">Sobre</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contato</Link>
                                </li>
                                <li>
                                    <Link to="/account">Conta</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className='navs-icon-container'>
                        <div className="search-input-container">
                            <input type="search" placeholder='O que está procurando?' />
                            <FontAwesomeIcon icon={faSearch} className='busca' />
                        </div>
                        <button className='shopping-cart' onClick={() => setShowSidebarCart(true)}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <div className="products-count">{selectedProducts.length}</div>
                        </button>
                        <button className="menu-button" onClick={() => setShow(!show)}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
