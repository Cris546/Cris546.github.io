import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' element={<Home/>}  />
        </Switch>
      </Router>
      
      

    </div>
  );
}

export default App;
