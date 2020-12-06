function f(par1,par2)
{
    if(arguments.length <2){
        throw new RangeError("Expected more parameters!");
    }
    else if(arguments.length>2){
        throw new RangeError("Expected less parameters!");
    }
    else{
        return par1+par2;
    }
}

try{
    document.querySelector("p").innerHTML = f(1);
}
catch(error){
    document.querySelector("p").innerHTML = error;
}