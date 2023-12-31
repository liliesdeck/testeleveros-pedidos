import React, { useState, useEffect } from "react";
import axios from "axios";

const SalesColumn = () => {
    const url = "http://localhost:3000/pedidos/totalVendas";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return axios.get(url).then((res) => setData(res.data));
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    return (<div class="sales-column">
        <div class="sales-label">Vendas Totais</div>
        <div class="sales-number">R$ {data.totalVendas}</div>
    </div>);
};

export default SalesColumn;
