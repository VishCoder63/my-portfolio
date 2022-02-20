import { useState } from 'react';
import { FaTypo3,FaTimes } from 'react-icons/fa';
import {VscThreeBars} from 'react-icons/vsc'
import '../Navbar/nav.css'
export function Navbar() {
  
  const [mediaApplied, setmediaApplied] = useState(false);
  function handleClick() {
    mediaApplied? setmediaApplied(false):setmediaApplied(true);
  }
  return (
    <div className='nav'>
        <a href='#intro-div'>
        <FaTypo3 size={60} style={{
          color: '#FF8906'
        }} /></a>
      
      <ul className={mediaApplied?'change':''}>
          <li><a href='#intro-div' onClick={handleClick}>About</a></li>
          <li><a href='#skillDiv' onClick={handleClick}>Skills</a></li>
          <li><a href='#projectsDiv' onClick={handleClick}>Projects</a></li>
          <li><a href='#contactDiv' onClick={handleClick}>Contact</a></li>
      </ul>
      <div className='hand-burger' onClick={handleClick}>
        {!mediaApplied ?<VscThreeBars color='white' size={30} />:
       <FaTimes color='white' size={30} />}
      </div>

    </div>
  )
}