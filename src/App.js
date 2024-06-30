import {useState,useEffect} from "react"
import './App.css';
import About from "./components/About"
import Contact from "./components/Contact"
import { HashRouter, Routes, Route ,Link} from "react-router-dom";

import Projects from "./components/Projects"
import Home from "./components/Home";
import P5logo from "./components/p5logo";

const StyledLink = ({ children, ...props }) => (
  <Link {...props}  className={props.className+" styled-link"}>
    {children}
  </Link>
);

function App() {
  const [theme,setTheme]=useState("light");
  const [mobilemenu,setMobilemenu]=useState(false);
  useEffect(()=>{
    if(theme==="dark"){
      document.body.style.setProperty("--text-color","#ffffff");
      document.body.style.setProperty("--background-color","#000000");
      document.body.style.setProperty("--hover-color","#ffff00");
    }
  else{ 
    document.body.style.setProperty("--text-color","#000000");
    document.body.style.setProperty("--background-color","#ffffff");
    document.body.style.setProperty("--hover-color","#ff0000");
  }
  
  },[theme]);
  
  return (
    <div className="App">
<HashRouter>
<div >
  <input type="checkbox" class="checkbox" id="checkbox"/>
  <label for="checkbox" class="checkbox-label" onClick={()=>setTheme((pre)=>pre==="dark"?"light":"dark")}>
    <i class="fas fa-sun"></i>
    <i class="fas fa-moon"></i>
    <span class="ball"></span>
  </label>
</div>
      <div className="header">
      
      <StyledLink to="/logo" className="logo">
        <div className="firstletter">V</div>
        <div className="remaining">icky</div>
      </StyledLink>
      
      <button className="mobilemenu" onClick={()=>setMobilemenu((pre)=>!pre)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="sections"  active={mobilemenu?"true":"false"}>
        <div><StyledLink to="/">Home</StyledLink></div>
        <div><StyledLink to="/projects">Projects</StyledLink></div>
        <div><StyledLink to="/contact">Contact</StyledLink></div>
        <div><StyledLink to="/about">About</StyledLink></div>
        

 
      </div>
    </div>
    
      <Routes>
      <Route path="/projects" element={<Projects />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/logo" element={<P5logo theme={theme}/>} />
    <Route path="/" element={<Home />} />
       </Routes>
       </HashRouter>
   </div>
  );
}

export default App;
