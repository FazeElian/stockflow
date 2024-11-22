import axios from "axios";

function App() {
  const apiCall = () => {
    // URL with the port on the server file
    axios.get("http://localhost:5000/").then((data) => {
      console.log(data) // Retrieve data from server
    })
  }

  return (
    <div>
      <h1> Hello World! </h1>
      <button onClick={apiCall}>Make API Call</button>
    </div>
  );
}

export default App;