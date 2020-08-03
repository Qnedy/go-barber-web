import React from 'react';
import { Container, Content, Background } from './styles';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';

const Signup: React.FC = () => {

  function handleSubmit(data: object) {
    console.log(data);
  }

  return(
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="goBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" placeholder="Name" icon={FiUser}/>
          <Input name="email" placeholder="E-mail" icon={FiMail}/>

          <Input name="password" type="password" placeholder="Senha" icon={FiLock}/>

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="login">
          <FiArrowLeft /> Voltar para logon
        </a>
      </Content>


    </Container>
  );
};

export default Signup;
