// Assignment 11: Write a Javascript program to create a Rating Component.

function showStars(parent, count) {
    let parentContainer = document.getElementById(parent);
    for (let i = 1; i <= count; i++) {
        let starElement = document.createElement("span");
        starElement.classList.add("material-icons-outlined", "star-ele");
        starElement.innerText = "star_border";
        starElement.dataset.starvalue = i;
        parentContainer.appendChild(starElement);
    }
  
    parentContainer.addEventListener("click", (event) => {
        let starValue = event.target.dataset.starvalue;
        let arr = document.querySelectorAll(".star-ele");
            for (let i = 0; i < count; i++) {
            if (i < starValue) {
                arr[i].classList.add("star");
            } else {
                arr[i].classList.remove("star");
            }
            }
    });
}
showStars("app", 5);