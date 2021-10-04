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
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomeImage from './component/HomeImage/HomeImage';




function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          {/* Header , HomeImage, Footer  */}
          <Route exact path="/">
            <Header></Header>
            <HomeImage></HomeImage>
            <Footer></Footer>
          </Route>
        {/* Header , HomeImage,Home Footer  */}
          <Route path="/home">
            <Header></Header>
            <HomeImage></HomeImage>
            <Home></Home>
            <Footer></Footer>
          </Route>
         {/* Header , MoreSErvice, Footer  */}
          <Route path="/services">
            <Header></Header>
            <MoreService></MoreService>
            <Footer></Footer>
          </Route>
          {/* Header ,About,Footer  */}
          <Route path="/about">
            <Header></Header>
            <About></About>
            <Footer></Footer>
          </Route>
          {/* Header ,  Proheader,Programar,Footer  */}
          <Route path="/programars">
             <Header></Header>
             <Proheader></Proheader>
             <Programar></Programar>
             <Footer></Footer>
          </Route>
         {/* NotFound */}

          <Route path="*">
            <NotFound></NotFound> 
          </Route>
        </Switch>
      </Router>
      
    
    </div>
  );
}

export default App;
