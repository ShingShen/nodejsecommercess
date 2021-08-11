import React from 'react';
import './header.css';
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
            <div className="header_right_buttons">
                <form className="search_bar">
                    <input
                        className="text_input"
                        placeholder="搜尋商品..."
                    />
                    <button className="search_icon">
                        <SearchIcon />
                    </button>
                </form>
                <Link to="/cart" className="cart">
                    <ShoppingCartIcon />
                </Link>
                <Link to="/register" className="register">
                    <h1>註冊</h1>
                </Link>
                <Link to="/login" className="login">
                    <h1>登入</h1>
                </Link>
            </div>
        </div>
    )
}

export default header
