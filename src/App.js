import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChangeToDo = (e) => setToDo(e.target.value);
  const onStopSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);

  return (
    <div className="App">
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onStopSubmit}>
        <input
          onChange={onChangeToDo}
          value={toDo}
          type="text"
          placeholder="할일을 입려해라!"
        />
        <button>할일 추가하기</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, a) => (
          <li key={a}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
