// Variáveis para armazenar o nome do herói e a quantidade de experiência (XP)
let nomeHeroi = "Thor";
let xpHeroi = 4500;

// Estrutura de decisão para determinar a classificação com base na Exp
let classificacao;
if (xpHeroi < 1000) {
    classificacao = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    classificacao = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    classificacao = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    classificacao = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    classificacao = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    classificacao = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    classificacao = "Imortal";
} else {
    classificacao = "Radiante";
}

// Exibe a mensagem do Herói
console.log(`O herói ${nomeHeroi} possui ${xpHeroi} XP e sua classificação é ${classificacao}.`);