import { FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import { Container, Content, Form, InputItem, InputWrapper } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/TextArea';
import { DishIngredient } from '../../components/DishIngredient';
import { api } from '../../../Services/api';

export function New() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [avatarFile, setAvatarFile] = useState(null);

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');

  const navigate = useNavigate();

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

  async function handleNewDish() {
    if (!title || !description || !price || !ingredients || !avatarFile) {
      alert('Preencha todos os campos!');
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
      .post('/dishes', formData)
      .then(alert('Prato criado com sucesso!'))
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Erro no upload do formulário');
        }
      });

    navigate('/');
  }

  return (
    <>
      <Header />
      <Container>
        <Link to="/">
          <FiArrowLeft /> voltar
        </Link>

        <Content>
          <h1>Criar prato</h1>

          <Form>
            <InputWrapper>
              <div>
                <label htmlFor="event-name">Imagem do prato</label>
                <Input className="inputAlt"
                  id="event-name"
                  type="file"
                  accept="image/png, image/jpeg, image/svg"
                  placeholder="Selecione"
                  onChange={e => setAvatarFile(e.target.files[0])}
                />
              </div>

              <div className="flex">
                <label htmlFor="event-name">Nome</label>
                <Input className="inputAlt"
                  id="event-name"
                  type="text"
                  placeholder="Ex.: Salada Caesar"
                  onChange={e => setTitle(e.target.value)}
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
                <Input className="inputAlt"
                  id="event-name"
                  type="text"
                  placeholder="R$ 00,00"
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
            </InputWrapper>

            <Textarea
              title="Descrição"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
            />

            <Button title="Adicionar pedido" onClick={handleNewDish} />
          </Form>
        </Content>
      </Container>
      <Footer />
    </>
  );
}
