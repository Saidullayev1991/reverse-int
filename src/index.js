module.exports = function reverse (n) {
 
  if(n<0){
  let str = String(n);
  let str1 = str.split('');
  str1.shift();
  let newNum = str1.reverse().join('');
  return (newNum/1);
  } else {
    let str3 = String(n);
    let str2 = str3.split('').reverse().join('');
    let num = (str2/1);
    return(num);
  }
}
