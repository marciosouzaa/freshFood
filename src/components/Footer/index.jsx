import logo from '../../assets/logo.svg'
import { Container } from "./styles";

export function Footer(){

  return(
    <Container>
      <div className="foot">
          <img src={logo} />
        <p>2022 - Todos os direitos reservados</p>
      </div>
    </Container>
  )
}