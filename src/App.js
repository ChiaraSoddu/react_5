import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import CustomFooter from './components/CustomFooter';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <Home/>
      <CustomFooter/>
    </div>
  );
}

export default App;
