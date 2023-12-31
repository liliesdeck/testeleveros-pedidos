import './Pedido.css';
import React from 'react';
import Toolbar from './Componentes/Toolbar';
import StatusCard from './Componentes/StatusCard';
import SalesColumn from './Componentes/SalesColumn';
import Order from './Componentes/Order';

function Pedido() {
  return (
    <>
      <head>
        <title>Pedidos Leveros</title>
      </head>

      <body>
        <Toolbar />        
        <article>
          <div className="container">
            <StatusCard />
            <div className="sales-empty"></div>
            <SalesColumn />
          </div>
          <br />
          <div class="pedidos">
            <Order />
          </div>
        </article>
      </body>
    </>
  );
}

export default Pedido;
