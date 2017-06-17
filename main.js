// ignores other transitions aside from 'transform' and removes the 'playing' class
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //skip if not a transform transition
  this.classList.remove('playing');
}

// plays sound and adds 'playing' class to highlight the corresponding key pressed
function playSound(e) {
  // used ES6 template strings to dynamically grab the audio element
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log("Audio Element = ", audio);

  // used ES6 template string to dynamically grab the element with the class 'key'
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log("Element with class 'key' = ", key);

  if (!audio) return; // if no audio element found, stop the function from running
  audio.currentTime = 0; // rewind to the start of the sound
  audio.play();

  key.classList.add('playing')
}

// grabs all elements with key class which is an array
const keys = document.querySelectorAll('.key');

// the transitionend event occurs when a CSS transition has completed
// each key gets an eventListener added to it (which is 'transitionend') and when the transition is ending, it will be removed
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition)
})

// listens for user to press a key
window.addEventListener('keydown', playSound);
