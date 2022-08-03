import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import polygon from '../../assets/polygon1.svg'

import { api } from '../../services/api';

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

import { Container, Form, Logo } from "./styles";



export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !email || !password){
      return alert('Preencha todos os campos!')
    }

    api.post('/users', {name, email, password}).then(() => {
      alert('Usuário cadastrado com sucesso!')
      navigate('/')
    }).catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert('Não foi possível cadastrar.')
      }
    })
  }

  return(
  <Container>
    <Logo>
      <img src={polygon} />
      
      <h1>Fresh Food</h1>
    </Logo>
    <Form>
      
      <h2>Faça login</h2>
      <p>Seu nome</p>
      <Input placeholder="Fulano da Silva" type="text"  onChange={e => setName(e.target.value)}/>
      <p>Email</p>
      <Input placeholder="exemplo@email.com" type="text" onChange={e => setEmail(e.target.value)} />
      <p>Senha</p>
      <Input placeholder="min. 6 caracteres" type="password" onChange={e => setPassword(e.target.value)} />

      <Button title="Criar conta" onClick={handleSignUp}/>

      <Link to="/">Já tenho uma conta</Link>
    </Form>
    
  </Container>
  )
}
