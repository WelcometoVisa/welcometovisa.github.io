
function enviarWhatsApp() {
    const nombre = document.getElementById('nombre').value;
    const medio = document.getElementById('medio').value;
    const mensaje = `Hola, soy ${nombre} y quiero ser contactado por ${medio}`;
    window.open(`https://wa.me/573508840251?text=${encodeURIComponent(mensaje)}`, '_blank');
}
