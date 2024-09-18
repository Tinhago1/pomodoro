import {cafeteriaAudio} from './sounds.js'
const cafeteria  = document.getElementById ("cafeteria")
const paths = cafeteria.querySelectorAll("path")
 


cafeteria.addEventListener("click", function(){
  
  if (paths[0].getAttribute("fill") === "#E1E1E6") {
    
    paths[0].setAttribute("fill", "#02799D") 
    paths[1].setAttribute("fill", "white")  

    cafeteriaAudio.play()
  } else {

    paths[0].setAttribute("fill", "#E1E1E6") 
    paths[1].setAttribute("fill", "#323238") 


    cafeteriaAudio.pause()

  }
})