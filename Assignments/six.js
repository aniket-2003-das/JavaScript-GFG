let table = document.getElementById("table");
let insertButton = document.getElementById("insert");
        
insertButton.addEventListener("click", () => {
    let row = table.insertRow(0);
    for (let i = 0; i < 3; i++) {
    let x = row.insertCell(i);
    x.innerText = `New Cell${i + 1}`;
    }
});
