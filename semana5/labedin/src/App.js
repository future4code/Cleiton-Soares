import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import PerfilCleiton from './img/Perfil-1x1.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem = {PerfilCleiton}
          nome="Cleiton" 
          descricao="Oi, eu sou o Cleiton. Sou aluno da Labenu. Adoro estudar e aprender coisas novas."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn.icon-icons.com/icons2/656/PNG/512/mail_email_message_electronic_online_web_icon-icons.com_59986.png"
          titulo="E-mail: "
          texto="lorem.ipsum@dolor.sit.amet"
          />
        <CardPequeno
          imagem="https://cdn.icon-icons.com/icons2/2460/PNG/512/location_pin_place_map_address_placeholder_icon_149107.png"
          titulo="Endereço: "
          texto="Lorem ipsum 34, dolor sit amet, Elit"
        />
        
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Desenvolvedor web full stack sênior!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Diretor master sênior dos projetos da Nasa." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
