//--------------------Opdracht 3--------------------//
//-------------Opdracht 3a-------------//
const productBrands = inventory.map((product) => {
    return product.brand;
});

console.log(productBrands);

const brandList = document.getElementById('productBrandsList');

const listOutput = productBrands.map((brand) => {
    brandList.innerHTML += `
    <li>${brand}</li>
    `
})

//-------------Opdracht 3b-------------//

function brandsFunction(product) {
    let productBrands2 = [];

    inventory.map((product) => {
        productBrands2.push(product.brand);
    })
    return productBrands2;
}

const brandList2 = document.getElementById('productBrandsList2');
const listOutput2 = brandsFunction().map((brand) => {
    brandList2.innerHTML += `<li>${brand}</li>`
})

