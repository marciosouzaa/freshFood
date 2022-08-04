import { useState, useEffect } from 'react';

import { api } from '../../services/api';
import { Container, Content } from "./styles";
import { Search } from "../../components/Header/styles";
import { FiSearch } from 'react-icons/fi';

import PngEgg from '../../assets/pngegg 1.svg'
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Dish } from "../../components/Dish";
import { Slider } from '../../components/Slider';
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";


export function Home() {
    
    const [search, setSearch] = useState("");
    const [dishes, setDishes] = useState([]);


    useEffect(() => {
        async function fetchDishes() {
            const res = await api.get(`/dishes?title=${search}&ingredient=${search}`)
            setDishes(res.data);
        }
        fetchDishes();
    }, [search]);

    return (
        <>
        
        <Container>
            <Header>
                <Search>
                    <Input  
                        type="text"
                        icon={FiSearch}
                        placeholder="Busque pelas opções de pratos"
                        onChange={e => setSearch(e.target.value)}
                    />
                </Search>
            </Header>
            <Content>
                <img src={PngEgg} alt="Imagem com diferentes tipos de sabores" />
                <div>
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>
            </Content>

            <Section title="Pratos principais">
                {dishes.length > 0 && (
                    <Slider>
                        {dishes.map(item => (
                            <Dish key={item.id} data={item} />
                        ))}
                    </Slider>
                )}
        </Section>

        </Container >
        <Footer/>  
        </>
    )
}
