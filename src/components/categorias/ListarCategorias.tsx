import React, { useEffect, useState } from 'react';
import { listarCategorias } from '../../services/CategoriaService';
import { Categoria } from '../../models/Categoria';
import CardCategoria from './CardCategoria';

const ListarCategorias: React.FC = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const fetchData = async () => {
    try {
      const data = await listarCategorias();
      setCategorias(data);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Lista de Categorias</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorias.map((categoria) => (
          <li key={categoria.id}>
            <CardCategoria categoria={categoria} onDelete={fetchData} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarCategorias