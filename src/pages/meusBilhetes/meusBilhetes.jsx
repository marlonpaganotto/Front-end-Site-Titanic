import React, { useEffect, useState } from 'react';
import './meusbilhetes.css';

function MeusBilhetes() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Recupera os ingressos armazenados no localStorage
    const savedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
    setTickets(savedTickets);
  }, []);

  return (
    <div className="meus-bilhetes-container">
      <h2>Meus Bilhetes</h2>
      {tickets.length > 0 ? (
        <div className="bilhetes-list">
          {tickets.map((ticket, index) => (
            <div key={index} className="ticket-item">
              <p><strong>Tipo de Ingresso:</strong> {ticket.ticketType}</p>
              <p><strong>Quantidade:</strong> {ticket.quantity}</p>
              <p><strong>Total:</strong> R${ticket.totalPrice}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Você ainda não comprou ingressos.</p>
      )}
    </div>
  );
}

export default MeusBilhetes;
