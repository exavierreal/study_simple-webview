# OBJETIVOS
Criar um navegador flutuante que sobreponha todas as aplicação e
abra as ferramentas do desenvolvedor utilizando Electron.

### OBSERVAÇÕES
Este é um projeto criado inicialmente pelo Mayk Brito da Rocketseat,
o conteúdo aqui é apenas um código de estudo para conhecer mais sobre
a ferramenta Electron.JS.

## PROCESSOS
* Inicie o projeto e instale o Electron.
```
    npm init
    npm install electron
```

* Utilize o modelo inicial da documentação do Electron.
```
    git clone https://github.com/electron/electron-quick-start
```

* Retire as ferramentas do navegador que vem como padrão.

```
    // Open the DevTools.
    win.webContents.openDevTools();
```

* Esconda a titleBar e defina o Always On Top pra fazer ela sobrepor
    todas as aplicações.

```
    const janela = new BrowserWindow({
        [...]
        titleBarStyle: 'hidden',
        alwaysOnTop: 'true',
        [...]
    });
```

* Defina a variável win/janela como var/let pra criar a função
      de toggle para as ferramentas do desenvolvedor.
```
    let janela;

    function createWindow() {
        janela = new BrowserWindow({
            [...]
        });
    }
```
```
    function toggleDevTools() {
        janela.webContents.toggleDevTools();
    }
```

* Crie uma função para criar os atalhos da aplicação na hora
      da inicialização da aplicação.
```
    function createShortcuts() {
        globalShortcut.register('CmdOrCtrl+J')
    }
```
```
    app.whenReady()
    .then(createWindow)
    .then(createShortcuts);

```

* Execute a aplicação.
```
    npm start
```