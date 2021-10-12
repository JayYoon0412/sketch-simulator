const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
let num = 16;
draw(num);

function draw(a) {
    for (let k=0; k<a; k++) {
        let columnBox = document.createElement("div");
        columnBox.classList.add("columnBox");
        container.appendChild(columnBox);
        columnBox.setAttribute("style", `height: ${500/num}px`);
        for (let i=0; i<a; i++) {
            let box = document.createElement("div");
            box.classList.add("box");
            columnBox.appendChild(box);
            box.setAttribute("style", `width: ${500/num}px; height: ${500/num}px`);
        }
    }
}

function pixify(e) {
    e.target.classList.add("colored");
}

function gridSet() {
    let num2 = parseInt(window.prompt("Enter grid dimension: ", ""));
    draw(num2);
}

reset.addEventListener("click", gridSet);
const boxes = Array.from(document.querySelectorAll(".box"));
boxes.forEach (box => box.addEventListener("mouseover", pixify));