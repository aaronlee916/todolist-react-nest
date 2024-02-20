import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  let instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 60000,
  });
  instance
    .get("/todo-item/get-todo")
    .then((response) => setData(response.data))
    .catch(function (error) {
      console.log(error);
    });

  return (
    <>
      <input />
      <button>确认</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
