import './App.css';
import './css/Responsive.css';
import Home from './components/Home/Home';
import {
   BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
   return (
      <Router>
         <Header />
         <Home />
         <ScrollToTop />
      </Router>
   );
}

export default App;
