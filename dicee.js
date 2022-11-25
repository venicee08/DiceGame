function initial (){
  var initialImage1 = "images/dice1.png";

  var initial1 = document.querySelectorAll("img")[0];
  initial1.setAttribute("src", initialImage1);
}

function rollDice (){
  var randomNum1 = Math.floor(Math.random()*6)+1;
  var randomImage1 = "images/dice"+randomNum1+".png";

  var randomNum2 = Math.floor(Math.random()*6)+1;
  var randomImage2 = "images/dice"+randomNum2+".png";

  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src",randomImage1);

  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src",randomImage2);

  if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (randomNum1<randomNum2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else{
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

//when the document is clicked
document.querySelector("body").addEventListener("click", function(event){
  rollDice(this.innerHTML);
});
//when the window is refreshed
window.addEventListener("load", function(event){
  rollDice(this.innerHTML);
});
