import React from 'react';
import './quemSomos.css';

function QuemSomos() {
  return (
    <div className="quem-somos-container">

      {/* Container 1: Texto sobre quem somos */}
      <div className="quem-somos-texto">
        <h1>Quem Somos?</h1>
        <p>
          Bem-vindo à nossa incrível viagem no tempo! Oferecemos uma experiência única e inesquecível a bordo de uma réplica do majestoso Titanic, 
          proporcionando uma jornada que simula com precisão a grandiosidade e o glamour da viagem original. 
        </p>
        <p>
          Nossos passageiros poderão explorar o navio com luxo, aproveitar um serviço de alta classe e reviver momentos históricos enquanto navegam pelos mares 
          em um ambiente que mistura o charme da época com tecnologia moderna. 
        </p>
        <p>
          Embarque nessa jornada e viva a história de perto. Cada detalhe foi pensado para proporcionar a melhor experiência possível, 
          fazendo com que você se sinta parte da história. Pronto para embarcar nessa viagem conosco?
        </p>
      </div>

      {/* Container 2: Texto sobre áreas de lazer */}
      <div className="quem-somos-texto">
        <h2>Áreas de Lazer</h2>
        <p>
          A bordo, você encontrará diversas áreas de lazer, como cassinos de luxo, piscinas refrescantes e boates animadas para dançar à noite. 
          Cada espaço foi projetado para garantir o máximo de entretenimento e diversão durante a navegação.
        </p>
        <img 
          src="https://www.mercadoeeventos.com.br/wp-content/uploads/2020/01/Parte-externa-do-navio-com-piscinas-e-%C3%A1rea-de-lazer.jpg" 
          alt="Área de Lazer" 
          className="quem-somos-img"
        />
      </div>

      {/* Container 3: Texto sobre restaurantes */}
      <div className="quem-somos-texto">
        <h2>Restaurantes a Bordo</h2>
        <p>
          Oferecemos uma experiência gastronômica única, com opções de café da manhã, almoço e jantar preparadas pelos melhores chefs. 
          Saboreie pratos gourmet enquanto aprecia uma vista deslumbrante do oceano, e permita-se viver momentos inesquecíveis à mesa.
        </p>
        <img 
          src="https://www.ecoinforme.com.br/wp-content/uploads/2017/05/311649_702675_restaurante_duca_d_orleans_do_costa_favolosa_final_web_.jpg" 
          alt="Restaurante" 
          className="quem-somos-img"
        />
      </div>

      {/* Container 4: Texto sobre as cabines */}
      <div className="quem-somos-texto">
        <h2>As Cabines</h2>
        <p>
          Nossas cabines foram projetadas para oferecer o máximo de conforto e luxo. Desde as cabines com varandas privadas e camas king-size 
          até as opções com banheiros luxuosos equipados com banheiras, todas garantem uma experiência exclusiva para nossos passageiros.
        </p>
        <img 
          src="https://voufazerumcruzeiro.com.br/wordpress/wp-content/files/voufazerumcruzeiro.com.br/2023/09/cabines-cruzeiro.jpeg" 
          alt="Cabines" p
          className="quem-somos-img"
        />
      </div>

    </div>
  );
}

export default QuemSomos;
