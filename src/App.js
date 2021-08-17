import './App.css';
import Header from '../src/components/Header';
import Container from 'react-bootstrap/Container';
import Front from '../src/components/Front';
import Banner from '../src/components/Banner';
function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Front />
    </div>
  );
}

export default App;
