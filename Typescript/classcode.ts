class student {
    // let newname:string;
    // let newname;
    // private student1;

    // firstname="sasi"
    roll: number;
    firstname: string = "sasi";

    constructor(roll: number, firstname: string) {
        this.roll = roll;
        this.firstname = firstname;
    }
    localFuntion = () => {
        console.log(this.firstname);
        // return 5;
    }

}

let student5 = new student(52, "Sasi Venkata Kiran Rachapotu");

// console.log(student5.firstname)   
// student5.firstname = "Sasi Rachapotu";
console.log(student5.localFuntion())

class bank{
    balance:number;
    acctNo:string;
    phone:string;
    name:string;

    constructor(name:string, acctNo:string, phone:string,balance:number){
        this.name=name;
        this.acctNo=acctNo;
        this.phone=phone;
        this.balance=balance;
    }

    withdraw(amt:number):boolean{
        if(this.balance>amt){
            this.balance-=amt;
            console.log("Current Balance: "+this.balance);
            return true;
        }
        else{
            return false;
        }
    }

    deposit(amt:number):boolean{
        this.balance+=amt;
        console.log("Current Balance: "+this.balance);
        return true;
    }

    checkBalance():boolean{
        console.log("Balance: "+this.balance);
        return true;
    }

    compare(o1:bank):boolean{
        if(this.balance>o1.balance){
            console.log("You have less balance than me...");
            return true;
        }
        else{
            console.log("Bade log...");
            return false;
        }

    }
}

let bank1 = new bank("Sasi Venkata Kiran Rachapotu", "1234567890", "0987654321", 1000);

let bank2 = new bank("Sasi Rachapotu","1235","1456844",150000)

bank1.checkBalance();
bank1.deposit(10000)
bank1.withdraw(10);
bank1.checkBalance();
bank1.compare(bank2);



