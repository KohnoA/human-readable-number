module.exports = function toReadable (number) {
  const textBeforeTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  let result = '';

  for(let i = 0; i <= number; i++) {
    if(number > 20) {
      result = `${textBeforeTwenty[20]}${toReadable(textBeforeTwenty[i])}`;
    } else {
      result = textBeforeTwenty[i];
    }
  }

  return result;
}


console.log(module.exports(21));