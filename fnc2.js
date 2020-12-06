function f()
{
    if(arguments.length ==0){
        throw new RangeError("Expected more parameters!");
    }
    else{
        var sum = 0;
        for(var i=0;i<arguments.length;i++){
            if(typeof(arguments[i])!="number")
                throw new TypeError("Invalid parameter type");
            sum+= arguments[i];
        }
        
        return sum;
    }
}

try{
    document.querySelector("p").innerHTML = f(1,"1");
}
catch(error){
    document.querySelector("p").innerHTML = error;
}