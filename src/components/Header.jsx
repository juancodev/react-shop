import React, { useState, useContext } from 'react';
import 'styles/Header.scss';
import { Menu } from 'components/Menu';
import { MyOrder } from 'containers/MyOrder';
import menu from 'icons/icon_menu.svg';
import logo from 'logos/logo_yard_sale.svg';
import shoppingCart from 'icons/icon_shopping_cart.svg';
import downArrow from 'icons/flechita.svg';
import { AppContext } from 'contexts/AppContext';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  }
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
          <li
            className="navbar-email"
            onClick={handleToggle}
          >
            montillasanchezjuancarlos@gmail.com
            <img
              src={downArrow}
              alt="dropdown"
            />
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img
              src={shoppingCart}
              alt="" />
            {state.cart.length > 0 ? <div>{state.cart.length > 9 ? `+9` : state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
}

export { Header };