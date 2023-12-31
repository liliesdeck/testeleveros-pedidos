import React from 'react';
import {useNavigate} from 'react-router-dom';

const Toolbar = () => {
  const navigate = useNavigate();
  const sair = () => {
    navigate('/');
  };

  return (
    <div className="toolbar">
      <div className="logo"></div>
      <div className="toolbar-title">Monitoramento de Pedidos</div>
      <button className="logout-button" onClick={sair}>SAIR</button>
    </div>
  );
};

export default Toolbar;
