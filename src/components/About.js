import profile from "../images/profile.jpg"
import "./About.css"
export default function About() {
return (
    <div id="About">
    <img id="profileimg" alt="my profile pic" src={profile}></img>
    <h2>Vignesh A</h2>
    <h5>Web/App/Game Developer </h5>
    <p>Interested in Web/App/Game Development , Machine Learning , Graphics , Animation</p>
    <h2>Credits</h2>
    <p>Home page cartoon - <a href="ID 151117895 © Jemastock | Dreamstime.com">Jemastock Dreamstime</a></p>
    </div>
)
}