//--------------------Opdracht 1--------------------//
//-------------Opdracht 1a-------------//

const tvTypeNames = inventory.map((product)=>{
    return product.name;
})

console.log(tvTypeNames)

//-------------Opdracht 1b-------------//

//Er moet een filter gemaakt worden voor de tv's
//originalstock - sold === 0 die returnen

const soldOut = inventory.filter((product)=>{
    return (product.originalStock - product.sold) === 0;
})

console.log(soldOut)

