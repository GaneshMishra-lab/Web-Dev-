class Rectangle {

    constructor(length , width){
        this.length = length 
        this.width = width
        console.log("Rectangel of length "+this.length + " and width " + this.width + " created")
    }

    clacArea(){
        return this.length * this.width 
    }

    calcPerimeter(){
        return this.length + this.width
    }
}


const myRect = new Rectangle(2,4)
console.log("Area is " + myRect.clacArea() + " Perimeter is " + myRect.calcPerimeter())
