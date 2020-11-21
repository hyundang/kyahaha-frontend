import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Modal from './components/Modal';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LoginPage} />
        <Route path='/main' component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
