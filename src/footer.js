import React from 'react';
// import './style.css';

function footer() {
    return (
        <div className="footer">
            <div className="footer_content">
                <div>
                    <h1 className="footer_title">關於我們</h1>
                    <ul className="footer_list">
                        <li>最新消息</li>
                        <li>合作商家</li>
                    </ul>
                </div>
                <div>
                    <h1 className="footer_title">聯絡我們</h1>
                    <ul className="footer_list">
                        <li>E-mail: XXX@XXX.com</li>
                        <li>電話: XX XXXX XXXX</li>
                        <li>服務時間: 週一 ~ 週五 9:30 ~ 7:00</li>
                        <li>地址: 浣熊市吉兒區克蕾兒路23號100F</li>
                    </ul>
                </div>
                <div className="subscribe">
                    <h1 className="footer_title">訂閱電子報</h1>
                    <form method="post" className="subscribe_form">
                        <div className="subscribe_input">
                            <input
                                type="email"
                                className="subscribe_input_content"
                                placeholder="請輸入您的E-mail..."
                            />
                        </div>
                        <div>
                            <button type="submit" className="subscribe_button">訂閱</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer_bottom">
                <p>隱私權政策 | &copy; 保護傘有限公司 All rights reserved.</p>
            </div>
        </div>

    )
}

export default footer
