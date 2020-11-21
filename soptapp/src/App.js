//import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Modal from './components/Modal';


const App = () => {
  return (
    <Router>
      <Route path='/' component={MainPage} />
    </Router>
  );
}

export default App;
