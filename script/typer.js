var app = document.getElementById('app');


var typewriter = new Typewriter(app, {
    delay: 75,
});
      
  typewriter
    .pauseFor(800)
    .typeString("Raptor's lil lounge, also website for coding self training.")
    .start();