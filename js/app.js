document.addEventListener("DOMContentLoaded", () => {
    actualizarTotal();
});

function actualizarTotal() {
    const filas = document.querySelectorAll("tbody tr");
    const total = filas.length;

    document.getElementById("total-empleados").textContent =
        `Total de personal activo: ${total} empleados`;
}