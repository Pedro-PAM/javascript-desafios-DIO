/* Objetivo 

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo: */

var nomePersonagem = "";
var qtdXP = 0;

/* Mesuração de XP */

var nivelPersonagem = "";

if (qtdXP<=1000){
    nivelPersonagem = "Ferro";
}
else if (qtdXP>=1001 && qtdXP<=2000){
    nivelPersonagem = "Bronze";
}
else if (qtdXP>=2001 && qtdXP<=5000){
    nivelPersonagem = "Prata";
}
/* No desafio o XP está entre 6001 e 7000, mas não há uma condição para caso o personagem tenha mais de 5000 e menos de 6000, então coloquei essa linha assim */
else if (qtdXP>=5001 && qtdXP<=7000){
    nivelPersonagem = "Ouro";
} 
else if (qtdXP>=7001 && qtdXP>=8000){
    nivelPersonagem = "Platina";
}
else if (qtdXP>=8001 && qtdXP<=9000){
    nivelPersonagem = "Ascendente";
}
else if (qtdXP>=9001 && qtdXP<=10000){
    nivelPersonagem = "Imortal";
}
else{
    nivelPersonagem = "Radiante";
}

console.log("O herói de nome " + nomePersonagem + " está no nível " + nivelPersonagem);


/*
Mesmo código, porém agora em uma função + chamada de função 
function heroiInfo(nomePersonagem, qtdXP){
    var nivelPersonagem = "";

    if (qtdXP<=1000){
        nivelPersonagem = "Ferro";
    }
    else if (qtdXP>=1001 && qtdXP<=2000){
        nivelPersonagem = "Bronze";
    }
    else if (qtdXP>=2001 && qtdXP<=5000){
        nivelPersonagem = "Prata";
    }
    else if (qtdXP>=5001 && qtdXP<=7000){
        nivelPersonagem = "Ouro";
    } 
    else if (qtdXP>=7001 && qtdXP>=8000){
        nivelPersonagem = "Platina";
    }
    else if (qtdXP>=8001 && qtdXP<=9000){
        nivelPersonagem = "Ascendente";
    }
    else if (qtdXP>=9001 && qtdXP<=10000){
        nivelPersonagem = "Imortal";
    }
    else{
        nivelPersonagem = "Radiante";
    }
    console.log("O herói de nome " + nomePersonagem + " está no nível " + nivelPersonagem);
}
heroiInfo("Jonas", 1500); 
*/
