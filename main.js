const container = document.querySelector(".container");
const sizeButton = document.querySelector(".size");



function askUser() {
    let answer;
    sizeButton.addEventListener("click", () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        answer = Number(prompt("Enter a number to select the size for the grid:", "16"));
        if (answer <= 100) {
            setSize(answer);
        } else {
            alert("Input a valid number 1-100");
        }
    })

}

function setSize(ans) {

    for (let i = 0; i < ans; i++) {
        let column = document.createElement("div")
        column.classList.add("column");
        for (let j = 0; j < ans; j++) {
            const div = document.createElement("div");
            div.classList.add("div");
            column.appendChild(div);
            div.addEventListener("mouseenter", () => {
                div.classList.add("hover");
            })
        }
        container.appendChild(column);
    }
}

askUser();