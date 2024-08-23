// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    let num = n.toString().split("").reverse().map(x => Number(x))
    return num
  }