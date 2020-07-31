import React from 'react';
import "./Shop.css";
import ShopTW from './Shop.tw';

function Shop(){
    return(
        <ShopTW>


 
        <div className="grid">
            <div className="galleryphoto w-full small medium large">
            <div className="photo"></div>
            <div className="price">
            <div className="description">
            <p>
            Peacock Ore in Copper pendant
                </p>
            </div>
            <div className="shopwidget">
            <div className="column"> <p className="dollars">$100</p></div>
            <div className="column">
            <button>Message me</button>
            <button>Purchase</button>
            </div>
            </div>
            </div>
            </div>

            <div className="galleryphoto w-full small medium large">
            <div className="photo"></div>
            <div className="price"></div>
            </div>

            <div className="galleryphoto w-full small medium large">
            <div className="photo"></div>
            <div className="price"></div>
            </div>

            <div className="galleryphoto w-full small medium large">
            <div className="photo"></div>
            <div className="price"></div>
            </div>

            <div className="galleryphoto w-full small medium large">
            <div className="photo"></div>
            <div className="price"></div>
            </div>

            <div className="galleryphoto w-full small medium large">
            <div className="photo"></div>
            <div className="price"></div>
            </div>

            <div className="galleryphoto w-full small medium large">
            <div className="photo"></div>
            <div className="price"></div>
            </div>

        </div>


        </ShopTW>
    );
};

export default Shop;