import React from 'react';
import { Link } from 'react-router-dom';
import ECommer from './images/ECommer.png';

function register() {
    return (
        <div className="register_page">
            <div>
                <Link to='/'>
                    <img
                        className='ecommer'
                        src={ECommer}
                        alt='ECommer'
                    />
                </Link>
            </div>
            <div className="register_system">
                <div className="member_register">
                    <h1>會員註冊</h1>
                </div>
                <div>
                    <form>
                    <div className="input_title">
                            <label>暱稱</label>
                        </div>
                        <div>
                            <input type="text" className="register_input" placeholder='請輸入您的暱稱...' />
                        </div>
                        <div className="input_title">
                            <label>E-Mail</label>
                        </div>
                        <div>
                            <input type="email" className="register_input" placeholder='請輸入E-Mail...' />
                        </div>
                        <div className="input_title">
                            <label>密碼</label>
                        </div>
                        <div>
                            <input type="password" className="register_input" placeholder='請輸入密碼...' />
                        </div>
                        <div className="input_title">
                            <label>密碼確認</label>
                        </div>
                        <div>
                            <input type="password" className="login_input" placeholder='請再輸入一次密碼...' />
                        </div>
                        <div className="login_or_register">
                            <button type="submit" className="register_button">登入</button>
                            <Link to="/login" className="have_account">已是會員?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default register
