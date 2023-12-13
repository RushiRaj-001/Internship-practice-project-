var x = 1;
var y = 3
a();

console.log(x)



function a() {
    var x = 100
    console.log(x)
}

let b = function () {
    var x = 1000
    console.log(x)
}

const c = (x) => {

    console.log(x)
}

b();
c(20);