import axios from 'axios';
import { Produto } from '../models/Produto';

const apiUrl = '/api';

export const listarProdutos = async (): Promise<Produto[]> => {
  const response = await axios.get(`${apiUrl}/produtos`);
  return response.data;
};

export const obterProdutoPorId = async (id: number): Promise<Produto> => {
  const response = await axios.get(`${apiUrl}/produtos/${id}`);
  return response.data;
};

export const cadastrarProduto = async (produto: Produto): Promise<void> => {
  await axios.post(`${apiUrl}/produtos`, produto, {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const atualizarProduto = async (produto: Produto): Promise<void> => {
  await axios.put(`${apiUrl}/produtos`, produto, {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const deletarProduto = async (id: number): Promise<void> => {
  await axios.delete(`${apiUrl}/produtos/${id}`);
};