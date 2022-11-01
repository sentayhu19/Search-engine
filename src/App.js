import './App.css';
import { Provider } from 'react-redux';
import SearchPage from './Componenets/SearchPage';
import store from './Componenets/redux/storeConfig';

function App() {
  return (
    <Provider store={store}>
       <SearchPage />
       </Provider>
  );
}

export default App;
