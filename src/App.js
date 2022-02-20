// import logo from './logo.svg';
import '../src/App.css'
import { Contact } from './components/Contact/Contact';

import { IntroSection } from './components/IntroSection/IntroSection';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />  
      <div className='scrollBox'>
        <IntroSection />
        <Skills/>
        <Projects />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
