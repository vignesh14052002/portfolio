import {useState,useEffect} from "react"
import './App.css';
import About from "./components/About"
import Contact from "./components/Contact"
import { HashRouter, Routes, Route ,Link} from "react-router-dom";

import Projects from "./components/Projects"
import Home from "./components/Home";
import P5logo from "./components/p5logo";

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
      <label className="switch"  >
      <div ><span></span></div>
      <input type="checkbox"  />
      <span className="slider round" onClick={()=>setTheme((pre)=>pre==="dark"?"light":"dark")} ></span>
</label>
      <div className="header">
      
      <Link to="/logo" className="logo">
        <div className="firstletter">V</div>
        <div className="remaining">icky</div>
        </Link>
      
      <button className="mobilemenu" onClick={()=>setMobilemenu((pre)=>!pre)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="sections"  active={mobilemenu?"true":"false"}>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/projects">Projects</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        <div><Link to="/about">About</Link></div>
        

 
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
