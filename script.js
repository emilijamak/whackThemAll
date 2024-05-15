const cells = document.querySelectorAll('.cell')
const moneyDisplay = document.querySelector('h1')
let money = 0
appendPurple()

function appendPurple() {

    let rndTime = Math.floor(Math.random() * 1 + 1)
    let rnd = Math.floor(Math.random() * cells.length)
    console.log(rnd)
    cells.forEach((cell, index) => {
        if (index === rnd) {
            const active = document.createElement("div");
            active.classList.add("active");
            cell.appendChild(active);
        }
    });

    setTimeout(() => {
        console.log('works')
        cells.forEach((cell, index) => {
            if (cell.querySelector(".active")) {
                cell.removeChild(cell.querySelector(".active"));
                console.log('removed');
            }
        });
        appendPurple()
    }, rndTime * 1000)


}


cells.forEach((cell, index) => {
    cell.onclick = () => {
        if (cell.querySelector(".active")) {
            money += 19
            moneyDisplay.innerHTML = `<h1>Money: ${money}</h1>`
            cell.removeChild(cell.querySelector(".active"));
        }
    }
})
