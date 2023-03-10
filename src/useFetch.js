import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const abrtCntl = new AbortController()

        setTimeout(() =>{
            fetch(url, {signal: abrtCntl.signal})
            .then( res =>{
                if(!res.ok){
                    throw Error('could not fetch blog')
                }else{
                    return res.json()
                }
            } )
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err =>{
                setError(err.message)
                setIsPending(false)
            })
        },1000)

        return () => abrtCntl.abort();
    }, [url])

    return { data, isPending, error}
}
export default useFetch