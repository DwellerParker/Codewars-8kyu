// Given an array of integers your solution should find the smallest integer. 


class SmallestIntegerFinder {
    findSmallestInt(args) {
      const result = args.reduce((acc,cur) => {
      if(acc > cur){
        acc = cur
      }
      return acc
    })
    return result
    }
  }