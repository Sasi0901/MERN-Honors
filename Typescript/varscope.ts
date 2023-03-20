var global_v=11; //global variable

class vs{
    va_var = 22;

    static static_v=52;

    localnumber(): void {
        var local_v=65;
        console.log("Local variable: "+local_v);
    }
}
    console.log("global variable "+global_v);
    var obj = new vs();
    console.log("Class Variable: "+obj.va_var);
    console.log("Static Variable: "+vs.static_v);
    // console.log("Local number: "+obj.localnumber)
    obj.localnumber();

//============================================================================================================

    function fun1(){
        console.log("Hello World!!");
    }

    var sasi=()=>{
        return "Function without name";
    }

    console.log(sasi())

    let sum = function(x:number,y:number):number{
        return x+y;
    }
    console.log(sum(3,7))