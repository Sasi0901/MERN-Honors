function product(pid:number,pname:string,quantity?:number){
    console.log("Product ID: "+pid)
    console.log("Product name: "+pname)
    if(quantity!=undefined)
    console.log("No of products available: "+quantity)
}

// product(52,"Samsung")
// console.log("==========================================")
// product(52,"Samsung",25)

function estimate_profit(cp:number,sp:number=200){
    var profit=sp-cp;
    console.log("Profit: "+profit)
}

estimate_profit(50,80)

//Rest Parameter
function addNumbers(...nums:number[]){
    var sum = 0;
    var i:any;

    for(i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    console.log("Sum of numbers: "+sum);
}

addNumbers(11,22,33);
addNumbers(10,20,30,40,50)

function getTotal(...numbers:number[]):number{
    let total =0;
    numbers.forEach((num)=>total+=num);
    return total;
}

console.log(getTotal(10,20,30,40))