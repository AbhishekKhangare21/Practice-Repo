// How can we insert an element at a specific index in an Array?

const invoiceNumbers = [12, 45, 54, 67, 2, 56, 88];

const ele = 389;
const insertAt = 2;

const newInvoiceNumbers = [
  ...invoiceNumbers.slice(0, insertAt),
  ele,
  ...invoiceNumbers.slice(insertAt),
];
console.log(newInvoiceNumbers);
