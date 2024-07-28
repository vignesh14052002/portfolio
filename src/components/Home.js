import {ReactComponent as Connector} from '../images/connector.svg';
import {useState} from "react"
import React from 'react';
import "./Home.css"
import Facesvg from './Facesvg'
import NinjaGame from './NinjaGame/NinjaGame';
export default function Home() {
    const [selected,setSelected]=useState(null);
    const skills={
        "Web Developer":{
            "FrontEnd":["React"],
            "BackEnd":["FastAPI"],
        },
        "Ai App Developer":{
            "Prompting":[],
            "Retrieval Augumented Generation":[],
        },
        "Game Developer":{
            "Canvas Games":["p5js"],
            "Unity":[]
        },
        "Animator":{
            "3D Animation":["Blender"],
        }
    }
  
return (
    <>
    {selected && selected==='Game Developer' && <NinjaGame/>}
    <main>
    <div className={selected?'graphics selected':'graphics'}>
    {Object.keys(skills).map((skill)=>(
        <div className={skill === selected?'skill-card selected':'skill-card'} key={skill}>
        <Connector />
        <h2   onClick={()=>setSelected(skill)}>{skill}</h2>
        </div>
    ))}
    <Facesvg/>
    </div>
    <div className='Content'>
        <h1>Skills</h1>
        <div className='container'>
        {selected && 
            <ul>
            {Object.entries(skills[selected]).map(([key, value], ind) =>
                <li key={ind} className='outer-list'>
                    {key}
                    <ul>
                    {value.map((skill, index) => 
                        <li key={index} className='inner-list'>
                            {skill}
                        </li>
                    )}
                    </ul>
                </li>
            )}
            </ul>
        }
        
        </div>       
    </div>
    </main>
    </>
)
}