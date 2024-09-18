import { treeAudio } from "./sounds.js"
const tree = document.getElementById('tree')
const paths = document.querySelectorAll('path')

tree.addEventListener('click', function(){  
  
  if(paths[0].getAttribute('fill') === '#E1E1E6'){
    
    paths[0].setAttribute('fill', "#02799D")
    paths[1].setAttribute('fill', "white")

    treeAudio.play()
  } else{
    paths[0].setAttribute('fill', "#E1E1E6")
    paths[1].setAttribute('fill', "#323238")
    
    treeAudio.pause()
  }
})