// src/components/categorias/FormCategoria.tsx
import React, { useState } from 'react';
import { cadastrarCategoria, atualizarCategoria } from '../../services/CategoriaService';
import { Categoria } from '../../models/Categoria';

const FormCategoria: React.FC = () => {
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: '', descricao: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoria({ ...categoria, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (categoria.id === 0) {
      await cadastrarCategoria(categoria);
    } else {
      await atualizarCategoria(categoria);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" value={categoria.nome} onChange={handleInputChange} placeholder="Nome" />
      <input name="descricao" value={categoria.descricao} onChange={handleInputChange} placeholder="Descrição" />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default FormCategoria;
