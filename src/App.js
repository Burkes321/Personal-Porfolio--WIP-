import './App.scss';
import NavBar from './components/navbar/NavBar';
import AboutMe from './components/aboutme/AboutMe';
import Invitation from './components/invitation/Invitation';
import Stages from './components/stages/Stages';

function App() {
  return(
      <div className='app'>
        <NavBar/>
        <AboutMe />
        <Invitation />
        <Stages />
      </div>
  );
}

export default App;
