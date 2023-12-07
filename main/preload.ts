import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron'

/**
 * handler for basic IPC events
 */
const handler = {
  send(channel: string, value: unknown) {
    ipcRenderer.send(channel, value)
  },
  on(channel: string, callback: (...args: unknown[]) => void) {
    const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
      callback(...args)
    ipcRenderer.on(channel, subscription)

    return () => {
      ipcRenderer.removeListener(channel, subscription)
    }
  },
  
}
contextBridge.exposeInMainWorld('ipc', handler)

/**
 * handkler for survey question information and image URLs
 */
contextBridge.exposeInMainWorld('questionsAPI', {
  setqresponse: (args) => {
    ipcRenderer.invoke('setquestion', args)
    return "hi";
  },
  getqs: () => ipcRenderer.invoke('getqvals'),
  getresult: () => ipcRenderer.invoke('submit')
});

export type IpcHandler = typeof handler

