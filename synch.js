// function greet(personName, age, callback ,callback2){
//     let msg = "hello"+personName
//     let ageOfPerson = age
    
//     callback(msg)
//     callback2(ageOfPerson)
// }
// function logGreeting(greeting){
//     console.log(greeting)
// }
// function showAge(age){
//     console.log(age)
// }
// greet("steve",25,logGreeting,showAge)

//-------------------------------------------------

console.log("hello")

setTimeout(function st1(){
    console.log("I am st1")
} ,2000)

setTimeout(function st2(){
    console.log("I am st2")
} ,1000)

function sayBye(){
    console.log("Bye")
}
sayBye()

sayBye.bind()
const
