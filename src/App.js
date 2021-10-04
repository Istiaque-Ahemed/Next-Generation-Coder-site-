import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import './App.css';
import About from './component/About/About';
import Footer from './component/footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import MoreService from './component/MoreService/MoreService';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <MoreService></MoreService>
      <About></About>
      <Footer></Footer>

      
    
    </div>
  );
}

export default App;
