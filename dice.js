
var randomNumber1 = "dice" + Math.floor((Math.random() * 6) + 1);
var randomNumber2 = "dice" + Math.floor((Math.random() * 6) + 1);


document.querySelector('.img1').setAttribute('src', 'images/' + randomNumber1 + '.png');
document.querySelector('.img2').setAttribute('src', 'images/' + randomNumber2 + '.png');


if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector('h1').innerHTML = "Player 2 wins!";
} else {
  document.querySelector('h1').innerHTML = "Draw";
}



//var firstImage = document.querySelector('.img1');
//var secondImage = document.querySelector('.img2');
