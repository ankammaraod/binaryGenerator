/* eslint-disable no-magic-numbers */
const fs = require('fs');
const lib = require('../tools/generateTags');

const { generatePageClosure } = lib;
const { generateTag } = lib;

const generateHtmlFor = (digit) => {
  const digitInWords = +digit ? 'one' : 'zero';
  return generateTag('div', '', 'class', digitInWords);
};

const generatePage = function (binaryDigits, userInput) {
  const htmlForDigits = binaryDigits.map(generateHtmlFor).join('');
  const number = generateTag('div', userInput + ' = ', 'class', 'number');
  const boxAsClosure = generateTag('div', number + htmlForDigits,
    'class', 'box');
  return generatePageClosure(boxAsClosure);
};

const main = function () {
  const userInput = +process.argv[2];

  const relevantBinaryCode = userInput.toString(2).split('');

  const html = generatePage(relevantBinaryCode, userInput);

  fs.writeFileSync('./index.html', html, 'utf-8');
};
main();
