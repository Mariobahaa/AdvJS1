function rev1() {
    return ([].reverse.call(arguments));
}


function rev2() {
    return ([].reverse.bind(arguments)());
}



function rev3() {
    var arr = [];
    for(var i=0;i<arguments.length;i++){
        arr[i]=arguments[i];
    }
    arr.reverse();
    return arr;
}

try {
    var rev = rev1(1, 2, 3, 4);
    for (var i = 0; i < rev.length; i++)
        document.querySelector("p").innerHTML += rev[i] + " ";
} catch (error) {
    document.querySelector("p").innerHTML = error;
}

try {
    rev = rev3(1, 2, 3, 4);
    for (var i = 0; i < rev.length; i++)
        document.querySelector("label").innerHTML += rev[i] + " ";
} catch (error) {
    document.querySelector("label").innerHTML = error;
}
//if that's not the task, try making a new empty array, copy items in it then reverse them.


function rev3() {
    return ([].reverse.bind(arguments)());
}
