class Book {
    constructor() {

        this.name = ""
        this.author = ""
        this.price = 0

    }

    set(name, author, price){
        this.name = name
        this.author = author
        this.price = price
    }

    display(){ 
        
        console.log("\nname : " + this.name + "\nauthor: " + this.author + "\nprice: " + this.price)
    }
}

const myBook = new Book()
myBook.set("Happiness Hypothesis" , "Jhonnathan Haidt" , 200)
myBook.display()