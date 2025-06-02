import './App.css';
import Lista from './components/Lista';
const array =["arroz","feijao","macarrao","banana"]

function App() {
  return (
    <div className="App">
      <Lista itens={array}></Lista>   
    </div>
  );
}

export default App;
