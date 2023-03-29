import React, {useEffect, useState} from "react";



  function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect( () => {
    //ASYNC AWAIT FETCH
    // const fetchData =  async () => {
    //   const res = await (await fetch(`https://jsonplaceholder.typicode.com/posts`)).json()
    //   if( res ) {
    //     console.table(res)
    //   } 
    // }
    // fetchData()

    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
      .then(res =>  {
        if( !res.status ) {
          console.log(`This is an HTTP error: The status is ${res.status}`)
        }
        return res.json()
      })
      .then(data => {
        setData(data)
        setError(null)
      })
      .catch(err => {
        setError(err.message)
        setData(null)
      })
      .finally(() => {
        setLoading(false)
      })

  }, [])




  return (
    <div className="App">
          <h1>API Posts</h1>
          {loading && <div>A moment please...</div>}
          {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
          )}
          <ul>
            {data &&
              data.map(({ id, title }) => (
                <li key={id}>
                  <h3>{title}</h3>
                </li>
              ))}
          </ul>
    </div>
  );
}

export default App;
