

// ////////////////using Importing Image from my stastic Data 
import React, { useEffect, useState } from 'react'
import '../Nav/Nav.css'
import NetflixLogo from "../Nav/images/netflix-logo-0.png"
import AvatarLogo from "../Nav/images/avarar-logo.png"

function Nav() { 
  const [show, handleShow] = useState(false);//handlshow when scroll greater than 100 show handile

  useEffect(()=> {
    window.addEventListener("scroll"
, () =>{
  if (window.scrollY >100) {
    handleShow(true);
  } else handleShow(false);
  });
  return() =>{
    window.removeEventListener("scroll");
  };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
<img 
className='nav__logo'
src={NetflixLogo} alt="Netflix Logo"
    />
    {/* //OR using http image uRL */}
    {/* <img 
className='nav__logo'
src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg
" alt="Netflix Logo"
/> */}

    <img 
    className='nav__avatar'
    src={AvatarLogo}
alt="Avatar logo"
    />
{/* OR using http image uRL*/}
{/* <img 
// className='nav__logo'
// src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg
// " alt="Netflix Logo"
//     />
   */}
    </div>
  )
}

export default Nav




