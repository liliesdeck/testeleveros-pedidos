import React, { useState, useEffect } from "react";
import axios from "axios";

const StatusCard = () => {
  const url = "http://localhost:3000/pedidos/resumoStatus";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return axios.get(url).then((res) => setData(res.data));
    };

    useEffect(() => {
        fetchInfo();
    }, []);

  return (
    <div className="card">
      <div className="status-column-item">
        <div className="status-number processing">{data.qtdStatusProcessando}</div>
        <div className="status-label">Processando</div>
      </div>

      <div className="status-column-item">
        <div className="status-number pending">{data.qtdStatusPendente}</div>
        <div className="status-label">Pendente</div>
      </div>

      <div className="status-column-item">
        <div className="status-number approved">{data.qtdStatusAprovado}</div>
        <div className="status-label">Aprovado</div>
      </div>

      <div className="status-column-item">
        <div className="status-number canceled">{data.qtdStatusProcessando}</div>
        <div className="status-label">Cancelado</div>
      </div>

      <div className="status-column-item">
        <div className="status-number total">{data.qtdTotalPedidos}</div>
        <div className="status-label">Total</div>
      </div>
    </div>
  );
};

export default StatusCard;
