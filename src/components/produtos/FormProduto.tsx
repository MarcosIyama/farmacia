import React, { useState, useEffect } from 'react';
import { cadastrarProduto, atualizarProduto, obterProdutoPorId, } from '../../services/ProdutoService';
import { Produto } from '../../models/Produto';
import { Categoria } from '../../models/Categoria';
import { listarCategorias } from '../../services/CategoriaService';
import { useNavigate, useParams } from 'react-router-dom';

const FormProduto: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [produto, setProduto] = useState<Produto>({
    id: id ? Number(id) : 0,
    nome: '',
    descricao: '',
    quantidade: 0,
    laboratorio: '',
    preco: 0,
    foto: '',
    categoria: { id: 0, nome: '', descricao: '' },
  });

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const data = await listarCategorias();
        setCategorias(data);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };

    const fetchProduto = async () => {
      if (id) {
        try {
          const produtoExistente = await obterProdutoPorId(Number(id));
          setProduto(produtoExistente);
        } catch (error) {
          console.error('Erro ao buscar produto:', error);
        }
      }
    };

    fetchCategorias();
    fetchProduto();
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await atualizarProduto(produto);
      } else {
        await cadastrarProduto(produto);
      }
      navigate('/produtos');
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">
        {id ? 'Editar Produto' : 'Novo Produto'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nome */}
        <div>
          <label className="block text-gray-700">Nome:</label>
          <input
            name="nome"
            value={produto.nome}
            onChange={handleInputChange}
            placeholder="Nome"
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        {/* Descrição */}
        <div>
          <label className="block text-gray-700">Descrição:</label>
          <input
            name="descricao"
            value={produto.descricao}
            onChange={handleInputChange}
            placeholder="Descrição"
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        {/* Quantidade */}
        <div>
          <label className="block text-gray-700">Quantidade:</label>
          <input
            type="number"
            name="quantidade"
            value={produto.quantidade}
            onChange={handleInputChange}
            placeholder="Quantidade"
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        {/* Laboratório */}
        <div>
          <label className="block text-gray-700">Laboratório:</label>
          <input
            name="laboratorio"
            value={produto.laboratorio}
            onChange={handleInputChange}
            placeholder="Laboratório"
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        {/* Preço */}
        <div>
          <label className="block text-gray-700">Preço:</label>
          <input
            type="number"
            step="0.01"
            name="preco"
            value={produto.preco}
            onChange={handleInputChange}
            placeholder="Preço"
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        {/* Foto */}
        <div>
          <label className="block text-gray-700">URL da Foto:</label>
          <input
            name="foto"
            value={produto.foto}
            onChange={handleInputChange}
            placeholder="URL da Foto"
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        {/* Categoria */}
        <div>
          <label className="block text-gray-700">Categoria:</label>
          <select
            name="categoriaId"
            value={produto.categoria.id}
            onChange={(e) => {
              const categoriaSelecionada = categorias.find(
                (cat) => cat.id === Number(e.target.value)
              );
              setProduto({
                ...produto,
                categoria: categoriaSelecionada || {
                  id: 0,
                  nome: '',
                  descricao: '',
                },
              });
            }}
            className="w-full mt-1 p-2 border rounded"
          >
            <option value="0">Selecione uma categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>
        {/* Botão */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          {id ? 'Atualizar' : 'Salvar'}
        </button>
      </form>
    </div>
  );
};

export default FormProduto;
