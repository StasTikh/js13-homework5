const marketURL = "https://fakestoreapi.com/products";

let stuff = await fetch(marketURL);
stuff = await stuff.json();
console.log(stuff);

function drawMarketPlace() {
    marketPlace.innerHTML = stuff.map(item => `
                            <div class="card m-2 shadow p-3 mb-5 bg-white rounded">
                                    <img src="${item.image}" class="mx-auto" title="${item.title}">
                                <div class="card-body">
                                    <h5 class="card-title text-center">${item.title}</h5>
                                    <p class="card-text descript">${item.description}</p>
                                    <h4 class="text-end">$${item.price}</h4>
                                </div>
                            </div>
    `).join("");
};

drawMarketPlace();

lowerP.addEventListener("click", function(){
    stuff.sort((a,b) => a.price > b.price ? 1 : -1);
    drawMarketPlace();
});

higherP.addEventListener("click", function(){
    stuff.sort((a,b) => a.price < b.price ? 1 : -1);
    drawMarketPlace();
});

lowerN.addEventListener("click", function(){
    stuff.sort((a,b) => a.title > b.title ? -1 : 1);
    drawMarketPlace();
    console.log(stuff);
});

higherN.addEventListener("click", function(){
    stuff.sort((a,b) => a.title > b.title ? 1 : -1);
    drawMarketPlace();
    console.log(stuff);
});