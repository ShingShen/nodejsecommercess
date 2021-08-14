import React from 'react';
import ECommer from './images/ECommer.png';
import { Link } from 'react-router-dom'

function login() {
    return (
        <div className="login_page">
            <div>
                <Link to='/'>
                    <img
                        className='ecommer'
                        src={ECommer}
                        alt='ECommer'
                    />
                </Link>
            </div>
            <div className="login_system">
                <div className="member_login">
                    <h1>會員登入</h1>
                </div>
                <div>
                    <form>
                        <div className="input_title">
                            <label>E-Mail</label>
                        </div>
                        <div>
                            <input type="email" className="login_input" placeholder='請輸入E-Mail...' />
                        </div>
                        <div className="input_title">
                            <label>密碼</label>
                        </div>
                        <div>
                            <input type="password" className="login_input" placeholder='請輸入密碼...' />
                        </div>
                        <div className="login_or_register">
                            <button type="submit" className="login_button">登入</button>
                            <Link to="/register" className="not_register">還沒註冊?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default login
