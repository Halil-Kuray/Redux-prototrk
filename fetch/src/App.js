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

    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res =>  {
        if( !res.status ) {
          console.log(`This is an HTTP error: The status is ${res.status}`)
        }
        res.json()
      })
      .then(data => console.table(data))
      .catch(err => {
        console.log(err)
      })

  },)




  return (
    <div className="App">
      
    </div>
  );
}

export default App;
