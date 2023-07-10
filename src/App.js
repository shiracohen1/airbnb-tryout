import Woman from "./images/woman.svg"
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
        <Card
          img={ Woman }
          rating="5.0"
          reviewCount={6}
          location="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
      </header>
    </div>
  );
}

export default App;
