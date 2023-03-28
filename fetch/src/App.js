import React, {useEffect, useState} from "react";



  function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect( () => {

    const fetchData =  async () => {
      const res = await (await fetch(`https://jsonplaceholder.typicode.com/posts`)).json()
      if( res ) {
        console.table(res)
      } 
    }
    fetchData()

  }, [])




  return (
    <div className="App">
      
    </div>
  );
}

export default App;
