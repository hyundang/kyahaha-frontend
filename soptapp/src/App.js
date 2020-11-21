import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import HealingPage from "./pages/HealingPage";
import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";
import PostSharePage from "./pages/PostSharePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/main" component={MainPage} />
        <Route path="/healing" component={HealingPage} />
        <Route path="/post" component={PostPage} />
        <Route path="/postlist" component={PostListPage} />
        <Route path="/share" component={PostSharePage} />
      </Switch>
    </Router>
  );
};

export default App;
