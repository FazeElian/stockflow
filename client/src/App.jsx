import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then (
      response => response.json()
    ).then(
      data => {
        setData(data);
      }
    )
  }, [])

  return (
    <>
      <div>
        <h1>Backend Data</h1>
        {(typeof data.users === "undefined") ? (
          <h2>Loading</h2>
        ): (
          data.users.map((user, i) => (
            <h2 key={i}>{user}</h2>
          ))
        )}
      </div>
    </>
  )
}

export default App
