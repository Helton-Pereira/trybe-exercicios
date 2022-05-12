const a = 60
const b = 40
const c = 80

if(a < 0 || b < 0 || c <0) {
    console.log("Número ínválido")
}
else if(a + b + c !== 180){
    console.log(false)
}
else if(a + b + c === 180) {
        console.log(true)
}

