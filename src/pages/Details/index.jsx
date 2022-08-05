import { FiArrowLeft } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import Ingredient from '../../assets/ingredient.png';
import { Container, Content } from './styles';
import { Button } from '../../components/Button';
import { api } from '../../../Services/api';

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();

  const avatarURl = data && `${api.defaults.baseURL}/files/${data.avatar}`;

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    fetchDish();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Link to="/">
          <FiArrowLeft /> voltar
        </Link>
        {data && (
          <Content>
            <img src={avatarURl} alt="Prato" />

            <div className="right">
              <div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
              </div>

              <div className="ingredients">
                {data.ingredient.map(item => (
                  <div key={item.id}>
                    <img src={Ingredient} alt="ingredient" />
                    <span>{item.avatar2}</span>
                  </div>
                ))}
              </div>

              <div className="footer">
                <strong>R$ {data.price}</strong>
                <div>
                  <span>-</span>
                  <span>01</span>
                  <span>+</span>
                </div>

                <Button title="Incluir" />
              </div>
            </div>
          </Content>
        )}
      </Container>
      <Footer />
    </>
  );
}
