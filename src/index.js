import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './context/context';
import './styles/style.css';

ReactDOM.render(<AppProvider>
  <App />
</AppProvider>, document.getElementById('root'));