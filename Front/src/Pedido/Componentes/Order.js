import React, { useState, useEffect } from "react";
import axios from "axios";

const Order = () => {
    const url = "http://localhost:3000/pedidos";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return axios.get(url).then((res) => setData(res.data));
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const selectColor = ((status) => {
        if (status === "APROVADO"){
            return "order-row-item approved";
        }
        else if (status === "CANCELADO"){
            return "order-row-item canceled";
        }
        else if (status === "PENDENTE"){
            return "order-row-item pending";
        }
        else if (status === "PROCESSANDO"){
            return "order-row-item processing";
        }
    });

    return (
        data.map((dataObj, index) => {

            return (
                <div className="pedido">
                    <div className="order-item-header">
                        <div className="label-order">Pedido</div>
                        <button className="view-button">ACESSAR</button>
                    </div>

                    <div className="order-item">
                        <div className="label">Número</div>
                        <div className="order-row-item">{data[index].numero}</div>
                    </div>
                    <hr />
                    <div className="order-item">
                        <div className="label">Valor</div>
                        <div className="order-row-item">R$ {parseFloat(data[index].valor).toFixed(2)}</div>
                    </div>
                    <hr />
                    <div className="order-item">
                        <div className="label">Status</div>
                        <div className={ selectColor(data[index].status) }>{data[index].status} </div>
                    </div>
                    <hr />
                </div>
            );
        })
    );
};

export default Order;