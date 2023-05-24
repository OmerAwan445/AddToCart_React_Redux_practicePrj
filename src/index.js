import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import rootStore from './store/rootStore';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={rootStore}>
    <App />
    </Provider>
    );
