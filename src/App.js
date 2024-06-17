// import Button from "./Button";
import { useState, useEffect } from "react";

function App() {

  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClickCounter = () => setValue((prev) => prev + 1);
  const onValueUpdate = (event) => setKeyword(event.target.value);
  console.log("i run all the time");

  useEffect(() => {
    if(keyword !== "" && keyword.length>4){
        console.log(`keyword: ${keyword}`);
    }
  }, [keyword]);

  return (
    <div className="App">
      <input value={keyword} onChange={onValueUpdate} type="text" placeholder="Search here"/>
      <h1>{ counter }</h1>
      <button onClick={onClickCounter}>click me</button>
    </div>
  );
}

export default App;
