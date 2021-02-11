module.exports = function toReadable (number) {
  const zero = 'zero';
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const firstTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

const partOfTheNumber = (n, part) => Math.floor(n / 10**part);

const getNumberFromArray = (array, n, part) => array[partOfTheNumber(n, part)];

const getRest = (n, part) => n % 10 ** part;

const getOnes = n => ones[n];

const getFirstTen = n => firstTen[n-10];

const getTens = n => {
    if(n>=20) return `${getNumberFromArray(tens, n, 1)} ${getOnes(getRest(n, 1))}`.trim();
    if (n>=10 && n<20) return getFirstTen(n);
    if (n<10) return getOnes(n);
} 

const getHundreds = n => n > 99 ? `${getNumberFromArray(ones, n, 2)} hundred ${getTens(getRest(n, 2))}`.trim() : getTens(n);

return number === 0 ? zero : getHundreds(number);
}
