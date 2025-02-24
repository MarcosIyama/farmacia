import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className='w-full bg-stone-950 text-white
                flex justify-center py-4 mb-10'>
      <div className="container flex justify-between text-lg">
      <Link to='/' className="text-2xl font-bold ps-2">Farmácia X</Link>
      <div className='flex gap-2 pe-2'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/produtos/novo">Adicionar Produtos</Link></li>
        <li><Link to="/categorias">Categorias</Link></li>
        <li><Link to="/categorias/nova">Adicionar Categoria</Link></li>
      </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
