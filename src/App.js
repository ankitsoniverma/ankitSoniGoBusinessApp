import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import ReferalDetail from './components/ReferalDetail'
import NotFound from './components/NotFound'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}  />
        <Route exact path="/" component={Home} />
        <Route path="/id/:id" component={ReferalDetail} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    
      
   
  );
}

export default App;
