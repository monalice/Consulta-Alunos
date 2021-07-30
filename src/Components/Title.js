import React from 'react';
import styled from 'styled-components';

export default function Title() {
    return (
        <Section>
            Realize aqui a sua consulta aos alunos cadstrados
        </Section>
    )
};

const Section = styled.section `
    font-family: 'Oswald', sans-serif;
    text-align: center;
    margin-top: 100px;
    font-size: 100px;
    color: #fff;
`;