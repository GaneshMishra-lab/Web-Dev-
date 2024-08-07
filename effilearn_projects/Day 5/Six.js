class Student{
    
    constructor(){
        this.name="";
        this.id="";
        this.std=0;
    }

    set(name , id , std){
        this.name = name;
        this.id = id;
        this.std = std;
    }

    display(){
        console.log("\nname : " + this.name + "\nid: " + this.id + "\nstd: " + this.std)
    }
}

const stud = new Student();
stud.set("ganesh" , "I053" , 13)
stud.display()


const stud2 = new Student();
stud2.set("Ramesh" , "I055" , 13)
stud2.display()