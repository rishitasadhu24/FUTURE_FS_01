// TYPING EFFECT

const text = [

  "Frontend Developer",
  "Python Learner",
  "UI Designer",
  "Future Software Engineer"

];

let speed = 100;

let textIndex = 0;

let charIndex = 0;

const typing = document.querySelector(".typing");

function typeWord(){

  if(charIndex < text[textIndex].length){

    typing.textContent +=
    text[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeWord, speed);

  }

  else{

    setTimeout(eraseWord, 1500);

  }

}

function eraseWord(){

  if(charIndex > 0){

    typing.textContent =
    text[textIndex].substring(0, charIndex-1);

    charIndex--;

    setTimeout(eraseWord, 50);

  }

  else{

    textIndex++;

    if(textIndex >= text.length){

      textIndex = 0;

    }

    setTimeout(typeWord, 300);

  }

}

document.addEventListener("DOMContentLoaded",()=>{

  if(text.length){

    setTimeout(typeWord,500);

  }

});
