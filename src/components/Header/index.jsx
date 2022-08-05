import { useAuth } from '../../hooks/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { Container, Nav } from "./styles";
import { Button } from "../Button";
import {FiLogOut, FiMenu} from 'react-icons/fi'


export function Header({ children }) {
    const [openLinks, setOpenLinks] = useState(false);
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    const handleToggleNavbar = () => {
        setOpenLinks(!openLinks);
      };
      function handleNew() {
        navigate(`/new`);
      }

    return (
        <Container>
            <div className="head">
                
                <img src={logo} />
                <Nav  isActive={openLinks}>
                {user.is_admin === 0 ? (
                    <>
                        <button className="buttonText" type="button">
                            Meus favoritos
                        </button>
                        
                    </>
          ) : (
            <button className="buttonText" type="button" onClick={handleNew}>
              Administrador
            </button>
            
          )}
          {children}
                    <div                className="buttons">
                    <Button title="Meu pedido (0)"></Button>
                    <a href="/" onClick={signOut} > <FiLogOut/> </a>
                    
                    </div>
                </Nav >
                <div className="toggleNav">
                    <button type="button" onClick={handleToggleNavbar}>
                        <FiMenu />
                    </button>
                </div>
                    
            </div>

        </Container>
    )
}