import './App.css';
import { Provider } from 'react-redux';
import store from './Componenets/redux/storeConfig';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SearchPage from './Componenets/SearchPage';
import SearchResults from './Componenets/SearchResults';
import Footer from './Componenets/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
       <Route path="/" element={< SearchPage />} ></Route> 
       <Route path="/searchresults" element={<SearchResults/>}></Route>
       </Routes>
       <Footer/>
      </Router>
       </Provider>
  );
}

export default App;
