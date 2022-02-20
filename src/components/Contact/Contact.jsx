import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { useState } from 'react'
import '../Contact/contact.css'
export function Contact() {
const [email,setEmail]=useState('Gmail')
  return <>
    <div id="contactDiv">
      <div>
        <h1>Let's connect</h1>
        <p><span>Feel free to drop me a mail at </span><i>nvishnu1995@gmail.com</i></p>
        <p><span>Or call me at </span> <i>9738780910</i></p>  
        <div className='socials'>
          <a target='_blank' href="https://www.linkedin.com/in/nair-vishnu-s-81a678193/"><FaLinkedin size={30}/></a>                  
          <a target='_blank' href="https://github.com/VishCoder63"><FaGithubSquare size={30}/></a>                  
        </div>
      </div>
    </div>
  <p>Made by Vishnu Nair</p>
  </>
}