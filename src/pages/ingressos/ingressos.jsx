import React from 'react';
import './ingressos.css';

// Função para o container da Cabine Premium
function PremiumCabin() {
  return (
    <div className="ticket-container">
      <h2>Cabine Premium</h2>
      <div className="ticket-details">
        <p><strong>O que oferece:</strong></p>
        <ul>
          <li>Acomodações de luxo</li>
          <li>Vista panorâmica</li>
          <li>Serviço exclusivo</li>
          <li>Acesso a áreas VIP</li>
        </ul>
        <img src="https://blog.celebritycruises.com.br/wp-content/uploads/2019/03/Raio-X-Como-sao-as-cabines-do-novo-Celebrity-Edge-scaled.jpg" alt="Cabine Premium" />
      </div>
      <p className="ticket-price">Preço: R$ 5000</p>
    </div>
  );
}

// Função para o container da Cabine com Varanda
function BalconyCabin() {
  return (
    <div className="ticket-container">
      <h2>Cabine com Varanda</h2>
      <div className="ticket-details">
        <p><strong>O que oferece:</strong></p>
        <ul>
          <li>Varanda privativa</li>
          <li>Conforto e privacidade</li>
          <li>Acomodações espaçosas</li>
        </ul>
        <img src="https://www.msccruzeiros.com.br/-/media/global-contents/ships/fleet/preziosa/cabins/tile-image/preziosa-balcony.jpg?bc=transparent&as=1&dmc=0&iar=0&mh=1080&mw=1380&sc=0&thn=0&udi=0&hash=AD6002B66CAE997B68A7B81B27DB0A8A" alt="Cabine com Varanda" />
      </div>
      <p className="ticket-price">Preço: R$ 4000</p>
    </div>
  );
}

// Função para o container da Cabine Interna
function InsideCabin() {
  return (
    <div className="ticket-container">
      <h2>Cabine Interna</h2>
      <div className="ticket-details">
        <p><strong>O que oferece:</strong></p>
        <ul>
          <li>Ambiente confortável</li>
          <li>Acomodações eficientes</li>
          <li>Acessível e prática</li>
        </ul>
        <img src="https://www.msccruzeiros.com.br/-/media/global-contents/ships/fleet/preziosa/cabins/tile-image/preziosa-interior.jpg?bc=transparent&as=1&dmc=0&iar=0&mh=1080&mw=1380&sc=0&thn=0&udi=0&hash=C985C4A533CCA6B2B89C6B78FB7702C4" alt="Cabine Interna" />
      </div>
      <p className="ticket-price">Preço: R$ 3500</p>
    </div>
  );
}

// Função principal para a página de ingressos
function Tickets() {
  return (
    <div className="tickets-container">
      <PremiumCabin />
      <BalconyCabin />
      <InsideCabin />
    </div>
  );
}

export default Tickets;
