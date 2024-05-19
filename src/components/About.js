import profile from "../images/profile.jpg"
import "./About.css"
export default function About() {
return (
    <div id="About">
    <img id="profileimg" alt="my profile pic" src={profile}></img>
    <h2>Vignesh A</h2>
    <h5>Developer </h5>
    <p>Project Engineer @ soliton technologies</p>
    <h2>Credits</h2>
    <p>Home page cartoon - <a href="https://www.dreamstime.com/indian-boy-face-avatar-cartoon-black-white-indian-young-boy-face-glasses-profile-picture-avatar-cartoon-character-image151117895">Jemastock Dreamstime</a></p>
    </div>
)
}