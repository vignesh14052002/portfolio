import { useEffect, useRef } from 'react';
import p5 from 'p5';
import imgtest from '../images/vicky.png'

let pageTheme;
function sketch(p5) {
    // p is a reference to the p5 instance this sketch is attached to
    let particles=[]
    let img;
    let sc=3;
    console.log(img);
    p5.preload = function(){
        img=p5.loadImage(imgtest)
    }
    p5.setup = function() {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        
         let tsc=p5.windowWidth/200;
         if(tsc>sc){
            sc=tsc;
         }
         console.log(sc);
        img.loadPixels();
    
        for (let i = 0; i < img.width; i++) {
            for (let j = 0; j < img.height; j++) {
                if(img.pixels[i*4+img.width*4*j]>200){
                    if(p5.windowWidth<p5.windowHeight){
                        particles.push(new Particle(-10+i*sc,p5.windowHeight/4+j*sc))
                   
                    }
                    else{
                        particles.push(new Particle(p5.windowWidth/6+i*sc,p5.windowHeight/10+j*sc))
                    }
                }
            }
        }
        
    }
let bgalpha=255;
    p5.draw = function() {
        // your draw code here
        if(pageTheme==="light"){

            p5.background(255,bgalpha);
        }
        else{
            p5.background(0,bgalpha);
            
        }
        // image(img,0,0,img.width,img.height)
    
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.update()
            p.show()
            if(p5.dist(p.pos.x,p.pos.y,p5.mouseX,p5.mouseY)<sc*5){
                let point=p.pos.copy();
                let mouse=p5.createVector(p5.mouseX,p5.mouseY)
                let diff=point.sub(mouse)
                let dir=diff.normalize()
                let newvel=dir.mult(sc*3)
                // console.log(point);
                p.vel=newvel
    
            }
        }
    }
    let gp=p5;
    class Particle {
        constructor(x,y) {
        //   this.pos = createVector(random(width), random(height));
        this.initpos=gp.createVector(x,y)
        this.pos = gp.createVector(x,y);
        this.vel = gp.createVector(0,0);
          this.acc = gp.createVector(0,0);
          this.maxspeed = 10;
          this.color=0
          //this.shuffleArray(this.color)
        }
      
        update() {
                let desired= p5.constructor.Vector.sub(this.initpos,this.pos);
                desired.setMag(this.initpos.dist(this.pos)/20);
                let steering=p5.constructor.Vector.sub(desired,this.vel);
                steering.mult(0.1)
                this.acc.add(steering)
            
    
          this.vel.add(this.acc);
          this.vel.limit(this.maxspeed);
          this.pos.add(this.vel);
          this.acc.mult(0);
        }
        show(){
            gp.noStroke()
            let pointdist=Math.round(this.initpos.dist(this.pos));
            let varclr=p5.map(pointdist,0,sc*5,0,255)
            p5.drawingContext.shadowBlur = this.initpos.dist(this.pos);
            if(pageTheme==="light"){

                p5.drawingContext.shadowColor = p5.color(varclr,0,0);
                gp.fill(varclr,0,0)
            }
            else{
                p5.drawingContext.shadowColor = p5.color(varclr,varclr,0);
                gp.fill(255,255,255-varclr)
                
            }
            gp.ellipse(this.pos.x,this.pos.y,sc)
        }
    }  
}

function P5logo({theme}) {
    const p5ContainerRef = useRef();
pageTheme=theme;
    useEffect(() => {
        // On component creation, instantiate a p5 object with the sketch and container reference 
        const p5Instance = new p5(sketch, p5ContainerRef.current);

        // On component destruction, delete the p5 instance
        return () => {
            p5Instance.remove();
        }
    }, []);

    return (
        <div className="App" ref={p5ContainerRef} />
    );
}

export default P5logo

