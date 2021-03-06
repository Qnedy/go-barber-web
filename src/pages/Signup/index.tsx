import React, { useCallback, useRef } from 'react';
import { Container, Content, Background } from './styles';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErros from '../../utils/getValidationErros';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try{
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório.'),
        email: Yup.string().required('E-mail obrigatório.').email('Digite um e-mail válido.'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

    }catch(err){

      const erros = getValidationErros(err);

      formRef.current?.setErrors(erros);
    }
  }, []);

  return(
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="goBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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
