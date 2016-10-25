$(document).ready(function (){
  console.log('js started');
  var userChoice = prompt("The letters you enter will be returned as their alphabetical index");
  $("#result").html(alphabetPosition(userChoice).join(', '));
  });

function alphabetPosition(text) {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var alphabetArray = [];
  for(var i = 0; i < text.length; i++){
    if(alphabet.indexOf(text[i]) !== -1){alphabetArray.push(alphabet.indexOf(text[i])+1)}
  }
  return(alphabetArray);
}
console.log(alphabetPosition('hello world'));
