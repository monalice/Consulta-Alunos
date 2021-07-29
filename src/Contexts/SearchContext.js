import { createContext, useState } from 'react';
import axios from 'axios';

const SearchContext = createContext();

export default SearchContext;

export function SearchProvider(props){
    const [ type, setType ] = useState('all');
    const [ value, setValue ] = useState('');
    const [ response, setResponse ] = useState([]);


    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const searchButton = () => {
        const params = { type, value }
        const req = axios.get(process.env.API_URL, params);
        req.then((response) => {setResponse(response.data)})
            .catch((error) => {throw error});

        console.log(value);
    }

    return (
        <SearchContext.Provider 
            value={{
                type, 
                setType, 
                value, 
                setValue, 
                response, 
                setResponse, 
                handleChange, 
                searchButton
            }}>
            {props.children}
        </SearchContext.Provider>
    )
};