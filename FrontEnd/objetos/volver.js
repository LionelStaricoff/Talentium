function volverUltimaPagina() {
    var ultimaPaginaVisitada = localStorage.getItem('ultimaPaginaVisitada');
    
    if (ultimaPaginaVisitada !== null) {
        window.location.href = ultimaPaginaVisitada;
    } else {
        window.location.href = 'index.html';
    }
}
