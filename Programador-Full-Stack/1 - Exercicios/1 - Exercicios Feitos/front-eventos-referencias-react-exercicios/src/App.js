import { useRef } from 'react';
import './App.css';

function App() {
  const countRef = useRef(0);
  const incrementRef = useRef(null);
  const incrementLet = useRef(null);

  let count = 0;

  console.log("Renderizou");
  console.log(countRef.current, "countRef")
  console.log(count, "count")

 function incrementRefFunction() {
      countRef.current += 1;
      incrementRef.current.innerText = `Valor de countRef  ${countRef.current}`;
      console.log("Valor de countRef", countRef.current);
 }
  

   function incrementLetFunction() {
      count += 1;
      incrementLet.current.innerText = `Valor de count  ${count}`;
      console.log("Valor de count", count);
   }
    


  return (
    <div className="App">
      <button ref={incrementRef} onClick={()=>incrementRefFunction()} >
        Increment ref
      </button>
      <button ref={incrementLet} onClick={()=>incrementLetFunction()}>
        Increment let
      </button>
    </div>
  );
}

export default App;
