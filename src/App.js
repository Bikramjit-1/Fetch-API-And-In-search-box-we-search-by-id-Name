import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [url, setUrl] = useState([]);
  const [num, setNum] = useState();
  const [data, setData] = useState([]);

  const getData = async () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => {
        setUrl(data);
      });
  };

  const inPut = (event) => {
    const input_Data = +event.target.value;
    setNum(input_Data);
  };

  const handleSubmit = () => {
    const arr = url
      .filter((obj) => obj.postId === num)
      .map((obj) => {
        return (
          <div key={obj.it} className="user-details">
            <p>
              <span>{obj.name}</span> <span>{obj.last_name}</span>
            </p>

            <p>
              <span>{obj.email} </span>
            </p>

            <p>{obj.body}</p>
          </div>
        );
      });
    setData(arr);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="list-users">
        <h3 id="greet-users">Fetch API Data</h3>
        <div>
          <input type="text" value={num} onChange={inPut} />
          <br /> <br />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div id="users">{data}</div>
      </div>
    </>
  );
};
export default App;
