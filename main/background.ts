import path from 'path'
import { IpcMainEvent, dialog, app, ipcMain } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'
const fs = require('fs');

let axis = ["money", "space", "time", "experience"]
const isProd = process.env.NODE_ENV === 'production'

let pets = JSON.parse(fs.readFileSync("main/resources/pets.json"))
for (let petkey in pets) {
  let pet = pets[petkey]
  pet["vector"] = [pet[axis[0]], pet[axis[1]], pet[axis[2]], pet[axis[3]]]
}

let questions = {}
const vectorDistance = (x, y) => Math.sqrt(x.reduce((acc, val, i) => acc + Math.pow(val - y[i], 2), 0));

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

; (async () => {
  await app.whenReady()

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  if (isProd) {
    await mainWindow.loadURL('app://./home')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/home`)
    mainWindow.webContents.openDevTools()
  }


})()

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})

ipcMain.handle("setquestion", (event, args) => {
  const { q, val } = args
  if(q == "1") {
    questions = {}
  }
  questions[q] = val
})

ipcMain.handle('getqvals', () => {
  return JSON.stringify(questions)
})

ipcMain.handle('submit', () => {
  let result = [0, 0, 0, 0]
  let cardinals = [0, 0, 0, 0]
  for (let qid in questions) {
    let q = questions[qid]
    let a = axis.indexOf(q[0])
    result[a] += Number(q[1])
    cardinals[a] += 1
  }

  for (let i in result) {
    result[i] /= cardinals[i]
  }
  let minkey = "Dog";
  let min = vectorDistance(pets[minkey]["vector"], result)
  for (let p in pets) {
    const d = vectorDistance(pets[p]["vector"], result)
    if (d < min) {
      min = d;
      minkey = p;
    }
  }
  return JSON.stringify({name: minkey, desc: pets[minkey]["description"], img: pets[minkey]["imageurl"]})
})