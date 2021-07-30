import React, {useContext} from 'react';
import styled from 'styled-components';

export default function Student(props) {
    const { name, email, cpf } = props.s;

    return (
        <Container>
            <div>
                {name}
            </div>
            <div>
                {email}
            </div>
            <div>
                {cpf}
            </div>

        </Container>
    )
};

const Container = styled.section `    
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    
    & > div {
        margin: 10px;
        padding: 10px;
        color: #c8bac8;
    }
`;