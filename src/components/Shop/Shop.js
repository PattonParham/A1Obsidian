import React from 'react';
import "./Shop.css";
import ShopTW from './Shop.tw';

function Shop(){
    return(
        <ShopTW>
        <div className="row">
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
        </div>

        <div className="row">
            <div className="price">
            <div className="description">
            <p>Peacock Ore in Copper pendant</p>
            </div>
            <div className="shopwidget">
            <div className="column"> <p className="dollars">$100</p></div>
            <div className="column">
            <button>Message me</button>
            <button>Purchase</button>
            </div>
            </div>
            </div>

            <div className="price">

            </div>
            <div className="price">

            </div>
            <div className="price">

            </div>
        </div>
        <div className="row">
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
        </div>
        <div className="row">
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
        </div>
        <div className="row">
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
        </div>
        </ShopTW>
    );
};

export default Shop;