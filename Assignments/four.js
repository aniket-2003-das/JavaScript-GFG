// Write a JavaScript program to add items to favorites from the drop down list. 
// If you select any item that should be added to the list and be displayed on the ui, 
// if you click on the added item again then it should not add the same item again.


let brands = ["Nike", "Adidas", "Puma", "Fila", "All Star"];
let selectedBrand = document.getElementById("select-brand");
let showBrands = document.getElementById("show-favourite");
let addButton = document.getElementById("btn-add");
let favouriteBrands = [];
        
for (let brand of brands) {
    let optionElement = document.createElement("option");
    optionElement.setAttribute("value", brand);
    optionElement.innerText = brand;
    selectedBrand.appendChild(optionElement);
}

selectedBrand.addEventListener("change", () => {
    addButton.addEventListener("click", () => {
    let brand = selectedBrand.value;
    let isBrandAdded = favouriteBrands?.some(
        (favourite) => favourite === brand
    );
    favouriteBrands = !isBrandAdded
        ? [...favouriteBrands, brand]
        : favouriteBrands;
    displaySelectedBrands(favouriteBrands);
    });
});

function displaySelectedBrands(favouriteBrands) {
    showBrands.innerHTML = "";
    for (let favBrand of favouriteBrands) {
    let listElement = document.createElement("li");
    listElement.innerText = favBrand;
    showBrands.appendChild(listElement);
    }
}