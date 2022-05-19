let pecaXadez;
pecaXadez = "dama"
let result = pecaXadez.toLowerCase();


switch (result) {
    case "peão":
        console.log("Move um quadrado para frente por turno")
        break;

        case "torre":
        console.log("Move na vertical e horizontal")
        break;

        case "bispo":
        console.log("Move em diagonais")
        break;

        case "cavalo":
        console.log("Move em L")
        break;

        case "rainha":
        console.log("Move livremente")
        break;

        case "rei":
        console.log("Move livremente um quadrado por vez")
        break;

    default:
        console.log("Peça inválida")
        break;
}