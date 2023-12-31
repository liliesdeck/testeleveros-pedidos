import { Status } from '../Enum/Status';
export interface Pedido {
    id: number;
    number: number;
    valor: number;
    status: Status
}   