import React, {useContext} from 'react';
import styled from 'styled-components';
import SearchContext from '../Contexts/SearchContext';
import Student from './Student';

export default function Results() {
    const { response, clicked } = useContext(SearchContext);

    return (
        <>
        {clicked ? (
            <Result>
                <Header>
                    <div> NOME </div>
                    <div> EMAIL </div>
                    <div> CPF </div>
                </Header>
                <div>
                    {response.length !== 0
                        ? response.map((s) => <Student s={s} key={s.id} />)
                        : ''}
                </div>
            </Result>
        ) : (<></>)}
        </>
    )
};

const Result = styled.section`
    height: 100%;
    width: 60%;
    margin: 0 auto;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    padding: 10px 20px;
`;