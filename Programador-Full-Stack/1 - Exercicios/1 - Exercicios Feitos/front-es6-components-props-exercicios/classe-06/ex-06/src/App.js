import './App.css';
import Card from './components/Card';
import Kelvin from "../src/assets/kelvin-costa.png"
import Charles from"../src/assets/charles-santos.png"
import Anna from"../src/assets/anna-bia.png"
import Mario from"../src/assets/mario-hisashi.png"
function App() {
  return (
    <div className="container">
      <Card
      photo ={Kelvin}
      name = "Kelvin Costa"
      tag="@costa"
      followers="140 seguidores"
      following="207 seguindo"
      ></Card>

      <Card
      photo ={Charles}
      name = "Charles Santos"
      tag="@charles.santos"
      followers="302 seguidores"
      following="419 seguindo"
      ></Card> 
      <Card
      photo ={Anna}
      name = "Kelvin Costa"
      tag="@anab"
      followers="842 seguidores"
      following="150 segundo"
      ></Card>
       <Card
      photo ={Mario}
      name = "Mario Hisashi"
      tag="@hisashi"
      followers="28 seguidores"
      following="17 segundo"
      ></Card>
    </div>
  );
}

export default App;
