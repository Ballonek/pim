import Header from './components/Header';
import Works from './components/Works';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/works' component={Works} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
