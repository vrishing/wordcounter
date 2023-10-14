import { useState } from "react";

function App() {
  
  const [count, setCount] = useState(0);

  let change = (e) => {
    wordcount(e.target.value);
  };

  function wordcount(str) {
    let c = 0;
    let str1 = str.split(" ");

    for (let i = 0; i < str1.length; i++) {
      if (str1.length === 0) {
        setCount(0);
      }
      if (str1[i] !== "") {
        c++;
      }
      setCount(c);
    }
  }

  return (
    <div>
      <center>
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea id="input" rows="5" cols="40" onChange={change}></textarea>
      <p id="word-counter">Words: {count} </p>
      </center>
    </div>
  );
}

export default App;
