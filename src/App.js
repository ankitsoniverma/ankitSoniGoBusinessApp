import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}  />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
    
      
   
  );
}

export default App;
