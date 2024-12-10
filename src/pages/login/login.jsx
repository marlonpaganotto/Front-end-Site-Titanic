import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Para navegação
import Swal from 'sweetalert2';  // Para o SweetAlert
import api from '../../services/api';  // Certifique-se de ter configurado o api.js corretamente
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();  // Para redirecionamento após login

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fazendo a requisição de login
      const response = await api.post('/login', { email });

      console.log('Usuário logado:', response.data.user);

      // Exibe uma mensagem de sucesso
      Swal.fire('Bem-vindo!', `Olá, ${response.data.user.name}`, 'success');
      
      // Armazena as informações do usuário no sessionStorage para logout automático ao fechar a aba/navegador
      sessionStorage.setItem('user', JSON.stringify(response.data.user));
      sessionStorage.setItem('token', response.data.token);  // Armazenar token

      // Redireciona para a página inicial ou outra página
      navigate('/');  

      // Atualiza a página automaticamente após o login
      window.location.reload();  

    } catch (error) {
      console.error('Erro ao fazer login:', error.response?.data?.message || error.message);
      Swal.fire('Erro!', 'E-mail não encontrado, tente novamente.', 'error');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Entrar</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="login-btn">Entrar</button>
        </form>
        
        <p className="signup-link">
          Ainda não possui uma conta?{' '}
          <Link to="/cadastrar">Cadastre-se aqui</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
