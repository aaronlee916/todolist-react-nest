import "./App.css";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
let instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 60000,
});

function App() {
  let [data, setData] = useState([]);
  let inputValue = useRef();
  useEffect(() => {
    instance
      .get("/todo-item/get-todo")
      .then((response) => setData(response.data))
      .catch(function (error) {
        // console.log(error);
      });
  },[]);

  return (
    <>
      <input ref={inputValue} />
      <button
        onClick={async () => {
          await instance
            .post("/post-new-todo-item/new", {
              currArray: data,
              newItem: inputValue,
            })
            .then((res) => setData(res.data))
            .catch(function (error) {
              // console.log(error);
            });

        }
      }
      >
        确认
      </button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
