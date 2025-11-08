import './App.css';
import './css/Responsive.css';
import Home from './components/Home/Home';
import {
   BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
   return (
      <Router>
         <Header />
         <Home />
      </Router>
   );
}

export default App;
