import React from 'react';
// import './header.css';
import ECommer from './images/ECommer.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

function header() {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header_logo"
                    src={ECommer}
                    alt='ECommer'
                />
            </Link>
            <ul className="header_right_buttons">
                <form method="POST" className="search_bar">
                    <input
                        className="text_input"
                        placeholder="搜尋商品..."
                    />
                    <button type ="submit" className="search_icon">
                        <SearchIcon />
                    </button>
                </form>
                <Link to="/cart" className="cart">
                    <ShoppingCartIcon />
                </Link>
                <Link to="/register" className="register">
                    <li>註冊</li>
                </Link>
                <Link to="/login" className="login">
                    <li>登入</li>
                </Link>
            </ul>
        </div>
    )
}

export default header
