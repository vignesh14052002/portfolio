import {useState,useEffect} from "react"
import logo from './logo.svg';
import './App.css';
import About from "./components/About"
import Projects from "./components/Projects"
import Facesvg from "./components/Facesvg";

function App() {
  const [page,setPage]=useState("home");
  const [theme,setTheme]=useState("light");
  const [mobilemenu,setMobilemenu]=useState(false);
  useEffect(()=>{
    if(theme=="dark"){
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
      <input type="button" className="togglebtn" value="Toggle" onClick={()=>setTheme((pre)=>pre=="dark"?"light":"dark")}/>
      <div className="header">
      <div className="logo">
        <div className="firstletter">V</div>
        <div className="remaining">icky</div>
      </div>
      <a href="#" className="mobilemenu" onClick={()=>setMobilemenu((pre)=>!pre)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="sections"  active={mobilemenu?"true":"false"}>
        <div onClick={()=>setPage("home")}>Home</div>
        <div onClick={()=>setPage("projects")}>Projects</div>
        <div onClick={()=>setPage("gallery")}>Gallery</div>
        <div onClick={()=>setPage("about")}>About</div>
        

 
      </div>
    </div>

    {page=="home"&&<Facesvg/>}

    {page=="projects"&&<Projects />}
    {page=="about"&&<About />}
    </div>
  );
}

export default App;
