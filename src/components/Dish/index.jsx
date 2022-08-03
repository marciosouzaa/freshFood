import { MdFavoriteBorder } from 'react-icons/md';
import { FiEdit, FiEye } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';

import { Button } from '../Button';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

export function Dish({ data }) {
  const avatarURL = `${api.defaults.baseURL}/files/${data.avatar}`;

  const { user } = useAuth();
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function handleEditDish(id) {
    navigate(`/edit/${id}`);
  }
  return (
    <Container>
      <div className="button-wrapper">
        {user.is_admin === 1 && (
          <FiEdit size={30} onClick={() => handleEditDish(data.id)} />
        )}
        <MdFavoriteBorder size={30} />
      </div>
      <img src={avatarURL} alt="imagem" />

      <button type="button" onClick={() => handleDetails(data.id)}>
        <h3>{data.title} <FiEye></FiEye> </h3>
      </button>
      <p>{data.description}</p>
      <strong>R$ {data.price}</strong>

      <div>
        <span>-</span>
        <span>01</span>
        <span>+</span>

        <Button title="Incluir" />
      </div>
    </Container>
  );
}
