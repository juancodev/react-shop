import React from 'react';
import 'styles/Header.scss';
import menu from 'icons/icon_menu.svg';
import logo from 'logos/logo_yard_sale.svg';
import shoppingCart from 'icons/icon_shopping_cart.svg';
import downArrow from 'icons/flechita.svg';

const Header = () => {
  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email">montillasanchezjuancarlos@gmail.com
            <img src={downArrow} alt="dropdown" />
          </li>
          <li className="navbar-shopping-cart">
            <img src={shoppingCart} alt="" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };