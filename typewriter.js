const sentence = "hello there from lighthouse labs";


  
  
  



const animatedSentence = function(sentence) {
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 100;
  }
  setTimeout(() => {console.log()}, delay)
};




animatedSentence(sentence);