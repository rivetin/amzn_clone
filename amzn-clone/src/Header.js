import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <a href="http://localhost:3000/"> <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="header__logo" className="header__logo" /></a>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>


            <div className="header__nav">
                <div className="header__option">

                    <span className="header__optionLineOne">Hello</span>
                    <span className="header__optionLineTwo">Sign in</span>

                </div>
                <div className="header__option">

                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>

                </div>
                <div className="header__option">

                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>

                </div>
                <a href="http://localhost:3000/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__basketCount header__optionLineTwo">
                            0
                    </span>

                    </div>
                </a>


            </div>
        </div>
    )
}

export default Header
