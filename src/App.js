
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact'
import {BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' element={<Home/>}  />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contact' element={<Contact/>} />
        </Switch>
      </Router>
      
      

    </div>
  );
}

export default App;
