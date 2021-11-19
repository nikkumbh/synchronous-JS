let person1 = {
    name : "Prabal Nikkumbh",
    age : 21
}

let showDetails = function(city , state){
    console.log(this.name + " " + this.age + " " + city + " " + state);
}

let showDetailsBind = showDetails.bind(person1, "Noida");
showDetailsBind("UP");

Function.prototype.myBind = function(...args){
    let obj = this
    params = args.slice(1)
    return function(...args2){
        obj.apply(args[0],[...params , ...args2])
    }
}

let showDetailsMyBind = showDetails.myBind(person1, "raipur");
showDetailsMyBind("CG");