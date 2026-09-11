document.addEventListener("DOMContentLoaded", function () {

    console.log("Aplicação ONG iniciada com sucesso!");

    const formulario = document.querySelector("form");

    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();

            if (formulario.checkValidity()) {
                abrirModal();
            } else {
                formulario.reportValidity();
            }
        });
    }

    document.addEventListener("keydown", function (event) {
        const modal = document.getElementById("modal");

        if (event.key === "Escape" && modal?.classList.contains("ativo")) {
            fecharModal();
        }
    });

});

window.abrirModal = function () {

    const modal = document.getElementById("modal");

    if (modal) {
        modal.classList.add("ativo");
        modal.setAttribute("aria-hidden", "false");

        const botaoFechar = document.getElementById("fechar-modal");

        if (botaoFechar) {
            botaoFechar.focus();
        }
    }
};

window.fecharModal = function () {

    const modal = document.getElementById("modal");

    if (modal) {
        modal.classList.remove("ativo");
        modal.setAttribute("aria-hidden", "true");
    }
};