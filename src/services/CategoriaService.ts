// src/services/CategoriaService.ts
import axios from 'axios';
import { Categoria } from '../models/Categoria';

const apiUrl = '/api';

export const listarCategorias = async (): Promise<Categoria[]> => {
  const response = await axios.get(`${apiUrl}/categorias`);
  return response.data;
};

export const obterCategoriaPorId = async (id: number): Promise<Categoria> => {
  const response = await axios.get(`${apiUrl}/categorias/${id}`);
  return response.data;
};

export const cadastrarCategoria = async (categoria: Categoria): Promise<void> => {
  await axios.post(`${apiUrl}/categorias`, categoria);
};

export const atualizarCategoria = async (categoria: Categoria): Promise<void> => {
  await axios.put(`${apiUrl}/categorias`, categoria, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const deletarCategoria = async (id: number): Promise<void> => {
  await axios.delete(`${apiUrl}/categorias/${id}`);
};
