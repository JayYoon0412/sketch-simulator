const container = document.querySelector(".container");
for (let k=0; k<16; k++) {
    let columnBox = document.createElement("div");
    columnBox.classList.add("columnBox");
    container.appendChild(columnBox);
    for (let i=0; i<16; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        columnBox.appendChild(box);
    }
}
