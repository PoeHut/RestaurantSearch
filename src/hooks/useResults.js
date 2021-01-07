import {useEffect, useState}  from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setresults] = useState([])
    const [errorMessage, seterrorMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const SearchApi = async (searchTerm) => {
        
        setLoading(true)
        
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            
            seterrorMessage('');
            setLoading(false);
            setresults(response.data.businesses);
        } catch (e) {
            seterrorMessage("Something want wrong.")
        }
    }
    
    //call searchApi function for initial search
    useEffect(() => {
       SearchApi('cake')
    }, [])

    return [results, errorMessage, loading, SearchApi]
}