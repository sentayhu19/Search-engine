import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './Componenets/redux/storeConfig';
import SearchPage from './Componenets/SearchPage';
import SearchResults from './Componenets/SearchResults';
import Footer from './Componenets/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/searchresults" element={<SearchResults />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
