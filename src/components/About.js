import profile from "../images/profile.jpg"
import "./About.css"
export default function About() {
return (
    <div id="About">
    <img id="profileimg" alt="my profile pic" src={profile}></img>
    <h2>Vignesh A</h2>
    <h5>Web developer</h5>
    <div className="socialmedia">
        <div className="row">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
        </div>
    </div>
    </div>
)
}