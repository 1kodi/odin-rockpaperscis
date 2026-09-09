function getRnd(){
    return Math.floor(Math.random()* 3) + 1
}
function getChoice(ch){
    let cpu = getRnd();
    const contdiv = document.querySelector(".content");
    const emojis = {
        1:"🪨",
        2:"📃",
        3:"✂️"
    };
    if (cpu == ch){
        contdiv.innerHTML = "Draw 🥀";
    }
    else if ((ch == 1 && cpu == 3)||(ch == 2 && cpu == 1)||(ch == 3 && cpu == 2)){
        contdiv.innerHTML = "Win 🥳!!"
    }
    else{
        contdiv.innerHTML = "Lose 🥺"
    }
}