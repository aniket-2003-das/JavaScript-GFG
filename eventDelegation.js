// Original Approach: Separate event listeners for each element. 
const customUI1 = document.createElement('ul');
for (var i = 1; i <= 10; i++) {
    const newElement = document.createElement('li');
    newElement.textContent = "This is line " + i;
    newElement.addEventListener('click', () => {
        console.log('Responding');
    });
    customUI1.appendChild(newElement);
}



// Improved Approach: Reusing the same function for each element. 
const customUI2 = document.createElement('ul');
function responding() {
    console.log('Responding');
}
for (var i = 1; i <= 10; i++) {
    const newElement = document.createElement('li');
    newElement.textContent = "This is line " + i;
    newElement.addEventListener('click', responding);
    customUI.appendChild(newElement);
}



// Optimized Approach: Single event listener for all elements.
const customUI = document.createElement('ul');
function responding() {
    console.log('Responding');
}
for (var i = 1; i <= 10; i++) {
    const newElement = document.createElement('li');
    newElement.textContent = "This is line " + i;
    customUI.appendChild(newElement);
}
customUI.addEventListener('click', responding);
