import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import '../IntroSection/intro.css'
import pic from './pics/8pp 4-removebg-preview (1).jpg'
export function IntroSection() {
  return (
    <div id="intro-div">
      <div>
        <img src={pic} alt="" />
      </div>
      <div>
        <h1>👋👋👋 I'm Vishnu Nair</h1>
        <p>Full-stack web developer from India. Love building and learning new things.</p>
        <div className='resume'>
          <a target='_blank' href="https://drive.google.com/file/d/17PssNyyZe7r-l3JSaJb3cfjVQk9h4eKW/view?usp=sharing">Resume</a>                  
        </div>
        <br />
        <div className='socials'>
          <a target='_blank' href="https://www.linkedin.com/in/nair-vishnu-s-81a678193/"><FaLinkedin size={30}/></a>                  
          <a target='_blank' href="https://github.com/VishCoder63"><FaGithubSquare size={30}/></a>                  
        </div>
      </div>

    </div>
  )
}