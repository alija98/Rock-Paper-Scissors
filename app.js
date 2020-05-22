const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const temp = document.querySelector(".temp");
const igrac = document.querySelector(".igrac");
const kompjuter = document.querySelector(".kompjuter");
const vezanepobjede = document.querySelector(".vezanepobjede");
let playerPoints = 0;
let computerPoints = 0;
var winsinrow = 0;

rock.addEventListener("click", game);
paper.addEventListener("click", game);
scissors.addEventListener("click", game);

function randomNumber() {
  return Math.floor(Math.random() * 3);
}

function highlightText(element) {
  element.style.fontSize = "17px";
  setTimeout(function () {
    element.style.fontSize = "16px";
  }, 200);
}

function game(e) {
  //ROCK

  if (e.target.classList.contains("rock")) {
  
    let random = randomNumber();
    if (random == 0) {
      temp.textContent =
        "Vi ste izabrali kamen, kompjuter je izabrao papir. Izgubili ste !";

      highlightText(temp);
      computerPoints++;
      kompjuter.textContent = computerPoints;
    } else if (random == 1) {
      temp.textContent =
        "Vi ste izabrali kamen, kompjuter je izabrao makaze. Pobjedili ste !";

      highlightText(temp);
      playerPoints++;
      igrac.textContent = playerPoints;
    } else {
      temp.textContent = "Oboje ste izabrali kamen !";
      highlightText(temp);
    }
  }
  if (computerPoints == 3 || playerPoints == 3) {
    if (computerPoints == 3) {
      kompjuter.textContent = computerPoints;
      setTimeout(function () {
        alert("pobjedio je komp");
      }, 1);

      winsinrow = 0;
      vezanepobjede.textContent = winsinrow;
    } else {
      igrac.textContent = playerPoints;
      setTimeout(function () {
        alert("Pobjedili ste :)");
      }, 1);
      winsinrow++;
      vezanepobjede.textContent = winsinrow;
      highlightText(vezanepobjede);
    }

    playerPoints = 0;
    computerPoints = 0;
    setTimeout(function () {
      kompjuter.textContent = computerPoints;
      igrac.textContent = playerPoints;
    }, 500);
  }

  //PAPER
  else if (e.target.classList.contains("paper")) {
  
    let random = randomNumber();
    if (random == 0) {
      temp.textContent =
        "Vi ste izabrali papir, kompjuter je izabrao makaze. Izgubili ste !";
      highlightText(temp);
      computerPoints++;
      kompjuter.textContent = computerPoints;
    } else if (random == 1) {
      temp.textContent =
        "Vi ste izabrali papir, kompjuter je izabrao kamen. Pobjedili ste !";

      highlightText(temp);
      playerPoints++;
      igrac.textContent = playerPoints;
    } else {
      temp.textContent = "Oboje ste izabrali papir!";
      highlightText(temp);
    }
  }
  if (computerPoints == 3 || playerPoints == 3) {
    if (computerPoints == 3) {
      kompjuter.textContent = computerPoints;
      setTimeout(function () {
        alert("Pobjedio je komp :(");
      }, 1);

      winsinrow = 0;
      vezanepobjede.textContent = winsinrow;
    } else {
      igrac.textContent = playerPoints;
      setTimeout(function () {
        alert("Pobjedili ste :)");
      }, 1);

      winsinrow++;
      vezanepobjede.textContent = winsinrow;
      highlightText(vezanepobjede);
    }
    computerPoints = 0;
    playerPoints = 0;
    setTimeout(function () {
      kompjuter.textContent = computerPoints;
      igrac.textContent = playerPoints;
    }, 500);
  }

  //MAKAZE

  if (e.target.classList.contains("scissors")) {
    
    let random = randomNumber();
    if (random == 0) {
      temp.textContent =
        "Vi ste izabrali makaze, kompjuter je izabrao kamen. Izgubili ste !";
      highlightText(temp);
      computerPoints++;
      kompjuter.textContent = computerPoints;
    } else if (random == 1) {
      temp.textContent =
        "Vi ste izabrali makaze, kompjuter je izabrao papir. Pobjedili ste !";
      highlightText(temp);
      playerPoints++;
      igrac.textContent = playerPoints;
    } else {
      temp.textContent = "Oboje ste izabrali makaze !";
      highlightText(temp);
    }
  }
  if (computerPoints == 3 || playerPoints == 3) {
    if (computerPoints == 3) {
      kompjuter.textContent = computerPoints;
      setTimeout(function () {
        alert("Izgubili  ste :(");
      }, 1);

      winsinrow = 0;
      vezanepobjede.textContent = winsinrow;
    } else {
      igrac.textContent = playerPoints;
      setTimeout(function () {
        alert("Pobjedili ste :)");
      }, 1);

      winsinrow++;
      vezanepobjede.textContent = winsinrow;
      highlightText(vezanepobjede);
    }
    computerPoints = 0;
    playerPoints = 0;
    setTimeout(function () {
      kompjuter.textContent = computerPoints;
      igrac.textContent = playerPoints;
    }, 300);
  }
}
