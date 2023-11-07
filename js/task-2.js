'use strict';

// Вирішення за допомогою інструкції if:

// function formatMessage(message, maxLength) {
//   const sliceMessage = message.slice(0, maxLength);
//   if (message.length <= maxLength) {
//     return message.slice();
//   } else {
//     return `${sliceMessage}...`;
//   }
// }

// Вирішення за допомогою тернарного оператора:

function formatMessage(message, maxLength) {
  const sliceMessage = message.slice(0, maxLength);
  return message.length <= maxLength ? message.slice() : `${sliceMessage}...`;
}

console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"
