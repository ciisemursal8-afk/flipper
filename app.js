    //  selectors
let btn = document.querySelector("#btn");
let color = document.querySelector(".color");
let simple = document.querySelector("#simple");
let hex = document.querySelector("#hex");


let colors = ["red", "green", "blue", "yellow", "purple", "orange"]; 

let hexValues = "0123456789ABCDEF";

let mode = "simple";

function getSimpleColor() { 

    let randomNumber = Math.floor(Math.random( ) * colors.
    length);

    return colors[randomNumber];
}

function getHexColor() {
    let hexColor = "# ";

    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 16);

        hexColor += hexValues[randomNumber];
    }

    return hexColor;
}


btn.addEventListener("click", function () {
       
    let randomColor;

    if (mode === "simple") {
        randomColor = getSimpleColor();
    } else {
        randomColor = getHexColor();
         localStorage.setItem("bacground color" , randomColor ) 
    }

    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
    localStorage.setItem("bacground color" , randomColor ) 
});


simple.addEventListener("click", function (event) {
    mode = "simple";
});

hex.addEventListener("click", function (event) {
    event.preventDefault();
    
    mode = "hex";
}); 