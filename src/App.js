import logo from './logo.svg';
import './App.css';
import Card from './components/card'
import Navbar from './components/navbar'
import Hero from './components/hero'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Card />
      </header>
    </div>
  );
}

export default App;
