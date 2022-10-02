let player;
let computer;
let player_score = 0;
let computer_score= 0;

const paper =() =>{
     player = 1;
     computer = Math.floor(Math.random()*3+1)
     
     if (computer == 1)
     {
         document.querySelector("#turn").innerHTML = "Computer pick stone";
     }
     else if (computer ==2)
     {
         document.querySelector("#turn").innerHTML = "Computer pick paper";
     }
     else
     {
         document.querySelector("#turn").innerHTML = "Computer Pick Scissor";
     }


     if(computer==player)
     {
         document.querySelector("#message").innerHTML = "Draw Turn";
     }
    else if(computer==2)
    {
        document.querySelector("#message").innerHTML ="Computer Win!";
        computer_score = computer_score + 1;
        document.querySelector("#C").innerHTML = computer_score;
    }
    else if(computer==3)
    {
        document.querySelector("#message").innerHTML = "Computer Win!";
        computer_score = computer_score + 1;
        document.querySelector("#C").innerHTML = computer_score;
    }
}

const stone =() =>{
    player = 2;
    computer = Math.floor(Math.random()*3+1)
    if (computer == 1)
    {
        document.querySelector("#turn").innerHTML = "Computer pick stone";
    }
    else if (computer ==2)
    {
        document.querySelector("#turn").innerHTML = "Computer pick paper";
    }
    else
    {
        document.querySelector("#turn").innerHTML = "Computer Pick Scissor";
    }


    if(computer==player)
    {
        document.querySelector("#message").innerHTML = "Draw Turn";
    }
   else if(computer==3)
   {
       document.querySelector("#message").innerHTML ="Player Win!";
       player_score = player_score + 1;
       document.querySelector("#P").innerHTML = player_score;
   }
   else if(computer==1)
   {
       document.querySelector("#message").innerHTML = "Player Win!";
       player_score = player_score + 1;
       document.querySelector("#P").innerHTML = player_score;
   }
}

const Scissor =() =>{
    player = 3;
    computer = Math.floor(Math.random()*3+1)
    
    if (computer == 1)
    {
        document.querySelector("#turn").innerHTML = "Computer pick stone";
    }
    else if (computer ==2)
    {
        document.querySelector("#turn").innerHTML = "Computer pick paper";
    }
    else
    {
        document.querySelector("#turn").innerHTML = "Computer Pick Scissor";
    }


    if(computer==player)
    {
        document.querySelector("#message").innerHTML = "Draw Turn";
    }
   else if(computer==2)
   {
       document.querySelector("#message").innerHTML ="Computer Win!";
       computer_score =  computer_score + 1;
       document.querySelector("#C").innerHTML =  computer_score;
   }
   else if(computer==1)
   {
       document.querySelector("#message").innerHTML = "Player Win!";
       player_score = player_score + 1;
       document.querySelector("#P").innerHTML = player_score;
   }
}