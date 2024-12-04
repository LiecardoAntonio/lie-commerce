import './navbar.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useProducts } from '../../products-data/ProductContext.jsx';

function Navbar() {
    const [currMenu, setCurrMenu] = useState("home");

    const { getItemCount } = useProducts();
    const totalItemsInCart = getItemCount(); // call getItemCount to get the total item count for cart icon coynt

    return (
        <div className="navbar">
            <div className="brand">
                <img src="https://i.pinimg.com/originals/ef/82/4e/ef824ee86efb3ec6cc6eb6758cd5e70c.png" alt="brands-logo" />
                <h2>LIE-commerce</h2>
            </div>
            <nav className="nav-menu">
                <li
                    className={currMenu === "home" ? "selected" : ""}
                    onClick={() => setCurrMenu("home")}
                >
                    <Link className='link-route' to={'/'}>Home</Link>
                    <hr />
                </li>
                <li
                    className={currMenu === "promo" ? "selected" : ""}
                    onClick={() => setCurrMenu("promo")}
                >
                    <Link className='link-route' to={'/promo'}>Promo</Link>
                    <hr />
                </li>
                <li
                    className={currMenu === "wishlist" ? "selected" : ""}
                    onClick={() => setCurrMenu("wishlist")}
                >
                    <Link className='link-route' to={'/wishlist'}>Wishlist</Link>
                    <hr />
                </li>
            </nav>
            <div className="account">
                <Link className='link-route' to={'/cart'}>
                    <div className='cart-container' onClick={() => setCurrMenu("other")}>
                        <FontAwesomeIcon id='cart-icon' icon={faCartShopping}></FontAwesomeIcon>
                        <p id='item-count'>{totalItemsInCart}</p>
                    </div>
                </Link>
                <Link className='link-route' to={'/loginOrRegister'}>
                    <button id='login-btn' onClick={() => setCurrMenu("other")}>Login</button>
                </Link>
                <Link className='link-route' to={'/loginOrRegister'}>
                    <button id='register-btn' onClick={() => setCurrMenu("other")}>Register</button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;

