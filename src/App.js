import './App.css';
import './css/style.css';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import JobCards from './components/main/JobCards';
import { JobProvider } from './components/main/JobContext';

function App() {
  return (
    <div className="App">
      <Navbar />
      <JobProvider>
        <Search />
        <JobCards />
      </JobProvider>
    </div>
  );
}

export default App;
