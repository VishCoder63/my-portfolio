import { Box } from "./Box";
import './skills.css'
export function Skills() {
  return (
    <div id="skillDiv" >
      <p>Skills</p>
      <Box skills={[{
        tag: 'HTML',
        icon: 'FaHtml5'
      },
      {
        tag: 'CSS',
        icon: 'FaCss3Alt'
      },
      {
        tag: 'Javascript',
        icon: 'FaJsSquare'
      },
      {
        tag: 'React',
        icon: 'FaReact'
      },
      {
        tag: 'Redux',
        icon: 'SiRedux'
      },
      {
        tag: 'Node',
        icon: 'FaNodeJs'
      },
      {
        tag: 'MongoDB',
        icon: 'SiMongodb'
      },
      {
        tag: 'Postman',
        icon: 'SiPostman'
      },
      {
        tag: 'Netlify',
        icon: 'SiNetlify'
      },
      {
        tag: 'Git',
        icon: 'DiGit'
      }]}/>
      </div>
  )
  






}