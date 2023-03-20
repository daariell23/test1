import './App.css';
import { Header , Body, Footer} from './component/web';

function App() {
  const handleClick = () => {
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber)
    switch (randomNumber) {
      case 1:
        alert("I love U, Dendy");
        break;
      case 2: 
        alert("Will u marry me, Dendy?");
        break;
    }
    
  };
  return (
    <div>
      <Header onClick={handleClick}/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
