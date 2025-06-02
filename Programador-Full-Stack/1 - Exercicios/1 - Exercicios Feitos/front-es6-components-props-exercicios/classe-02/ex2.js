const car = {
  name: 'Corolla',
  year: 2022,
  color: 'white'
}

const ownerContact = {
  phoneContact: "(00) 00000-0000",
  owner: 'Daniel',
}

const {name:carName,year,color}= car;
const {phoneContact,owner}= ownerContact;

const infosForSale = {
  ...car,
  phoneContact: phoneContact,
  owner: owner + ' Lopes',
  price: 120000,
  onlySale: true
}

console.log(infosForSale);