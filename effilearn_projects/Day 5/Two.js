class Point{

    constructor(x,y){

        this.x=x;
        this.y=y;
    }

    
     findDistance(p2)
    {
        const x = this.x-p2.x 
        const y = this.y-p2.y
        


         
        const dist= Math.sqrt((x*x)+(y*y))

        return dist
    }

}

const  p1 = new Point(0,3)
const p2 = new  Point(4,0)
const dist = p1.findDistance(p2)
console.log(dist)