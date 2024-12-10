import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Para exibir alertas de sucesso e erro
import api from '../../services/api'; // Importando a instância do axios configurada
import './header.css';

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const menuRef = useRef(null);  // Ref para o menu
  const buttonRef = useRef(null);  // Ref para o botão de usuário

  useEffect(() => {
    // Verifica se o usuário está logado (se os dados estão no sessionStorage)
    const user = sessionStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserLoggedIn(true);
      setUserName(parsedUser.name);
      setUserEmail(parsedUser.email);  // Armazenando o email do usuário
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false);  // Fecha o menu se o clique for fora
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Limpa o sessionStorage e redireciona para a página inicial
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    setUserLoggedIn(false);
    navigate('/');
  };

  const handleDeleteAccount = async () => {
    try {
      // Enviando requisição DELETE para o backend utilizando o email do usuário
      const response = await api.delete(`/api/delete-account`, {
        data: { email: userEmail }, // Passando o email no corpo da requisição
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`, // Se necessário
        },
      });

      // Se a requisição for bem-sucedida
      console.log('Conta deletada com sucesso!');
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('token');
      setUserLoggedIn(false);

      // Exibir mensagem de sucesso
      Swal.fire('Conta deletada!', 'Sua conta foi deletada com sucesso.', 'success');
      
      // Redirecionar para a página inicial ou de login
      navigate('/');
    } catch (error) {
      console.error('Erro ao deletar conta:', error);
      Swal.fire('Erro', 'Ocorreu um erro ao deletar sua conta. Tente novamente.', 'error');
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quem-somos">Quem Somos?</Link></li>
          <li><Link to="/ingressos">Ingressos</Link></li>
          
          {userLoggedIn ? (
            <li>
              <button 
                ref={buttonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="user-menu-btn"
              >
                {userName} {/* Exibe o nome do usuário */}
              </button>

              {isMenuOpen && (
                <div ref={menuRef} className="menu-options">
                  <Link to="/comprar">Comprar Bilhetes</Link>
                  <Link to="/meus-bilhetes">Meus Bilhetes</Link>
                  <button onClick={handleLogout} className="logout-button">
                    <i className="fas fa-sign-out-alt"></i> Sair
                  </button>
                  <button onClick={handleDeleteAccount} className="delete-account">
                    <i className="fas fa-trash-alt"></i> Deletar Conta
                  </button>
                </div>
              )}
            </li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
