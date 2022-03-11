let passGen1 = document.getElementById("genpass-el1")
let passGen2 = document.getElementById("genpass-el2")
let passGen3 = document.getElementById("genpass-el3")
let passGen4 = document.getElementById("genpass-el4")

let passGen = [passGen1, passGen2, passGen3, passGen4]

console.log(passGen)

let passArray = ["a","b","c","A","B","C","1","2","3","!","@","#"]
let passLength = 5

function genPass(){
    console.log("clicked")
    let passAux = []
    for(let i=0; i < 4; i++){
        for(let i=0; i < passLength ; i++){
            passAux += passArray[getRandomIndex()]  
        }
        passGen[i].textContent = passAux
        passAux = []     
    }
}
function getRandomIndex(){
    return Math.floor(Math.random()*passArray.length)
}
console.log(getRandomIndex())