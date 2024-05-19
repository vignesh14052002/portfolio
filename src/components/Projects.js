import "./Projects.css"
import {useState,useEffect} from "react"

export default function Project() {
    const [projectdata,setProjectdata]=useState([]);
    const [startat,setStartat]=useState(0);
    useEffect(()=>{
        fetch("https://api.github.com/repos/vignesh14052002/p5js-projects/git/trees/main?recursive=1")
.then((res)=>res.json())
.then((data)=>{
    let projectobjects=[];
    for(const file of data["tree"]){
        if(file["path"].endsWith("index.html")){
            const obj={}
            const patharr=file["path"].split("/")
            obj.title=patharr[patharr.length-2]
            obj.path=file["path"]
            projectobjects.push(obj)
        }
    }
    
    setProjectdata(projectobjects);
    console.log(projectobjects)

})
    },[])

return (
    <>
    <div className="center">
    <a href="https://github.com/vignesh14052002/p5js-projects">Github Repo</a>
    <h2>p5js projects</h2>
    </div>
    <div id="Project">
        
        {projectdata.length===0?<div className="Loading"><h1>Loading....</h1></div>:
        projectdata.slice(startat,startat+2).map((obj)=>{

            return(
                <div className="projectContainer">
                    <div className="objectcontainer">
            <object aria-label="project" type="text/html" data={"https://vignesh14052002.github.io/p5js-projects/"+obj.path} ></object>
            </div>
            <h3>{obj.title}</h3>
            </div>)
    })}
    </div>
    <div className="pagination">
        {[...Array(parseInt(projectdata.length/2))].map((x,i)=><div id={i} onClick={()=>setStartat(i*2)}>{i}</div>)}
    </div>
    
</>
)
}