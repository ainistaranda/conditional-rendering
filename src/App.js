import Hero from './components/Hero';
import Movies from './components/Movies';
import './App.css';

function App() {
  const myName = ''

  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        <Movies />
        {myName 
          ? <p>Welcome Back.</p>
          : <p>Please Login Above</p>
        }
        <p> Hello {myName || 'Guest'}.</p>
      </header>
    </div>
  );
}

export default App;
