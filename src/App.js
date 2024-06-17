// import Button from "./Button";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created!!!");
    //cleanup fucntion!!!!!!
    //컴포넌트가 destroy될 때 뭔가 할 수 있도록 해줌
    return () => console.log("destroyed ㅠㅠ");
  }, []);
  return <h1>hello</h1>;
}

//위의 Hello functional component와 같은 원리!
function Hi() {
  function hiFn() {
    console.log("created!!");
    return byFn;
  }
  function byFn() {
    console.log("destroyed ㅜㅜ");
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClickBtn = () => setShowing((a) => !a);

  return (
    <div className="App">
      {showing ? <Hi /> : null}
      <button onClick={onClickBtn}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
