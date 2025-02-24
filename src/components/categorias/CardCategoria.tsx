import React from 'react';
import { Categoria } from '../../models/Categoria';

interface CardCategoriaProps {
  categoria: Categoria;
}

const CardCategoria: React.FC<CardCategoriaProps> = ({ categoria }) => {
  return (
    <div>
      <h3>{categoria.nome}</h3>
      <p>{categoria.descricao}</p>
    </div>
  );
}

export default CardCategoria;
