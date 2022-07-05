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
    current2 = number.toString().slice(1);
    for(let i = 0; i <= current; i++) {
      if(number % 10 === 0) {
        result = numBeforeNinetyNine[i - 2];
      } else {
        result = `${numBeforeNinetyNine[i - 2]} ${numBeforeNineteen[current2]}`;
      }
    }


  } else if(number < 1000) {
    current3 = Math.trunc(number / 100);
    current4 = number.toString().slice(1);
    current5 = number.toString().slice(2);
    current6 = number.toString()[1];
    // current7 = number.toString().slice(1, 3);
    // console.log(current4);
    // console.log(current7);
    for(let i = 0; i <= current3; i++) {
      if(current4 === '00') {
        result = `${numBeforeNineteen[i]} ${numBeforeNineHundredNinetyNine[0]}`;
      } else if(current6 === '0') {
        result = `${numBeforeNineteen[i]} ${numBeforeNineHundredNinetyNine[0]} ${numBeforeNineteen[current5]}`;
      } else if(current6 === '1') {
        result = `${numBeforeNineteen[i]} ${numBeforeNineHundredNinetyNine[0]} ${numBeforeNineteen[current4]}`;
      } else if(current4 !== '00' && current5 === '0') {
        result = `${numBeforeNineteen[i]} ${numBeforeNineHundredNinetyNine[0]} ${numBeforeNinetyNine[current6 - 2]}`;
      } else {
        result = `${numBeforeNineteen[i]} ${numBeforeNineHundredNinetyNine[0]} ${numBeforeNinetyNine[current6 - 2]} ${numBeforeNineteen[current5]}`;
      }
    }


  } else {
    return 'WARNING: Incorrect number entered';
  }

  return result;
}


console.log(module.exports(110));

//Когда решу задачу: удалить пробелы, переназвать некоторые переменные для читаемости кода