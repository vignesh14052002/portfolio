import {useState,useEffect} from "react"
import './App.css';
import About from "./components/About"
import Contact from "./components/Contact"

import Projects from "./components/Projects"
import Home from "./components/Home";

function App() {
  const [page,setPage]=useState("home");
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
      
      <label className="switch"  >
      <div ><span></span></div>
      <input type="checkbox"  />
      <span className="slider round" onClick={()=>setTheme((pre)=>pre==="dark"?"light":"dark")} ></span>
</label>
      <div className="header">
      <div className="logo">
        <div className="firstletter">V</div>
        <div className="remaining">icky</div>
      </div>
      <button className="mobilemenu" onClick={()=>setMobilemenu((pre)=>!pre)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="sections"  active={mobilemenu?"true":"false"}>
        <div onClick={()=>setPage("home")}>Home</div>
        <div onClick={()=>setPage("projects")}>Projects</div>
        <div onClick={()=>setPage("contact")}>Contact</div>
        <div onClick={()=>setPage("about")}>About</div>
        

 
      </div>
    </div>

    {page==="home"&& <Home />}

    {page==="projects"&&<Projects />}
    {page==="about"&&<About />}
    {page==="contact"&&<Contact />}
    </div>
  );
}

export default App;
