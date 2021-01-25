let red = document.querySelector('#red')
let blue = document.querySelector('#blue')
let pblue = document.querySelector('#pblue')
let pred = document.querySelector('#pred')

let Rcount = 50
let Bcount = 50
pred.addEventListener('click', start)
pblue.addEventListener('click', start)

function start() {
   pblue.hidden = true; pred.hidden = true
   function blueCounter() {
      Bcount += 5
      Rcount -= 5
      red.style.height = Rcount + 'vh'
      blue.style.height = Bcount + 'vh'
      if (Bcount >= 100) {
         blue.removeEventListener('click', blueCounter)
         red.removeEventListener('click', redCounter)
         setTimeout(() => alert('blue won'), 10)
      }
   }
   function redCounter() {
      Bcount -= 5
      Rcount += 5
      red.style.height = Rcount + 'vh'
      blue.style.height = Bcount + 'vh'
      if (Rcount >= 100) {
         blue.removeEventListener('click', blueCounter)
         red.removeEventListener('click', redCounter)
         setTimeout(() => alert('red won'), 10)
      }
   }
   red.addEventListener('click', redCounter)
   blue.addEventListener('click', blueCounter)
}

