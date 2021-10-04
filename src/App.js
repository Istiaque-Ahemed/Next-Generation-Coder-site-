import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './component/About/About';
import Footer from './component/footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import MoreService from './component/MoreService/MoreService';
import NotFound from './component/NotFound/NotFound';
import Programar from './component/Programar/Programar';
import Proheader from './component/proheadr/Proheader'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";




function App() {
  return (
    <div className="App">
      
      {/* <Home></Home>
      <MoreService></MoreService>
  
      <About></About>
      <Programar></Programar>
      <NotFound></NotFound> */}
    

      <Router>
        <Switch>
          <Route exact path="/">
          <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/services">
            <Header></Header>
            <MoreService></MoreService>
            <Footer></Footer>
          </Route>
          <Route path="/about">
            <Header></Header>
            <About></About>
            <Footer></Footer>
          </Route>
          <Route path="/programars">
             <Header></Header>
             <Proheader></Proheader>
             <Programar></Programar>
             <Footer></Footer>
          </Route>
          <Route path="*">
            <NotFound></NotFound> 
          </Route>
        </Switch>
      </Router>
      
    
    </div>
  );
}

export default App;
