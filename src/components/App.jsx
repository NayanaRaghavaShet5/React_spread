import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [listData, setListData] = useState([]);

  function handleText(e) {
    const { value } = e.target;
    setText(value);
  }

  function onAdd() {
    setListData(preValue => {
      return [...preValue, text];
    });
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleText} type="text" value={text} />
        <button onClick={onAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listData.map(data => (
            <li>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
