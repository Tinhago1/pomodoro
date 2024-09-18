import { timerControls } from './elements.js'  //usado para registrar todos elementos dentro da div timerControls do html
import * as actions from './actions.js'

export function registerControls(){
 timerControls.addEventListener('click', (event) => { //timerControls é a div onde está o Timer e os botões, dessa forma passamos o event como parametro para obter informações sobre onde o usuário está clicando
  let action = event.target.dataset.action

  if(typeof actions[action] != 'function'){
    return    
  }
  
  actions[action]()
  
})

}
