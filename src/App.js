import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, SingleProductPage, ProductsList } from './components';

const App = () => {
  return <div>
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={ProductsList} />
        <Route path='/products/:id' exact component={SingleProductPage} />
      </Switch>
    </Router>
  </div>
}

export default App;