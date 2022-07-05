module.exports = function toReadable (number) {
  const numBeforeNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const numBeforeNinetyNine = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty','ninety'];

  const numBeforeNineHundredNinetyNine = ['hundred'];

  let result = '';

  if(number < 20) {
    for(let i = 0; i <= number; i++) {
      result = numBeforeNineteen[i];
    }


  } else if(number < 100) {
    current = Math.trunc(number / 10);
    for(let i = 0; i <= current; i++) {
      if(number % 10 === 0) {
        result = numBeforeNinetyNine[i - 2];
      } else {
        result = numBeforeNinetyNine[i - 2] + ' one';
      }
    }


  } else if(number < 1000) {
    for(let i = 0; i <= number; i++) {
      result = numBeforeNineHundredNinetyNine[0];
    }


  } else {
    return 'WARNING: Incorrect number entered';
  }

  return result;
}


console.log(module.exports(30));