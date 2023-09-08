function getCharacters(callback) {
    fetch("http://localhost:5000/canciones")
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            return response.json();
        })
        .then(data => {
            callback(data);
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
        });
}

getCharacters(datos => {
    datos.forEach(cancion => {
        const cards = document.createRange().createContextualFragment(`

    
    <ul class="list-group">
        <li class="list-group-item d-flex justify-content-start align-items-center">
            <img src="../IMG/la ultima copa - los panchos.jpg" class="album-image me-2" alt="Álbum de la Canción 1">
            <div>
                <h6 class="mb-0">${cancion.titulo} </h6>
                <small class="text-muted">Duración:${cancion.minutos} </small><br>
                <small class="text-muted">Intérprete: ${cancion.interprete}</small>
            </div>

        <!-- Repite estos elementos para cada canción -->
    </ul>
</div>
        
        `  
        );
        const main = document.querySelector("main");
        main.appendChild(cards);
    });
});
