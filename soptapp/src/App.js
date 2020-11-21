import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <>
      <Router>
        <Route path='/' component={MainPage} />
      </Router>
    </>
  );
}

export default App;
