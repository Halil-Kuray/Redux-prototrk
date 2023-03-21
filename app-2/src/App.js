import Test from "./components/Test";
import { useState, useEffect} from "react";


function App() {

  const [ show, setShow ] = useState(false)
  const [ user, setUser ] = useState(false)

  const addPost = (data) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }


 useEffect(() => {

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      if( res.ok && res.status == 200) {
        return res.json()
      }
    })
    .then(data => setUser(data))
    .catch(err =>console.log(err))

    addPost({
      userId: 999,
      title: 'Sample Post',
      body: 'Post Content'
    })
 })

  return (
    <main>
    <section>
      <button onClick={() => setShow(prevState => !prevState)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <Test/>}
    </section>

    <ul>
      { user && user.map((pUser) => (
        <li key={pUser.id}>
          {pUser.name}
        </li>
      ))}

    </ul>
    </main>
  );
}

export default App;
