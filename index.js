function writeCards(John, Birthday) {
    let thankYouMessages = [];
    for (let i = 0; i < John.length; i++) {
      thankYouMessages.push(`Thank you, ${John[i]}, for the wonderful ${Birthday} gift!`);
    }
    return thankYouMessages;
  }
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }