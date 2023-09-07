function asignarTemasAleatoriamente(nombre1, nombre2) {
    // Definir una lista de temas
    const temas = ['usuario','canciones'];
  
    // Función para obtener un tema aleatorio de la lista
    function obtenerTemaAleatorio() {
      const indiceAleatorio = Math.floor(Math.random() * temas.length);
      return temas.splice(indiceAleatorio, 1)[0];
    }
  
    // Asignar temas aleatorios a cada usuario
    const usuario1 = {
      nombre: nombre1,
      tema1: obtenerTemaAleatorio(),
      tema2: obtenerTemaAleatorio(),
    };
  
    const usuario2 = {
      nombre: nombre2,
      tema1: obtenerTemaAleatorio(),
      tema2: obtenerTemaAleatorio(),
    };
  
    // Devolver los usuarios con temas asignados
    return [usuario1, usuario2];
  }
  
  // Ejemplo de uso
  const nombres = asignarTemasAleatoriamente('pedro1', 'david2');
  console.log(nombres);
  