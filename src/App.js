import './App.css';
import Nav from './pages/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Route path='/' exact component={Login} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contacts} />
      </div>
    </Router>
  );
}

export default App;
