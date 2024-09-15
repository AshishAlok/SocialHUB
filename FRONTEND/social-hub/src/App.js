import './App.css';
import Home from './components/home';
import LoginButton from './components/login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function LoginPage (){
  return (
  <div className="App">
      <LoginButton/>
    </div>
  );
}
function App() {
  return (
    <div>
      <Router>
        <Routes>
         <Route index element = {<LoginPage/>}/>
         <Route path = "/login" element= {<LoginPage/>}/>
         <Route path = "/home" element = {<Home/>} />
        </Routes>
      </Router>
    </div> 
    
  );
}

export default App;
