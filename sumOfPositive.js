// You get an array of numbers, return the sum of all of the positives ones.


function positiveSum(arr) {
    let positiveArr = arr.reduce((acc,cur) => {
      if(cur > 0){
        return acc + cur
      }
      return acc
    },0)
    return positiveArr
  }