import { useState } from 'react'
import { Link } from 'react-router-dom';


import { useAuth } from '../../hooks/auth';

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

import { Container, Form, Logo } from "./styles";



export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {signIn} = useAuth()

  function handleSignIn(){
    signIn({email, password})
  }


  return(
  <Container>
    <Logo/>
    <Form>
      
      <h2>Faça login</h2>
      <p>Email</p>
      <Input placeholder="exemplo@email.com" type="text" onChange={e => setEmail(e.target.value)} />
      <p>Senha</p>
      <Input placeholder="min. 6 caracteres" type="password" onChange={e => setPassword(e.target.value)} />

      <Button title="Entrar" onClick={handleSignIn} />

      <Link to="/register">Criar uma conta</Link>
    </Form>
    
  </Container>
  )
}


