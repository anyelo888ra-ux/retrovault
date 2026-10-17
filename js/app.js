let dosInstance = null;

function launchGame(gameKey) {
    const catalog = document.getElementById('catalog');
    const emulatorScreen = document.getElementById('emulator-screen');
    const gameTitle = document.getElementById('game-title');
    const dosCanvas = document.getElementById('dos-canvas');

    catalog.classList.add('hidden');
    emulatorScreen.classList.remove('hidden');

    if (gameKey === 'doom') {
        gameTitle.innerText = "Ejecutando: DOOM (1993)";
        
        // Inicializar JS-DOS v8 para cargar la demo oficial de DOOM
        dosCanvas.innerHTML = '';
        Dos(dosCanvas, {
            url: "https://cdn.dos.zone/custom/dos/doom.jsdos",
        }).then((dos) => {
            dosInstance = dos;
        });
    } else if (gameKey === 'pacman') {
        gameTitle.innerText = "Ejecutando: PAC-MAN";
        dosCanvas.innerHTML = '<div style="color:white; padding:2rem; text-align:center;">Cargando juego de Pac-Man...</div>';
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
