// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/categorias">Categorias</Link></li>
        <li><Link to="/categorias/nova">Adicionar Categoria</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
