import React from 'react';
import { deletarCategoria } from '../../services/CategoriaService';

interface DeletarCategoriaProps {
  id: number;
  onDelete: () => void;
}

const DeletarCategoria: React.FC<DeletarCategoriaProps> = ({ id, onDelete }) => {
  const handleDelete = async () => {
    try {
      await deletarCategoria(id);
      onDelete();
    } catch (error) {
      console.error('Erro ao deletar categoria:', error);
    }
  };

  return <button onClick={handleDelete}>Deletar</button>;
}

export default DeletarCategoria