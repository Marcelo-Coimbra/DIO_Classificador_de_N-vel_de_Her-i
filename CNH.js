let nomeHeroi = "Ronnie J DIO"
let XP = 10002
let nivel

if(XP < 1000){
   nivel = "Ferro"
}
else if(XP >= 1001 && XP <= 2000){
    nivel = "Bronze"
}
else if(XP >= 5001 && XP <= 7000){
    nivel = "Ouro"
}
else if(XP >= 7001 && XP <= 8000){
    nivel = "Diamante"
}
else if(XP >= 8001 && XP <= 9000){
    nivel = "Imortal"
}
else if(XP >= 9001 && XP <= 10000){
    nivel = "Rock Star"
}
else if(XP >= 10001){
    nivel = "God of Metal! \\o/ \\o/"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel)