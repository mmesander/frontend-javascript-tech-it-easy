//--------------------Opdracht 4--------------------//
//-------------Opdracht 4a-------------//
function getTvName(product) {
    return `${product.brand} ${product.type} - ${product.name}`
}

console.log(getTvName(inventory[0]));
console.log(getTvName(inventory[1]));
//-------------Opdracht 4b-------------//

function getTvPrice(product) {
    return `€${product.price},-`
}

console.log(getTvPrice(inventory[0]));
console.log(getTvPrice(inventory[7]));

//-------------Opdracht 4c-------------//

function getTvSizes(product) {
    let output = "";

    if (product.availableSizes.length === 1) {
        output += product.availableSizes[0] + " inches (" + (product.availableSizes[0] * 2.54) + "cm)";
    } else {
        for (let i = 0; i < product.availableSizes.length; i++) {
            output += product.availableSizes[i] + " inches (" + (product.availableSizes[i] * 2.54) + "cm)";

            if (i !== product.availableSizes.length - 1 ) {
                output += " | ";
            }
        }
    }
    return output;
}

console.log(getTvSizes(inventory[0]));
console.log(getTvSizes(inventory[1]));
console.log(getTvSizes(inventory[2]));
console.log(getTvSizes(inventory[3]));

//-------------Opdracht 4d-------------//

function getTvInformation (product) {
    return `${getTvName(product)}\n${getTvPrice(product)}\n${getTvSizes(product)}`;
}

console.log(getTvInformation(inventory[0]));
console.log(getTvInformation(inventory[1]));
console.log(getTvInformation(inventory[3]));
//-------------Opdracht 4e-------------//
