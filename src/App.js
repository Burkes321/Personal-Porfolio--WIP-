import './App.scss';
import NavBar from './components/navbar/NavBar';
import AboutMe from './components/aboutme/AboutMe';
import Invitation from './components/invitation/Invitation';
import Stages from './components/stages/Stages';
import Skills from './components/skills/Skills';
import Bio from './components/bio/Bio';

function App() {
  return(
      <div className='app'>
        <NavBar/>
        <AboutMe />
        <Invitation />
        <Stages />
        <Skills />
        <Bio />
      </div>
  );
}

export default App;
