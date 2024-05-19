import "./Contact.css"
export default function Contact() {

const socialMedia=  [  {name : 'Github' , link : 'https://github.com/vignesh14052002' , iconclass : 'fa-github'},
{name : 'linkedin' , link : 'https://www.linkedin.com/in/vignesh-a-ba83841b0/' , iconclass : 'fa-linkedin'},
{name : 'twitter' , link : ' https://twitter.com/vignesharivazh2?t=gchEupg5YT5Vbbpo9lPNbg&s=08' , iconclass : 'fa-twitter'},
{name : 'instagram' , link : 'https://www.instagram.com/vignesh_arivazhagan_/' , iconclass : 'fa-instagram'},
{name : 'Reddit' , link : 'https://www.reddit.com/user/vignesh-2002' , iconclass : 'fa-reddit'},
{name : 'StackOverflow' , link : 'https://stackoverflow.com/users/13218335/vignesh' , iconclass : 'fa-stack-overflow'},
{name : 'Discord' , link : 'https://discordapp.com/users/1053652408271634432' , iconclass : 'fa-discord'},
{name : 'Facebook' , link : 'https://www.facebook.com/vignesh.rock.98622/' , iconclass : 'fa-facebook'},

];
return (
    <div id="contact">
    <h1>Let's get connected</h1>
    <div className="socialmedia">
        <div className="row">
        {socialMedia.map((item,index)=>{
            return(
                <a key={index} href={item.link}><i className={"fa-brands "+item.iconclass}></i></a>
            )
        })}

       
        </div>
    </div>
    </div>
)
}