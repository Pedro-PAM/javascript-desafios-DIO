function eloPlayer(win,lose){
    elo = win - lose;
    level = "";
    if (elo<10){
        level = "Ferro";
    }
    else if(elo<=11 && elo<20){
        level = "Bronze";
    }
    else if(elo<=21 && elo<50){
        level = "Prata";
    }
    else if(elo<=51 && elo<80){
        level = "Ouro";
    }
    else if(elo<=81 && elo<90){
        level = "Diamante";
    }
    else if(elo<=91 && elo<100){
        level = "Lendário";
    }
    else{
        level = "Imortal";
    }

    console.log(`O herói tem saldo de ${elo} vitórias e está no nível ${level}`);

}

eloPlayer(60,100);