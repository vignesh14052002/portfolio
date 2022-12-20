import {ReactComponent as Connector} from './connector.svg';

import "./Home.css"
import Facesvg from './Facesvg'
export default function About() {
return (
    <main>
    <Connector/>
    <Connector/>
    <Connector/>   
    <Connector/>
    <div className="side left">
    <h2>Web Developer</h2>
    
    <h2>Graphic Designer</h2>
    </div>
    <Facesvg/>
    <div className="side right">
    <h2>Game Developer</h2>
    <h2>Animator</h2>
    </div>
    </main>
)
}