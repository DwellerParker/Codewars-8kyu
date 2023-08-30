// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .



function addLength(str) {
    let arr = str.split(' ').map(x => `${x} ${x.length}`);
    return arr
   }
