//import logo from './logo.svg';
import './App.css';
import { Dashboard } from './comsponents/dashboard';
import { Navbar } from './comsponents/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard/>
    </div>
  );
}

export default App;
