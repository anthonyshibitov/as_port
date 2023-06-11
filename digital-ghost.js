console.log("linked!");

const alpha = "!@#$%^&*()_+-={}|:\"<>?[]\\;',./`~";

function printText(string, id, delay){
  const elementId = document.getElementById(id);
  if(!elementId) {
    console.log("element not found :(");
    return;
  }

  if(string.length == 0){
    console.log("empty string");
  }

  elementId.innerHTML = "";

  for(let i = 0; i <= string.length; i++){
    setTimeout(() => {
      let trailingChar = document.createElement('span');
      trailingChar.classList.add("black");

      for(let j = 0; j < 5; j++){
        setTimeout(() => {
          elementId.appendChild(trailingChar);
          // trailingChar.scrollTo(); // remove
          if(i != string.length) {
            if(j == 4){
              trailingChar.innerHTML = string.split('')[i];
              return;
            }
            let random = alpha[Math.floor(Math.random() * alpha.length)];
            trailingChar.innerHTML = random;
          } else {
          }
        }, j * (delay / 5))
      }
      if(i == string.length - 1){
        trailingChar.classList.add("black-final");
      }
    }, delay * i)
  }
}

setTimeout(() => {
  printText("2023 portfolio.", "hero", 100);
}, 1000);

setTimeout(() => {
  printText("• frontend design & backend development.", "text", 50);
}, 3000)

setTimeout(() => {
  printText("• javascript, three.js, gsap.", "text-2", 50);
}, 5000)

setTimeout(() => {
  printText("• postgresql, express, node.", "text-3", 50);
}, 6500)