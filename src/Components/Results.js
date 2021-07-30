import React, {useContext} from 'react';
import styled from 'styled-components';
import SearchContext from '../Contexts/SearchContext';

export default function Results() {
    const { response, clicked } = useContext(SearchContext);

    return (
        <>
        {clicked ? (
            <Container>
                <div>
                    hi 
                </div>
            </Container>
        ) : (<></>)}
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