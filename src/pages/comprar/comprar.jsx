import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegação após compra
import Swal from 'sweetalert2';  // Para mensagens de sucesso
import './comprar.css';

function Comprar() {
  const [ticketType, setTicketType] = useState('premium'); // Tipo de ingresso
  const [quantity, setQuantity] = useState(1); // Quantidade de ingressos
  const [totalPrice, setTotalPrice] = useState(5000); // Preço inicial baseado no tipo Premium
  const navigate = useNavigate();

  // Preços dos ingressos
  const prices = {
    premium: 5000,
    varanda: 4000,
    interna: 3500,
  };

  // Atualiza o preço total ao mudar a quantidade ou o tipo de ingresso
  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);
    setTotalPrice(prices[ticketType] * newQuantity); // Calcula o preço total
  };

  const handleTicketTypeChange = (e) => {
    const newType = e.target.value;
    setTicketType(newType);
    setTotalPrice(prices[newType] * quantity); // Atualiza o preço com base no tipo
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Criar o objeto com as informações de compra
    const ticketData = { ticketType, quantity, totalPrice };

    // Salvar os dados no localStorage
    let existingTickets = JSON.parse(localStorage.getItem('tickets')) || [];
    existingTickets.push(ticketData);
    localStorage.setItem('tickets', JSON.stringify(existingTickets));

    // Exibir uma mensagem de sucesso
    Swal.fire('Compra realizada!', 'Seus ingressos foram comprados com sucesso.', 'success');

    // Redirecionar para a página de "Meus Bilhetes"
    navigate('/meus-bilhetes');
  };

  return (
    <div className="ingressos-container">
      <h2>Comprar Ingressos</h2>
      <form onSubmit={handleSubmit} className="ingressos-form">
        <div className="input-group">
          <label htmlFor="ticket-type">Tipo de Ingresso</label>
          <select
            id="ticket-type"
            value={ticketType}
            onChange={handleTicketTypeChange}
          >
            <option value="premium">Premium - R$5000</option>
            <option value="varanda">Cabine com Varanda - R$4000</option>
            <option value="interna">Cabine Interna - R$3500</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="quantity">Quantidade</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </div>

        <div className="total-price">
          <p><strong>Total: </strong>R${totalPrice}</p>
        </div>

        <button type="submit" className="buy-button">Comprar</button>
      </form>
    </div>
  );
}

export default Comprar;
