//import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from './pages/MainPage';


function App() {
  return (
    <Router>
      <Route path='/' component={MainPage} />
    </Router>
  );
}

export default App;
