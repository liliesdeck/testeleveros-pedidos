import './Login.css';
import {useNavigate} from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    var senhaInput = document.getElementById('senha');
    senhaInput.type = (senhaInput.type === 'password') ? 'text' : 'password';
  }

  const doLogin = () => {
    var emailInput = document.getElementById('email');
    var senhaInput = document.getElementById('senha');

    if (!emailInput && !senhaInput){
      alert("É preciso informar um e-mail e senha!");      
    }
    else {
      navigate('/pedidos');
    }    
  }

  return (
    <body>
      <div class="container-login">
        <div class="login-sidebar">
          <div class="logoNegative"></div>
          <div class="login-sidebar-blur"></div>
        </div>
        <div class="login-items">
          <div class="body-login-items">
            <div>
              <div class="logoPosColor"></div>
              <h4 class="headerLoginIntro">Acesse o Painel de Monitoramento</h4>
            </div>
            <form>
              <label class="labelLogin" for="email">E-mail: </label>
              <input class="input-data" type="email" id="email" name="email" required />

              <label for="senha" class="labelLogin">Senha: </label>
              <div class="password-container">
                <input class="input-data" type="password" id="senha" name="senha" required />
                <button type="button" class="show-password" onClick={togglePasswordVisibility}>Mostrar</button>
              </div>

              <button onClick={doLogin}>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login;
