import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from './Login/Login';
import Pedido from './Pedido/Pedido';

export default function App() {
  const navigate = useNavigate();

  const pedidos = () => {
    navigate('/pedidos');
  };

  const login = () => {
    navigate('/');
  };

  return (
    <div>
      <div>
        <Routes>
          <Route path="/pedidos" element={<Pedido />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}