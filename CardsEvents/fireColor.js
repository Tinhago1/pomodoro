import { fireAudio } from "./sounds.js"
const fire = document.getElementById('fire')
const paths = fire.querySelectorAll('path')

fire.addEventListener('click', function(){
  
  if(paths[0].getAttribute('fill') === '#E1E1E6'){
    paths[0].setAttribute('fill', '#02799D')
    paths[1].setAttribute('fill', '#FFF')

    fireAudio.play()
  }else{
    paths[0].setAttribute('fill', '#E1E1E6')
    paths[1].setAttribute('fill', '#323238')

    fireAudio.pause()
  }
})