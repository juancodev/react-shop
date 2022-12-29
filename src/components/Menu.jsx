import React from 'react'
import 'styles/Menu.scss';

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <a href="/" className="title">My orders</a>
        </li>
        <li>
          <a href="/" className="">My account</a>
        </li>
        <li>
          <a href="/" className="">Sign out</a>
        </li>
      </ul>
    </div>
  );
}

export { Menu };