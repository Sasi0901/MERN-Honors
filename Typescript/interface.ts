interface Person{
    firstname:string;
    lastname:string;
    age:number
    GetFullName();
    GetAge();
}
interface employee2{
    post:string;
    GetPost()
}

class employee1 implements Person,employee2{
    firstname:string;
    lastname:string;
    age:number
    post:string
    constructor(firstname: string,lastname:string,age:number,post:string){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age
        this.post=post
    }
    GetFullName(){
        console.log(this.firstname+" "+this.lastname)
    }
    GetAge(){
        console.log(this.age)
    }
    GetPost(){
        console.log(this.post)
    }
}

var obj4= new employee1("sasi","rachapotu",19,"SD");
obj4.GetFullName();
obj4.GetAge()
obj4.GetPost()
