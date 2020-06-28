const { app, BrowserWindow, globalShortcut } = require('electron');
const config = require("./config");

let janela;

function createWindow() {
    // Criando uma janela do navegador
    janela = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: 'hidden',
        alwaysOnTop: 'true',
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Carregando o index.html da aplicação
    janela.loadURL(config.url);
}

// Criação de Toggle para ferramentas do desenvolvedor
function toggleDevTools() {
    janela.webContents.toggleDevTools();
}

// Criação de atalhos dentro da aplicação
function createShortcuts() {
    globalShortcut.register('CmdOrCtrl+J')
}

/**
 * Esse método será chamado quando o Electron finalizar
 * a inicialização e estiver pronto para criar a janela do navegador.
 * Algumas APIs só poderão ser utilizadas após que esse evento ocorra.
*/
 app.whenReady()
    .then(createWindow)
    .then(createShortcuts);

// Fechar quando todas as janelas forem finalizadas
app.on('window-all-closed', () => {
    // No macOS é comum para as aplicações e as suas barras de menu
    // continuar ativa até que o usuário feche explicitamente com cmd+Q

    if(process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // No macOS é comum recriar a janela da aplicação quando
    // o ícone na dock for clicado e não houver janelas abertas
    if(BrowserWindow.getAllWindows().length === 0 ) {
        createWindow();
    }
});