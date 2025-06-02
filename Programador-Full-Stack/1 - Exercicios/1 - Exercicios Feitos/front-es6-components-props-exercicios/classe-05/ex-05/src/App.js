import './App.css';
import Card from './components/Card';
import Close from "../src/assets/close.svg"
import Cookie from  "../src/assets/cookie.svg"
import Ring from  "../src/assets/alert.svg"
function App() {
  return (
    <div className="container">
      <Card close = {Close}
      img = {Cookie}
      text = "Nós utilizamos cookies para melhorar nossa UX,analytics e marketing."
      buttonText='Tudo bem'
      color = "red"></Card>      
<Card close = {Close}
img = {Ring}
text  = "Você será deslogado imediatameente!"
buttonText = "Extender login"
color = "blue"
>

</Card>
     
      
    </div>
  );
}

export default App;
