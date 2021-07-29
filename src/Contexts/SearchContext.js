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
        //passando search={type, value};
        // const req = axios.get('https://j7tz26cwje.execute-api.sa-east-1.amazonaws.com/prod/products');
        //     req.then((response) => {
        //         setProducts(response.data);
        //     }).catch((e) => console.log(e))

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