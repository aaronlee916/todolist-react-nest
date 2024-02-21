import "./App.css";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
let instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 60000,
});
async function handleButtonClick(data, inputValue, setData) {
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

async function deleteTodoItem(currArray, setData) {
  await instance
    .delete("/delete-todo-item/delete", {
      data: {
        currArray,
      },
    })
    .then((res) => setData(res.data));
}

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
  }, []);

  return (
    <>
      <div className="container">
        <div className="innerContainer">
        <div className="controllerContainer">
        <input ref={inputValue} />
        <button
          className="addButton"
          onClick={() =>
            handleButtonClick(data, inputValue.current.value, setData)
          }
        >
          添加
        </button>
        <button
          className="deleteButton"
          onClick={() => deleteTodoItem(data, setData)}
        >
          删除
        </button>
        </div>
        <ul className="listContainer">
          {data.map((item, index) => (
            <li className="itemContainer" key={index}>
              {item}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </>
  );
}
export default App;
