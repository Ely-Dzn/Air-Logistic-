import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { LoginContainer,Container,ImgContainer,LoginBox,BoarderImg, EnterBox} from './style';
import Aviation from '../../assets/aviation.png';
import GoLog from '../../assets/GoLog.png';


export default  function Login() {
  const navigate=useNavigate();
  const [login,setlogin] = useState('');
  const [senha,setsenha] = useState('');
 
  async function LoginClick () {

   /* try {
      await Authservice(login,senha);
      navigate('/Home');
    } catch (error) {

      console.log (error.response);
    }
*/
    
  }

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      
      navigate('/Home');
    }
  }
  
  return (
    <BoarderImg>
        
        <img height= "853vh" width="300vw" src={GoLog} alt="logo"/>
    <Container>

        <LoginContainer>
       
          <ImgContainer>
            <img height= "150vh" width="150vw" src={Aviation} alt="logo"/>
            </ImgContainer>
       
          <LoginBox>
            <h3>Login</h3>
            <input 
            type="text" 
            class="form-control" 
            placeholder="Usuário" 
            aria-label="Username" 
            aria-describedby="basic-addon1" 
            value={login}
            onChange={(event)=> setlogin(event.target.value)}
            ></input>
            <h3>Senha</h3>
            <input 
            type="text" 
            class="form-control" 
            onKeyUp={handleKeyUp} 
            placeholder="Senha" 
            aria-label="Username" 
            aria-describedby="basic-addon1"
            value={senha}
            onChange={(event)=> setsenha(event.target.value)}
            ></input>
            <EnterBox  type="button" class="btn btn-secondary" onClick={LoginClick}>Entrar</EnterBox>
          </LoginBox>       
        </LoginContainer>
    </Container>
    </BoarderImg>
    
  );
  
}