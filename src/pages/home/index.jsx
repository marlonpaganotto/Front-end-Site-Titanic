import React from "react";
import "./style.css"; 

function Home() {
  return (
    <div className="home-container">
      <div className="interactive-section">
        <h1 className="title">Embarque Nessa com a Gente!</h1>
        <p className="description">
          Junte-se a nós para uma experiência única, onde você poderá conhecer a história do Titanic enquanto vive a emoção de estar a bordo!
        </p>
        <div className="image-container">
          <img src="https://curtamais.com.br/goiania/wp-content/uploads/sites/2/2024/11/titanic.jpg" alt="Embarque" className="home-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
