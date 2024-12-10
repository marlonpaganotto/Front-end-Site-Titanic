import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./pages/home";  
import Cadastrar from "./pages/cadastro/cadastro"; 
import Header from './pages/head/header';  
import QuemSomos from "./pages/quemSomos/quemSomos";
import Login from "./pages/Login/login";
import Ingressos from "./pages/ingressos/ingressos";
import Comprar from "./pages/comprar/comprar";
import MeusBilhetes from "./pages/meusBilhetes/meusBilhetes";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <Header /> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/cadastrar" element={<Cadastrar />} /> 
        <Route path="/quem-somos" element = {<QuemSomos/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/ingressos" element = {<Ingressos/>}/>
        <Route path="/comprar" element = {<Comprar/>}/>
        <Route path="/meus-bilhetes" element = {<MeusBilhetes/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
