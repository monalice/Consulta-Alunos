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
        const params = {
            type,
            value
        }
        console.log(params);
    
        const req = axios.get(`http://localhost:8000/`, { params });
        req.then(res => setResponse(res)).catch(err => {throw new Error(err)});
        console.log(response);
        
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