import React, { useEffect, useState } from 'react';
import { listarCategorias } from '../../services/CategoriaService';
import { Categoria } from '../../models/Categoria';
import DeletarCategoria from './DeletarCategoria';

const ListarCategorias: React.FC = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const fetchData = async () => {
    const data = await listarCategorias();
    setCategorias(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de Categorias</h2>
      <ul>
        {categorias.map(categoria => (
          <li key={categoria.id}>
            {categoria.nome}
            <DeletarCategoria id={categoria.id} onDelete={fetchData} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListarCategorias;
