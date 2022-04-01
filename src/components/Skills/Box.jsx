import './box.css'
import { FaHtml5,FaCss3Alt,FaJsSquare,FaReact,FaNodeJs } from 'react-icons/fa'
import { SiRedux,SiMongodb,SiPostman,SiNetlify } from 'react-icons/si'
import { DiGit } from 'react-icons/di'

let obj = {
  'FaHtml5':<FaHtml5 color='#059DC0' size={40}/>,
  'FaCss3Alt':<FaCss3Alt color='#059DC0' size={40}/>,
  'FaJsSquare': <FaJsSquare color='#059DC0' size={ 40}/>,
  'FaReact':<FaReact color='#059DC0' size={40}/>,
  'FaNodeJs':<FaNodeJs color='#059DC0' size={40}/>,
  'SiRedux':<SiRedux color='#059DC0' size={40}/>,
  'SiMongodb':<SiMongodb color='#059DC0' size={40}/>,
  'SiPostman':<SiPostman color='#059DC0' size={40}/>,
  'SiNetlify':<SiNetlify color='#059DC0' size={40}/>,  
  'DiGit':<DiGit color='#059DC0' size={40}/>,  
}
export function Box({skills }) {
  return (
    <>
      <div className='box'>
        {skills.map(e => {
          return <div className='mini-box'>
                    <p>{obj[e.icon]}</p>
                    <p>{e.tag}</p>
                  </div>       
        } 
        )}
      </div>
    </>
  )
}