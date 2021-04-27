// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let like = document.getElementsByClassName('like-glyph');
let error = document.getElementById('modal');
let modalMessage = document.getElementById('modal-message');
for (let i=0;i< like.length;i++){
  like[0].addEventListener('click', function(e) {
    mimicServerCall()
    .then(()=>{})
    .catch(()=>{
      error.classList.remove('hidden');
      modalMessage.insertAdjacentHTML('beforeend',`${error.message}`);
      modalMessage.classList.add('hidden');
      let timeoutID = setTimeout(modalMessage.classList.remove('hidden'),3000);
      modalMessage.classList.remove('hidden');
    })
  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
