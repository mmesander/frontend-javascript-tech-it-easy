//--------------------Opdracht 1--------------------//
//-------------Opdracht 1a-------------//

const tvTypeNames = inventory.map((product) => {
    return product.name;
});

console.log(tvTypeNames);

//-------------Opdracht 1b-------------//

const soldOut = inventory.filter((product) => {
    return (product.originalStock - product.sold) === 0;
});

console.log(soldOut);

//-------------Opdracht 1c-------------//

const tvWithAmbilight = inventory.filter((product) => {
    return product.options.ambiLight === true;
});

console.log(tvWithAmbilight);

//-------------Opdracht 1d-------------//

inventory.sort((a,b) => a.price - b.price);
console.log(inventory);