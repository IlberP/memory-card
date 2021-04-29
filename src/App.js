import './App.css';
// import MemoryCards from './components/MemoryCards';
import './styles/styles.css'
import CountScore from './components/CountScore';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MemoryCards /> */}
      <CountScore />
    </div>
  );
}

export default App;
