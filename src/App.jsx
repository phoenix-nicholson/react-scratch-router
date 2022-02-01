import Home from './view/Home/Home';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import Film from './view/Film/Film';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:id">
          <Film />
        </Route>
      </div>
    </Router>
  );
}

export default App;
