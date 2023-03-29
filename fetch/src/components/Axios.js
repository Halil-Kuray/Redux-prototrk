import React, { useEffect } from 'react'
import axios from 'axios'

export default function Axios() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const getData = async () => {
            try{
                const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10``https://jsonplaceholder.typicode.com/posts?_limit=10`)
                setData(res.data) // This data comes from axios synctax
                setError(null)

            } catch (err) {
                setError(err.message)
                setData(null)
            } finally{
                setLoading(false)
            }
        }
        getData()
    }, [])



  return (
    <div>

    </div>
  )
}
