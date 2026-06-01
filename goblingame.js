var score = 0;
const goblin = document.getElementById("goblin");
const sound = new Audio('goblin-sound.mp3');
function game() {
    if(score >= 10){
        document.getElementById("code").innerHTML = "09GKDL7.html"
    }
    sound.load();
  
    var randX = Math.floor(Math.random() * window.innerWidth / 2);
    var randY = Math.floor(Math.random() * window.innerHeight / 2);
    goblin.style.position = 'absolute';
    goblin.style.left = randX + 'px';
    goblin.style.top = randY + 'px';
    
   
    goblin.style.display = 'block';
    sound.play();
        setTimeout(game, 1000);
}

goblin.addEventListener('click', () => {
    score++;
    document.getElementById("counter").innerHTML = "SCORE: " + score;
    goblin.style.display = 'none';
    
    setTimeout(game, 1000);
});
game();
