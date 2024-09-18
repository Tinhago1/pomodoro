import { rainAudio } from "./sounds.js"
const rain = document.getElementById('rain')
const paths = rain.querySelectorAll('path')

rain.addEventListener('click', function(){    
  

  if(paths[0].getAttribute('fill') === '#E1E1E6'){

    paths[0].setAttribute('fill', '#02799D')
    paths[1].setAttribute('fill', '#FFFFFF')

    rainAudio.play()
  }else{
    paths[0].setAttribute('fill', '#E1E1E6')
    paths[1].setAttribute('fill', '#323238')

    rainAudio.pause()
    
  }
})