import { useEffect, useState } from "react";


const useGetProducts = (url, options) => {
	const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

	
    const apiPlatzi = async () => {
        try {
            const res = await fetch(url, options);
            const json = await res.json();
            setArticle(json);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };
    
    useEffect(() => {
        if(loading) {
            apiPlatzi();
        }
    }, ); 


	return {loading, article, error} ;
  
};

export default useGetProducts;