import { useEffect, useRef } from 'react';
import {spritedata} from './spritedata'
import imgpath from '../../images/ninjagame_spritesheet.png'

let runaway = false
function sketch(canvas){
    
let ctx,img;

canvas.width=window.innerWidth
canvas.height=window.innerHeight;
ctx=canvas.getContext("2d")
img=new Image();
// img.crossOrigin = "anonymous";
img.onload=()=>{
    ctx.drawImage(img,spritedata["slide"].xoff,0,spritedata["slide"].width,500,spritedata["slide"].width/(playerscale*2),0,spritedata["slide"].width/playerscale,500) 
    draw()
}
img.src=imgpath


let x=5360+536*0;
let width=282;

let y=0;
let absoluteFrame=0;
let frame=0;
let frameOnAction = frame
let framedelay=5;

let playerx=-10
let current_state="run"
let ground=window.innerHeight-100;
let playerscale=3;
let playerheight=500/playerscale;
let playery=ground-playerheight;
let flipx=1
let flipy=1

let initialStateReached = false
let weapons = []
function draw(){
    if (runaway){
        current_state = "run"
        speed = maxspeed
        flipx = 1
    }
    if (absoluteFrame > 50 && !initialStateReached) {
        current_state = "idle"
        speed = 0
        initialStateReached = true
    }
    let current=spritedata[current_state]
    ctx.clearRect(0,0,canvas.width,canvas.height)

    let myframe=Math.floor(frame/framedelay)
    x=current.xoff+current.width*myframe;
    // ctx.fillRect(0,ground,canvas.width,100)
    ctx.save()
    ctx.translate(playerx,playery+current.yoff)
    ctx.scale(flipx,flipy)
    ctx.drawImage(img,x,0,current.width,500,-current.width/(playerscale*2),0,current.width/playerscale,500/3)
    ctx.restore()
    frame++;
    absoluteFrame++;
    if(myframe>current.frames-2){
        frame=0;
    }
    if(playery+playerheight-30<ground){
        playery+=maxspeed/2
        grounded=false
    }
    else{
        grounded=true;
        if(gliding){
            gliding=false;
            current_state="idle"
            speed=0
        }
    }
    playerx+=speed
    if(jumping){
        playery-=maxspeed*2;
    }
    drawWeapons()
    window.requestAnimationFrame(draw)
}

function drawWeapons(){
    // remove weapons that are off screen
    weapons = weapons.filter(weapon => weapon.x < canvas.width && weapon.x > 0)
    for (const weapon of weapons) {
        weapon.move()
        weapon.draw()
    }
}

let grounded=false;
let gliding=false;
let maxspeed=10;
let speed=maxspeed;
let jumping=false
let throwing = false
//keyboard controls
let key;
var map = {}; 

window.onkeydown = window.onkeyup = function(e){
    
    // e = e || event; // to deal with IE
    key=e.keyCode
    map[key] = e.type == 'keydown';
    
    if(! (map[65]||map[39]||map[37]||map[38]||map[40])&&grounded ){
        current_state="idle"
    }
    if(map[39]){//left
        if(grounded)
        current_state="run"
        flipx=1
        speed=maxspeed
    }
    if(map[37]){//right
        if(grounded)
        current_state="run"
        flipx=-1
        speed=maxspeed*-1
    }
    if(key==38){//up
        if(map[key] && grounded){
            current_state="jump";
            jumping=true;
            setTimeout(()=>{
                current_state="glide";
                speed=0;
                jumping=false
                gliding=true;
            },500)
        }
        
    }

    if(map[40] && grounded){//down
        current_state="slide"
    }
    if(map[65]){//attack
        current_state="throw"
        throwing = true
        weapons.push(new Weapon())
    }
    if(current_state=="idle")speed=0;
    frameOnAction = absoluteFrame;
}

//mouse drag controls
window.onmousedown = function(e){
    if (window.innerWidth>700) return
    if(e.clientX>playerx){
        current_state="run"
        flipx=1
        speed=maxspeed
    }
    else{
        current_state="run"
        flipx=-1
        speed=maxspeed*-1
    }
    frameOnAction = absoluteFrame;
}


class Weapon{
    constructor(){
        this.x=playerx
        this.y=playery
        this.width=32
        this.height=32
        this.speed=maxspeed*flipx*2
        this.rotation=(90 * Math.PI) / 180
    }
    draw(){
        ctx.save()
        ctx.translate(this.x,this.y)

        ctx.scale(flipx,flipy)
        const current=spritedata["weapon"]

        // rotate the weapon
        // this.rotation += (45 * Math.PI) / 180

        ctx.rotate(this.rotation)

        ctx.drawImage(img,current.xoff,0,current.width,500,-current.width/(playerscale*2) + 500/6,-25,current.width/playerscale,500/3)
        ctx.restore()
    }
    move(){
        this.x+=this.speed
    }
}


}


function NinjaGame() {
    const canvasRef = useRef();
    useEffect(() => {
        // On component creation, instantiate a p5 object with the sketch and container reference 
        sketch(canvasRef.current)
        // On component destruction, delete the p5 instance
        return () => {
            // p5Instance.remove();
        }
    }, []);

    return (
        <canvas ref={canvasRef} style={
            {
                position:"fixed",
                zIndex:-5
            }
        }></canvas>
    );
}

export default NinjaGame