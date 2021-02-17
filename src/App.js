import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Global from './themes/global'
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Global/>
      <Content icon="home" title="Início" subtitle="Recriando Cadastro de usuário " />
      <Footer />
    </React.Fragment>
  );
}

export default App;
