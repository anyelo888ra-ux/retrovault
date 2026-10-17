let dosInstance = null;

function launchGame(gameKey) {
    const catalog = document.getElementById('catalog');
    const emulatorScreen = document.getElementById('emulator-screen');
    const gameTitle = document.getElementById('game-title');
    const dosCanvas = document.getElementById('dos-canvas');

    catalog.classList.add('hidden');
    emulatorScreen.classList.remove('hidden');

    // Limpiar pantalla anterior
    dosCanvas.innerHTML = '';

    if (gameKey === 'doom') {
        gameTitle.innerText = "Ejecutando: DOOM (1993)";
        
        // Cargar DOOM desde la carpeta local del repositorio usando JS-DOS v8
        Dos(dosCanvas, {
            url: "games/doom/doom.jsdos",
        }).then((dos) => {
            dosInstance = dos;
        });
    } else if (gameKey === 'pacman') {
        gameTitle.innerText = "Ejecutando: PAC-MAN (NES)";
        
        // Mensaje y contenedor para la ROM de Pac-Man
        dosCanvas.innerHTML = '<div style="color: #00ffcc; padding: 3rem; text-align: center; font-family: monospace;">Cargando Pac-Man (NES)...<br><small>Asegúrate de que el archivo esté en /games/pacman/pacman.nes</small></div>';
        
        // Aquí puedes integrar el emulador de NES para la ROM cuando lo configures
    }
}

function closeEmulator() {
    const catalog = document.getElementById('catalog');
    const emulatorScreen = document.getElementById('emulator-screen');
    const dosCanvas = document.getElementById('dos-canvas');

    if (dosInstance) {
        // Detener la emulación activa si existe
        dosCanvas.innerHTML = '';
        dosInstance = null;
    }

    emulatorScreen.classList.add('hidden');
    catalog.classList.remove('hidden');
}
