class car {
    color: string;

    constructor(color: string) {
        this.color = color;
        console.log("Class Car")
    }
}

class model extends car {
    model: string;

    constructor(color: string, model: string) {
        super(color)
        this.model = model
        console.log("Class Model")
    }

    print(): void {
        console.log("color: ", this.color)
        console.log("Model: ", this.model)
    }
}

class price extends model{
    amt:number;

    constructor(color:string,model:string,amt:number){
        super(color,model)
        this.amt=amt;
        console.log("Class amt")
    }

    print2(): void {
        console.log("color: ", this.color)
        console.log("Model: ", this.model)
        console.log("Price: ", this.amt)
    }
}

var obj = new model("Red", "BMW")
obj.print()

var obj2=new price("Black","BMW",15000000)
obj2.print2()