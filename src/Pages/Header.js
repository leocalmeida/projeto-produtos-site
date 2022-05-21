import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <Link className='button is-light' to='/'>
        Produtos
      </Link>
      <Link
        style={{ marginLeft: '1rem' }}
        className='button is-light'
        to='/contato'
      >
        Contato
      </Link>
    </div>
  );
};

export default Header;
