//--------------------Opdracht 2--------------------//
//-------------Opdracht 2a-------------//

let soldTvs = 0;

for (let i = 0; i < inventory.length; i++) {
    soldTvs = soldTvs + inventory[i].sold;
}

console.log(soldTvs);

//-------------Opdracht 2b-------------//

const dashboardSold = document.getElementById('products-sold');
dashboardSold.textContent = soldTvs;

//-------------Opdracht 2c-------------//

let boughtTvs = 0;

for (let i = 0; i < inventory.length; i++) {
    boughtTvs = boughtTvs + inventory[i].originalStock;
}

console.log(boughtTvs)
//-------------Opdracht 2d-------------//

//-------------Opdracht 2e-------------//
