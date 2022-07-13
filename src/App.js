import {useState} from "react"
import logo from './logo.svg';
import './App.css';
import About from "./components/About"
import Projects from "./components/Projects"
function App() {
  const [page,setPage]=useState("home");
  const [mobilemenu,setMobilemenu]=useState(false);
  return (
    <div className="App">
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
    {page=="projects"&&<Projects />}
    {page=="about"&&<About />}
    </div>
  );
}

export default App;
