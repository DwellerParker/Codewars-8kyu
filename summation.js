// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

let summation = function (num) {
    let counter = 0;
    for(let i = 1; i <= num; i++){
      counter += i
    }
    return counter 
  }

const drawBoard = () => {
  let styleString = '';
  if( i < 3){
    styleString += 'border-bottom: 3px solid var(--text)'
  }
  if (i % 3 === 0){
    styleString += 'border-right: 3px solid var(--text)'
  }
  if(i % 3 === 2){
    styleString += 'border-left: 3px solid var(--text)'
  }
  if(i > 5){
    styleString += 'border-top:3px solid var(--text)'
  }
  box.style = styleString;
  box.addEventListener('click',boxClicked)
}

