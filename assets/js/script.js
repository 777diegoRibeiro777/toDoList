let inputBx = document.querySelector("#inputBx");
let list = document.querySelector("#list");
let buttonPlus = document.querySelector("#buttonPlus");

inputBx.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        addItem(this.value);
        this.value = "";
    }
});

const obterTexto = () => {
    addItem(document.querySelector("#inputBx").value);
    inputBx.value = "";
};

let addItem = (inputBx) => {
    // Verifica se o texto está vazio
    if (inputBx.trim() === "") {
        alert("Por favor, insira alguma informação.");
        return; // Sai da função se o texto estiver vazio
    }

    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputBx} ` + `<i></i>`;

    listItem.addEventListener("click", function () {
        this.classList.toggle("done");
    });

    listItem.querySelector("i").addEventListener("click", function () {
        listItem.remove();
    });

    list.appendChild(listItem);
};
