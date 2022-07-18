import About from './Components/About/About';
import './App.css';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <div className='app__content'>
        <About/>
        <Main />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
