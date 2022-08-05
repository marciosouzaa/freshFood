import { FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import { Container, Content, Form, InputItem, InputWrapper } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/TextArea';
import { DishIngredient } from '../../components/DishIngredient';
import { api } from '../../../Services/api';

export function Edit() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [avatarFile, setAvatarFile] = useState(null);

  const [ingredients, setIngredients] = useState([]);

  const [newIngredient, setNewIngredient] = useState('');

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);

      const { title, description, price, ingredient } = response.data;
      setTitle(title);
      setDescription(description);
      setPrice(price);
      setIngredients(ingredient.map(item => item.avatar2));
    }

    fetchDish();
  }, []);

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient('');
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    );
    setNewIngredient('');
  }

  async function handleEditDish() {
    if (!title || !description || !price || !ingredients || !avatarFile) {
      return alert('Preencha todos os campos!');
    }

    const formData = new FormData();
    formData.append('avatar', avatarFile);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);

    for (let i = 0; i < ingredients.length; i += 1) {
      formData.append('ingredients', ingredients[i]);
    }

    await api
      .put(`/dishes/${params.id}`, formData)
      .then(alert('O Prato foi editado!'))
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Erro no envio do formulário');
        }
      });

    return navigate('/');
  }
  async function handleRemoveDish() {
    const isConfirm = confirm('Tem certeza que deseja remover?');

    if (isConfirm) {
      await api.delete(`/dishes/${params.id}`);
      return navigate('/');
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Link to="/">
          <FiArrowLeft /> voltar
        </Link>

        <Content>
          <h1>Editar prato</h1>

          <Form>
            <InputWrapper>
              <div>
                <label htmlFor="event-name">Imagem do prato</label>
                <Input
                  id="event-name"
                  type="file"
                  accept="image/png, image/jpeg"
                  placeholder="Selecione imagem"
                  onChange={e => setAvatarFile(e.target.files[0])}
                />
              </div>

              <div className="flex">
                <label htmlFor="event-name">Nome</label>
                <Input
                  id="event-name"
                  type="text"
                  placeholder="Ex.: Salada Caesar"
                  onChange={e => setTitle(e.target.value)}
                  value={title}
                />
              </div>
            </InputWrapper>

            <InputWrapper>
              <div className="flex">
                <label htmlFor="event-name">Ingredientes</label>
                <InputItem>
                  {ingredients.map((ingredient, index) => (
                    <DishIngredient
                      key={String(index)}
                      onChange={e => setNewIngredient(e.target.value)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))}
                  <DishIngredient
                    isNew
                    placeholder="Adicionar"
                    onChange={e => setNewIngredient(e.target.value)}
                    value={newIngredient}
                    onClick={handleAddIngredient}
                  />
                </InputItem>
              </div>

              <div>
                <label htmlFor="event-name">Preço</label>
                <Input
                  id="event-name"
                  type="text"
                  placeholder="R$ 00,00"
                  onChange={e => setPrice(e.target.value)}
                  value={price}
                />
              </div>
            </InputWrapper>

            <Textarea
              title="Descrição"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
              defaultValue={description}
            />

            <div className="button-wrapper">
              <Button title="Remover pedido" onClick={handleRemoveDish} />
              <Button title="Adicionar pedido" onClick={handleEditDish} />
            </div>
          </Form>
        </Content>
      </Container>
      <Footer />
    </>
  );
}
