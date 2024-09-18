import state from './state.js'
import * as timer from "./timer.js"

export function play(){
  timer.countdown()
}

export function stop(){
  timer.stopcountdown()
}

export function plus(){
  timer.addFiveMinutes()
}

export function minus(){
  timer.removeFiveMinutes()
}

export function reset(){
  state.isRunning = false
  timer.updateDisplay()
}

