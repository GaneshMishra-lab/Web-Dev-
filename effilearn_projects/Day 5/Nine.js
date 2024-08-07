class BankAcc{

    constructor(){
        this.accName = ""
        this.acNo = 0
        this.bal = 0
        console.log("New Account Created")
    }


    add(accName , acNo , bal)
    {
        this.accName = accName
        this.acNo = acNo
        this.bal = bal        
    }

    display(){
        console.log("\nname : " + this.accName + "\nacNo: " + this.acNo + "\nbal " + this.bal)
    }

}

const acc = new BankAcc()
acc.add("Ganesh" , 249 , 200)
acc.display()