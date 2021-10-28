import './App.css';
import './css/style.css';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import JobCards from './components/main/JobCards';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <JobCards />
    </div>
  );
}

export default App;
