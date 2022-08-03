import { Container } from "./styles";
import { Button } from "../Button";
import { Link } from 'react-router-dom'
import { FiPlus} from 'react-icons/fi'
import PngEgg from '../../assets/pngegg 1.svg'


export function Slogan({ title, children}){
  return(
    <Container>
      <img src={PngEgg} />
     
      <div className="slogan">
        <h2>Sabores inigualáveis</h2>
        <p>Sinta o cuidado do preparo com ingredientes sensacionais</p>
      </div>    
    </Container>
  )
}