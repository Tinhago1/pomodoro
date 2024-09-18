import state from "./state.js"
import * as el from "./elements.js"
import { reset } from "./actions.js"

let timeOutId


export function countdown(){

  clearTimeout(state.timeOutId)

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if (seconds < 0 ){
    seconds = 59
    minutes --
  }

  if(minutes < 0 ){
    reset()
    return
  }

  updateDisplay(minutes,seconds)
  state.timeOutId = setTimeout(() => countdown(), 1000)

}

export function stopcountdown(){

  if(!state.isRunning){
    clearTimeout(state.timeOutId)
    
  }

}

export function addFiveMinutes(){
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  minutes += 5

  updateDisplay(minutes,seconds)
}

export function removeFiveMinutes(){
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  minutes -= 5


  updateDisplay(minutes,seconds)
}



export function updateDisplay(minutes, seconds){
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds // "??" se o valor for null pega o valor do state.js

  el.minutes.textContent = String (minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}