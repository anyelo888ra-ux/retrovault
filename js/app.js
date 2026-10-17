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
        
        // Usar la CDN oficial estable de DOS.Zone para evitar errores de CORS y archivos locales
        Dos(dosCanvas, {
            url: "https://cdn.dos.zone/custom/dos/doom.jsdos",
        }).then((dos) => {
            dosInstance = dos;
        }).catch((err) => {
            console.error("Error al cargar JS-DOS:", err);
            dosCanvas.innerHTML = '<div style="color: #ff007f; padding: 2rem; text-align: center;">Error al cargar el emulador.</div>';
        });

    } else if (gameKey === 'pacman') {
        gameTitle.innerText = "Ejecutando: PAC-MAN (NES)";
        
        // Mensaje y contenedor para la ROM de Pac-Man local
        dosCanvas.innerHTML = '<div style="color: #00ffcc; padding: 3rem; text-align: center; font-family: monospace;">Cargando ROM de Pac-Man (NES)...<br><small>Archivo configurado desde /games/pacman/pacman.nes</small></div>';
    }
}

function closeEmulator() {
    const catalog = document.getElementById('catalog');
    const emulatorScreen = document.getElementById('emulator-screen');
    const dosCanvas = document.getElementById('dos-canvas');

    if (dosInstance && typeof dosInstance.stop === 'function') {
        dosInstance.stop();
    }

    dosCanvas.innerHTML = '';
    dosInstance = null;

    emulatorScreen.classList.add('hidden');
    catalog.classList.remove('hidden');
}
