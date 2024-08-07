class Account {
    constructor(bal){
        this.bal = bal;
        console.log("Account Created with balance "+bal)
    }

    deposit(amt){
        this.bal = this.bal + amt;
    }

    widthdraw(amt){
        this.bal = this.bal -amt;
    }

    showBal(){
        console.log("Current Balance: "+this.bal)
    }
}

let myAcc = new Account(0)
myAcc.showBal()
console.log("depositing amt 200")
myAcc.deposit(200)
myAcc.showBal()
console.log("widthdrawing 50")
myAcc.widthdraw(50)
myAcc.showBal()