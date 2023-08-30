import { useState } from 'react';
import { Link } from 'react-router-dom'
import { BsFillMoonStarsFill, BsFillCloudSunFill } from "react-icons/bs";
function Navbar() {
  const [dark, setDark] = useState(localStorage.getItem("mode")
  ? Boolean(Number(localStorage.getItem("mode")))
  : false
);
dark
? document.body.classList.add("darkMode")
: document.body.classList.remove("darkMode");
  return (
    <nav className=" container max-w-5xl mx-auto flex justify-between pt-5 mb-16"> 
    <Link className='text-3xl' to='/'> Where is the world ?</Link>
    <div>
      { !dark &&
        <BsFillMoonStarsFill className='text-4xl cursor-pointer' onClick={() => {
        setDark(!dark);
        localStorage.setItem("mode", !dark ? 1 : 0);
        
      }}/>}
      { dark &&
        <BsFillCloudSunFill className='text-4xl cursor-pointer' onClick={() => {
        setDark(!dark);
        localStorage.setItem("mode", !dark ? 1 : 0);
        
      }}/>}
    </div>
    </nav>
  )
}

export default Navbar



// function DarkModeToggle() {
//   const [isDark, setIsDark] = useState(
//     localStorage.getItem("mode")
//       ? Boolean(Number(localStorage.getItem("mode")))
//       : false
//   );
//   isDark
//     ? document.body.classList.add("darkMode")
//     : document.body.classList.remove("darkMode");
//   return (
    // <div
    //   className="justify-between"
    //   style={{ fontSize: 18 }}
    //   onClick={() => {
    //     setIsDark(!isDark);
    //     localStorage.setItem("mode", !isDark ? 1 : 0);
    //   }}
    // >
    //   {isDark && <BsSun />}
    //   {isDark && <p> Light Mode</p>}
    //   {!isDark && <BsMoon />}
    //   {!isDark && <p> Dark Mode</p>}
    // </div>
//   );
// }

// export default DarkModeToggle;