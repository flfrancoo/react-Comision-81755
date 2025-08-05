import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f0f0f0' }}>
      <div><strong>MiTienda</strong></div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;