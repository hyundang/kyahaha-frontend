//import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';


const App = () => {
  return (
    <Router>
      <Route path='/' component={MainPage} />
    </Router>
  );
}

export default App;
