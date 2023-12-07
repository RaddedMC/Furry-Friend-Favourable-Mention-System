import path from 'path'
import { IpcMainEvent, dialog, app, ipcMain } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'
const fs = require('fs');

/**
 * axis of the pet vector space
 */
let axis = ["money", "space", "time", "experience"]
const isProd = process.env.NODE_ENV === 'production'

/**
 * fetch the pets 
 * convert them to their vector form
 */
let pets = JSON.parse(fs.readFileSync("main/resources/pets.json"))
for (let petkey in pets) {
  let pet = pets[petkey]
  pet["vector"] = [pet[axis[0]], pet[axis[1]], pet[axis[2]], pet[axis[3]]]
}

/**
 * survey state variables 
 */
let completed = false;
let questions = {}
// short one liner for finding vector dist
const vectorDistance = (x, y) => Math.sqrt(x.reduce((acc, val, i) => acc + Math.pow(val - y[i], 2), 0));

/**
 * production stuff
 */
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

/**
 * IPC Handlers 
 * */ 
app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})

/**
 * set the question once its been completed
 */
ipcMain.handle("setquestion", (event, args) => {
  const { q, val } = args
  questions[q] = val
})

/**
 * handler for getting question values (esp when the back button is hit)
 */
ipcMain.handle('getqvals', () => {
  if (completed) {
    questions = {}
    completed = false
  }
  return JSON.stringify(questions)
})

/** calculate the final pet */
ipcMain.handle('submit', () => {
  completed = true;
  /**
   * first, get the average sum from the 
   * unit vector weights (each question)
   */
  let result = [0, 0, 0, 0]
  let cardinals = [0, 0, 0, 0]
  for (let qid in questions) {
    let q = questions[qid]
    let a = axis.indexOf(q[0])
    result[a] += Number(q[1])
    cardinals[a] += 1
  }

  /**
   * weighted average
   */
  for (let i in result) {
    result[i] /= cardinals[i]
  }

  /**
   * getting the closes pet vector to the survey result
   */
  let minkey = "Dog";
  let min = vectorDistance(pets[minkey]["vector"], result)
  for (let p in pets) {
    const d = vectorDistance(pets[p]["vector"], result)
    if (d < min) {
      min = d;
      minkey = p;
    }
  }
  // return details of said pet
  return JSON.stringify({ name: minkey, desc: pets[minkey]["description"], img: pets[minkey]["imageurl"] })
})