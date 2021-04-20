import './App.scss';
import NavBar from './components/navbar/NavBar';
import AboutMe from './components/aboutme/AboutMe';

function App() {
  return(
      <div className='app'>
        <NavBar/>
        <AboutMe />
      </div>
  );
}

export default App;
