import "./App.css";
import axios from "axios";
import { useRef, useState } from "react";
let instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 60000,
});
function App() {
  let inputValue=useRef()
  const [data, setData] = useState([]);
  
  instance
    .get("/todo-item/get-todo")
    .then((response) => setData(response.data))
    .catch(function (error) {
      console.log(error);
    });

  return (
    <>
      <input ref={inputValue} />
      <button onClick={postTodoItem(inputValue)}>确认</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
function postTodoItem(newTodoItem){
  instance.post('/post-new-todo-item/new',{
    newTodoItem,
  }).then((res)=>console.log(res.status)).catch(function(error){
    console.log(error)
  })
}
export default App;
