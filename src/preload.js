// 预加载
const {
    contextBridge,
    ipcRenderer
} = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.send('set-title', title)
})