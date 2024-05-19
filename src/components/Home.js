import {ReactComponent as Connector} from '../images/connector.svg';
import {useState} from "react"
import React from 'react';
import "./Home.css"
import Facesvg from './Facesvg'
export default function Home() {
    const [selected,setSelected]=useState(-1);
    const headings=["Web Developer","Ai App Developer","Game Developer","Animator"]
    const skills=[[["FrontEnd",80],["BackEnd",30],["Database",40]],
    [["Prompting",30],["Retrieval Augumented Generation",80]],
    [["Canvas Games",80],["Unity",30]],
    [["2D Animation",80],["3D Animation",30]]
];
return (
    <>
    <main>
    <div className={selected!==-1?'graphics selected':'graphics'}>
    {headings.map((val,ind)=>(
        <div className={ind === selected?'skill-card selected':'skill-card'} key={ind}>
        <Connector />
        <h2   onClick={()=>setSelected(ind)}>{val}</h2>
        </div>
    ))}
    <Facesvg/>
    </div>
    <div className='Content'>
        <h1>Skills</h1>
        <div className='container'>
         {skills[selected===-1?0:selected].map((val,ind)=>
            
        <div key={ind}>
            <label >{val[0]}</label>
            <input  type="range" min={0} max={100} value={val[1]} readOnly />
        </div>
        )}
        
        </div>       
    </div>
    </main>
    </>
)
}