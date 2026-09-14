function getRnd(){
    return Math.floor(Math.random()* 3) + 1
}
let score = 0;
function getChoice(ch){
    let cpu = getRnd();
    const contdiv = document.querySelector("#res");
    const scorediv = document.querySelector("#score");
    const emojis = {
        1:"🪨",
        2:"📃",
        3:"✂️"
    };
    const emojcpu = emojis[cpu];
    if (cpu == ch){
        contdiv.innerHTML = `Draw 🥀 (CPU = ${emojcpu})`;
    }
    else if ((ch == 1 && cpu == 3)||(ch == 2 && cpu == 1)||(ch == 3 && cpu == 2)){
        contdiv.innerHTML = `Win 🥳!! (CPU = ${emojcpu})`;
        score = score + 1;
        scorediv.innerHTML = score;
    }
    else{
        contdiv.innerHTML = `Lose 🥺 (CPU = ${emojcpu})`;
        score = score - 1;
        scorediv.innerHTML = score;
    }
}