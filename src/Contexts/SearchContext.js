import { createContext, useState } from 'react';
import axios from 'axios';

const SearchContext = createContext();

export default SearchContext;

export function SearchProvider(props){
    const [ type, setType ] = useState('all');
    const [ value, setValue ] = useState('');
    const [ response, setResponse ] = useState([]);
    const [ clicked, setClicked ] = useState(false);

    const searchButton = () => {
        const params = {
            type,
            value
        }

    console.log(value)
    console.log(type)
    console.log(response)
        try {
            const req = axios.post(process.env.REACT_APP_API_URL, { params });
            req.then(res => {
                    setResponse(res.data);
                    setClicked(true);
            })
                .catch(err => {
                    console.log(err);
                    alert('Insira uma pesquisa válida, por favor!');
                });
        } 
        catch (error) {
            throw new Error(error);
        }
    }

    return (
        <SearchContext.Provider 
            value={{
                type, 
                setType, 
                value, 
                setValue,
                clicked,
                response, 
                setResponse,
                searchButton
            }}>
            {props.children}
        </SearchContext.Provider>
    )
};