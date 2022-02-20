import '../Projects/projects.css'
import pic from './pics/Pepperfrypic.png'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
export function Projects() {
  return (
    <div className='projects-container'>
    <h2>Projects</h2>    
    <div id="projectsDiv">
      <div>
          <img src="https://camo.githubusercontent.com/e569afdf36fd6a53c082b32ad5953394904b853267c83c4f7a0a1c962e8310a3/68747470733a2f2f63646e2e686173686e6f64652e636f6d2f7265732f686173686e6f64652f696d6167652f75706c6f61642f76313633363830323637353834342f4157465f77444d4d4e2e706e67" alt="" />
          <div>A front-end clone of Fastrack website developed as a Solo project in 6 days.
          <br/> Features: Filtering products, Deleting a product from cart,Sigin/Signup using Local Storage etc.</div>
          <div className='projecttags'>
            <div><FaHtml5 size={30}/></div>
            <div><FaCss3Alt size={30}/></div>
            <div><FaJsSquare size={30}/></div>
          </div>
          <div className='button'><a target='_blank' href="https://github.com/VishCoder63/Fastrack.git">Code</a></div>
          <div className='button'><a target='_blank' href='https://vishcoder63.github.io/Fastrack/index.html'>Website</a></div>
          <div className='button'><a target='_blank' href="https://drive.google.com/file/d/1Kop5Rta1xm7Fv1hFY44VLSKfZXssyA21/view?usp=sharing">Demo</a></div>
      </div>
    <div className='project-2'>
        <img src={pic} alt="" />
        
        <div>A full-stack clone of Pepperfry website developed by 3 members in 6 days.
         <br/> Features: Filtering products, Products sourced from Mongoose,Sigin/Signup and Authorisation using Node endpoints etc.</div>
        <div className='projecttags'>
          <div><FaHtml5 size={30}/></div>
          <div><FaCss3Alt size={30}/></div>
          <div><FaJsSquare size={30}/></div>
          <div><FaNodeJs size={30}/></div>
          <div><SiMongodb size={30}/></div>
        </div>
        <div className='button'><a target='_blank' href="https://github.com/VishCoder63/pepperfry-project/tree/main">Code</a></div>
        <div className='button'><a target='_blank' href=" https://pepperfryclonemasai.herokuapp.com/#loaded">Website</a></div>
        <div className='button'><a target='_blank' href="https://drive.google.com/file/d/1T-dRIZF8F4m0J-nze_t2zq5vGQXvg19b/view?usp=sharing">Demo</a></div>
    </div>
      </div>
    </div>
  )
}