import React from 'react';
import './home.css';
import Asusvivo from './images/asusvivobooks200.jpg';

function home() {
    return (
        <div>
            <div className="home">
                <div className="left_bar">
                    <h2 className="left_bar_title">系列商品</h2>
                    <div className="left_bar_items">
                        <li className="left_bar_item"><b>3C </b>電腦 硬碟 網路</li>
                        <li className="left_bar_item"><b>家電 </b>冷氣 電風扇 洗衣機</li>
                        <li className="left_bar_item"><b>通訊 </b>iPhone 三星 小米 </li>
                        <li className="left_bar_item"><b>電玩 </b>PS4 XBOX SWITCH</li>
                        <li className="left_bar_item"><b>軟體 </b>Photoshop 防毒 SPSS</li>
                    </div>
                </div>
                <div className="slide">
                    <h2>精選商品</h2>
                    <img
                        className="special_item"
                        src={Asusvivo}
                        alt='Asusvivo'
                    />
                </div>
            </div>
            <div>
                <div className="hot_items_title">
                    <h2>熱 銷 商 品</h2>
                </div>
                <div className="hot_items_list">
                    <div>
                        <img
                            className="hot_item"
                            src={Asusvivo}
                            alt='Asusvivo'
                        />
                        <h3 className="item_name">
                            商品一
                        </h3>
                        <button className="know_more">
                            了解更多
                        </button>
                    </div>
                    <div>
                        <img
                            className="hot_item"
                            src={Asusvivo}
                            alt='Asusvivo'
                        />
                        <h3 className="item_name">
                            商品一
                        </h3>
                        <button className="know_more">
                            了解更多
                        </button>
                    </div>
                    <div>
                        <img
                            className="hot_item"
                            src={Asusvivo}
                            alt='Asusvivo'
                        />
                        <h3 className="item_name">
                            商品一
                        </h3>
                        <button className="know_more">
                            了解更多
                        </button>
                    </div>
                </div>
                <div className="hot_items_list">
                    <div>
                        <img
                            className="hot_item"
                            src={Asusvivo}
                            alt='Asusvivo'
                        />
                        <h3 className="item_name">
                            商品一
                        </h3>
                        <button className="know_more">
                            了解更多
                        </button>
                    </div>
                    <div>
                        <img
                            className="hot_item"
                            src={Asusvivo}
                            alt='Asusvivo'
                        />
                        <h3 className="item_name">
                            商品一
                        </h3>
                        <button className="know_more">
                            了解更多
                        </button>
                    </div>
                    <div>
                        <img
                            className="hot_item"
                            src={Asusvivo}
                            alt='Asusvivo'
                        />
                        <h3 className="item_name">
                            商品一
                        </h3>
                        <button className="know_more">
                            了解更多
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home
