
const buttons = document.querySelectorAll(".btn")
const display = document.getElementById("display")

function addValue(value) {

    if(value === "AC" || value === "⌫" || value === "=") 
        return;

    let current = display.value;

    // avoids starting with / and *
    if(current === "" && (value === "/" || value === "*"))
        return;

    // avoid .. decimal
    if(value === "." && current[current.length - 1] == ".") {
        return;
    }

    // avoids double operator ++ +* etc (but not working rn)
    const operators = ["+","-","*","/"];

    if(operators.includes(value) && operators.includes(current.slice(-1)))
        return;

    display.value += value;
};

buttons.forEach((button) => {

    button.addEventListener("click", () => {
    const value = button.textContent; 

    addValue(value);

    });

});

function Calculate(){
    display.value = eval(display.value);
};

function Clear() {
    display.value = "";
}

function Backspace() {
    display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown", (event) => {
    const key = event.key;

    const validKey = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "."];

    if(validKey.includes(key)){
        addValue(key);
    }

    else if(key === "Enter") {
        Calculate();
    }

    else if(key === "Backspace") {
        Backspace();
    }

    else if(key === "Escape") {
        Clear();
    }
});