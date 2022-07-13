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
    <div id="Project">
        
        {projectdata.length==0?<div className="Loading"><h1>Loading....</h1></div>:
        projectdata.slice(startat,startat+2).map((obj)=>{

            return(
                <div className="projectContainer">
                    <div className="objectcontainer">
            <object type="text/html" data={"https://vignesh14052002.github.io/p5js-projects/"+obj.path} ></object>
            </div>
            <h3>{obj.title}</h3>
            </div>)
    })}
    </div>
    <div className="pagination">
        {[...Array(parseInt(projectdata.length/2))].map((x,i)=><div id={i} onClick={()=>setStartat(i)}>{i+1}</div>)}
    </div>
    
</>
)
}
{/* <a href="https://vignesh14052002.github.io/p5js-projects/empty-example/planetandgravity/index.html">Projects</a>
  */}