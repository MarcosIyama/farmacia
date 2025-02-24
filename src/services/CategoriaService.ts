// src/services/CategoriaService.ts
import axios from 'axios';
import { Categoria } from '../models/Categoria';

// Utilize a rota proxy em vez da URL completa
const apiUrl = '/api';

export const listarCategorias = async (): Promise<Categoria[]> => {
  const response = await axios.get(`${apiUrl}/categorias`);
  console.log('Dados recebidos:', response.data); // Verifique a estrutura aqui
  return response.data;
};

export const cadastrarCategoria = async (categoria: Categoria): Promise<void> => {
  await axios.post(`${apiUrl}/categorias`, categoria);
};

export const atualizarCategoria = async (categoria: Categoria): Promise<void> => {
  await axios.put(`${apiUrl}/categorias/${categoria.id}`, categoria);
};

export const deletarCategoria = async (id: number): Promise<void> => {
  await axios.delete(`${apiUrl}/categorias/${id}`);
};
