import polygon from '../../assets/polygon1.svg'
import { Container, Logo } from "./styles";

export function Footer(){

  return(
    <Container>
      <div className="foot">
        <Logo>
          <img src={polygon} />
      
          <h1>Fresh Food</h1>
        </Logo> 
        <p>2022 - Todos os direitos reservados</p>
      </div>
    </Container>
  )
}