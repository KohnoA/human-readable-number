module.exports = function toReadable (number) {
  const numBeforeNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const numBeforeNinetyNine = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty','ninety'];
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
    for(let i = 0; i <= current3; i++) {
      if(current4 === '00') {
        result = `${numBeforeNineteen[i]} hundred`;
      } else if(current6 === '0') {
        result = `${numBeforeNineteen[i]} hundred ${numBeforeNineteen[current5]}`;
      } else if(current6 === '1') {
        result = `${numBeforeNineteen[i]} hundred ${numBeforeNineteen[current4]}`;
      } else if(current4 !== '00' && current5 === '0') {
        result = `${numBeforeNineteen[i]} hundred ${numBeforeNinetyNine[current6 - 2]}`;
      } else {
        result = `${numBeforeNineteen[i]} hundred ${numBeforeNinetyNine[current6 - 2]} ${numBeforeNineteen[current5]}`;
      }
    }
  } else {
    return 'WARNING: Incorrect number entered';
  }

  return result;
}