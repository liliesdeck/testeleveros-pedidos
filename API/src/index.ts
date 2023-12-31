import express, { Request, Response } from 'express';
import { Pedido } from './DTO/Pedido';
import { ResumoPedido } from './DTO/ResumoPedido';
import { Status } from './Enum/Status';
import * as fs from 'fs';
import { TotalVendas } from './DTO/TotalVendas';

var cors = require('cors');
const app = express();
      app.use(cors());
const port = process.env.PORT || 3000;

let rawData = fs.readFileSync('./src/base/base.json', 'utf8');
let pedidos: Pedido[] = JSON.parse(rawData);

app.get('/pedidos', (req: Request, res: Response) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json(pedidos);
});

app.get('/pedidos/resumoStatus', (req: Request, res: Response) => {
    res.set('Access-Control-Allow-Origin', '*');
    let resumoPedidos: ResumoPedido = {
        qtdStatusAprovado: pedidos.filter((pedido) => pedido.status === Status.APROVADO).length,
        qtdStatusCancelado: pedidos.filter((pedido) => pedido.status === Status.CANCELADO).length,
        qtdStatusPendente: pedidos.filter((pedido) => pedido.status === Status.PENDENTE).length,
        qtdStatusProcessando: pedidos.filter((pedido) => pedido.status === Status.PROCESSANDO).length,
        qtdTotalPedidos: pedidos.length,
    };
    res.status(200).json(resumoPedidos);
});

app.get('/pedidos/totalVendas', (req: Request, res: Response) => {
    res.set('Access-Control-Allow-Origin', '*');
    var totalVendas: TotalVendas = {
        totalVendas: 0
    }
    pedidos.filter((pedido) => pedido.status !== Status.CANCELADO).forEach(pedido => totalVendas.totalVendas += pedido.valor);

    res.status(200).json(totalVendas);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});