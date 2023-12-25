const pageInit = () => {
  // 0 - 22
  let randomWordIndex = Math.floor(Math.random() * 23);
  let wordObject = words[randomWordIndex];
  realWord = wordObject.word;
  lblWord.innerHTML = getRandomLetter(wordObject.word);
  lblHint.innerHTML = wordObject.hint;
  startTimer();
};

const changeTimer = () => {
  let timerValue = parseInt(lblTimer.innerHTML);
  if (timerValue <= 0) {
    clearInterval(myInterval);
    pageInit();
  } else lblTimer.innerHTML = timerValue - 1;
};

const startTimer = () => {
  lblTimer.innerHTML = 100;
  myInterval = setInterval(changeTimer, 1000);
};

const comparingWords = () => {
  if (inputWord.value.trim().toUpperCase() === realWord.toUpperCase()){
    alert("Congratulation");
    pageInit();
  }else
  alert("Try Again");
}


const getRandomLetter = (word) => {
  let letters = word.split("");
  for (i=0; i<letters.length; i++){
    let randomIndex = Math.floor(Math.random() * letters.length);
    // let temp = letters[i];
    // letters[i] = letters[randomIndex];
    // letters[randomIndex] = temp;
    [letters[i],letters[randomIndex]] = [letters[randomIndex],letters[i]]

  }
  return letters.join("") ;
}


window.addEventListener("DOMContentLoaded", () => {
  lblWord = document.getElementById("scrambleWord");
  lblHint = document.getElementById("hint");
  lblTimer = document.getElementById("timer");
  refreshBtn = document.getElementById("refreshWord");
  inputWord = document.getElementById("inputWord");
  checkBtn = document.getElementById("checkWord");
  pageInit();

  refreshBtn.addEventListener("click",() =>{
    clearInterval(myInterval);
    pageInit();
    inputWord.value = "";
  });

  checkBtn.addEventListener("click", () => {
   comparingWords();
   inputWord.value = "";
  }); 


});


