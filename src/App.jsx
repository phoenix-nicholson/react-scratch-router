import Home from './view/Home/Home';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import Film from './view/Film/Film';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="heading">Studio Ghibli</h1>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="film/:id">
          <Film />
        </Route>
      </div>
    </Router>
  );
}

export default App;
