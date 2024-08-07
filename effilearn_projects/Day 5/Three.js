class Circle{

    constructor(r){
        this.r = r;
    }

     calcArea(){
        const area = this.r*this.r*Math.PI;
        return area;
    }

    calcCircumference(){
        const circumference = this.r*2*Math.PI
        return circumference;
    }
}

const myCircle = new Circle(3.14)

console.log("Area: " + myCircle.calcArea() + "Circumference : "+ myCircle.calcCircumference())