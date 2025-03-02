import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './App.css';
import ListarCategorias from './components/categorias/ListarCategorias';
import FormCategoria from './components/categorias/FormCategoria';
import DeleteCategoriaPage from './components/categorias/DeletarCategoria';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<ListarCategorias />} />
        <Route path="/categorias/nova" element={<FormCategoria />} /> 
        <Route path="/categorias/editar/:id" element={<FormCategoria />} />
        <Route path="/categorias/deletar/:id" element={<DeleteCategoriaPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
