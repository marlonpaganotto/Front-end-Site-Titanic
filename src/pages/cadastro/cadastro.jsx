import './cadastrar.css';
import React, { useState } from 'react';
import api from '../../services/api';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Cadastrar() {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    email: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Garantir que a idade seja convertida para string antes de ser enviada
      const response = await api.post('/registro', {
        name: formData.nome,
        age: String(formData.idade),  // A conversão explícita para string da idade
        email: formData.email
      });

      console.log('Usuário cadastrado:', response.data);

      // Limpar os campos após o envio bem-sucedido
      setFormData({ nome: '', idade: '', email: '' });

      // Exibir a mensagem de sucesso com SweetAlert2
      Swal.fire({
        title: 'Parabéns!',
        text: 'Você foi cadastrado com sucesso.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        // Após o sucesso, redireciona o usuário para a página desejada
        navigate('/'); // Altere '/home' para o caminho da página de destino
      });
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error.response?.data || error.message);

      // Exibir a mensagem de erro com SweetAlert2
      Swal.fire({
        title: 'Erro!',
        text: 'Erro ao cadastrar o usuário. Tente novamente.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Cadastro de Usuários</h1>
        <input
          name="nome"
          type="text"
          placeholder="Digite Seu Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          name="idade"
          type="number"
          placeholder="Sua idade"
          value={formData.idade}
          onChange={handleChange}
          required
          min={16}
        />
        <input
          name="email"
          type="email"
          placeholder="Digite seu email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastrar;
