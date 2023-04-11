//--------------------Opdracht 3--------------------//
//-------------Opdracht 3a-------------//

const productBrands = inventory.map((product) => {
    return product.brand;
});

console.log(productBrands)

const brandList = document.getElementById('productBrandsList');

const listOutput = productBrands.map((brand) => {
    brandList.innerHTML += `
    <li>${brand}</li>
    `
})

//-------------Opdracht 3b-------------//