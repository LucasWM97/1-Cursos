import './App.css';
import {useRef} from 'react';

function App3() {
const daniel = useRef(null);
const joao = useRef(null);
const pedro = useRef(null);


function danielName() {
  daniel.current.style.fontSize = "30px";
  daniel.current.style.color = "red";
}

function joaoName() {
  joao.current.style.fontSize = "60px";
  joao.current.style.color = "green";
}

function pedroName() {
pedro.current.style.fontSize = "90px";
pedro.current.style.color = "blue";
}

  return (
    <div className="App">
      <strong ref={daniel} onClick={()=> danielName()}>Daniel</strong>
      <strong ref={joao}  onClick={()=> joaoName()}>João</strong>
      <strong ref={pedro} onClick={()=> pedroName()}>Pedro</strong>
    </div>
  );
}

export default App3;
