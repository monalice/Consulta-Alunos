import React, { useContext } from 'react';
import styled from 'styled-components';
import SearchContext from '../Contexts/SearchContext';

export default function Filters() {
    const { type, setType, setValue, searchButton } = useContext(SearchContext);


    return (
        <>
        <Container>
            <label>Filtros:  </label>
            <Select name='filters' value={type} onChange={selected => setType(selected.target.value)}>
                <option value='all'>Todos</option>
                <option value='name'>Name</option>
                <option value='email'>Email</option>
                <option value='cpf'>CPF</option>
            </Select>
            {type !== 'all' 
            ? ( <>
                <Input 
                    type="text"
                    placeholder="Busca"
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button onClick={searchButton}>Buscar Alunos</Button>
                </>) 
            : (<Button onClick={searchButton}>Buscar Alunos</Button>)
            }
        </Container>
        </>
    )
};

const Container = styled.div `
    font-family: 'Oswald', sans-serif;
    text-align: left;
    font-size: 30px;
    color: #fff;
    margin: 50px 0px 50px 50px;
`;
const Select = styled.select `
    margin-left: 10px;
    background: url(http://www.webcis.com.br/images/imagens-noticias/select/ico-seta-appearance.gif) no-repeat #eeeeee;
    background-position: 218px center;
    width: 250px;
    height:30px;
    border:1px solid #ddd;
`;

const Input = styled.input `
    margin: 15px 0px 15px 90px;
    font-weight: lighter;
`;

const Button = styled.button `
    margin-left: 90px;
    padding: 10px;
    background-color: #5b3ce7a2;
    border-radius: 10px;
    color: #fff;
`;