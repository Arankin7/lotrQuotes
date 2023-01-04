import logo from './logo.svg';
import './App.css';

// Component imports
import Header from './components/Header';
import Quotes from './components/Quotes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
