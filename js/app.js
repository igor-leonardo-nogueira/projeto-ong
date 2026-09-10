document.addEventListener("DOMContentLoaded", function () {
    console.log("Aplicação ONG iniciada com sucesso!");
});

window.abrirModal = function () {
    document.getElementById("modal").classList.add("ativo");
};

window.fecharModal = function () {
    document.getElementById("modal").classList.remove("ativo");
};