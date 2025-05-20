
function enviarWhatsApp() {
    const nombre = document.getElementById('nombre').value;
    const medio = document.getElementById('medio').value;
    const mensaje = document.getElementById('mensaje').value;

    const texto = `Hola, mi nombre es ${nombre}. Deseo ser contactado por ${medio}. ${mensaje ? "Mensaje adicional: " + mensaje : ""}`;
    const url = `https://wa.me/573508840251?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
    return false;
}
