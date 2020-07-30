import React from 'react';
import { Container, Content, Background } from './styles';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="goBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" placeholder="E-mail" icon={FiMail}/>

        <Input name="password" type="password" placeholder="Senha" icon={FiLock}/>

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="signup">
        <FiLogIn /> Criar conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default Signin;
