import './App.css';
import { Header , Body, Footer} from './component/web';

function App() {
  const handleClick = () => {
    alert("I love U, Dendy");
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
