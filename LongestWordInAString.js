function findLongestWord(str){
  var words = str.split(' ');
  var maxLength = 0;
  for (var i = 0; i < words.length; i++){
    if(words[i]. length > maxLength){
      maxLength = words[i].length;
    }
  }
  return maxLength;
} 

console.log(findLongestWord("my name is adeleke israel ayooluwa"));
console.log(findLongestWord("i am badass developer"));