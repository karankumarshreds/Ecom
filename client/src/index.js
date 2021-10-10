import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './default.scss';
import './imports.scss';

// App component
import App from './components/App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);
