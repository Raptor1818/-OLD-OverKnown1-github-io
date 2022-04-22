var app = document.getElementById('app');


var typewriter = new Typewriter(app, {
    delay: 95,
});
      
  typewriter
    .pauseFor(800)
    .typeString("Raptor's lil lounge")
    .pauseFor(170)
    .typeString('.')
    .pauseFor(1650)
    .deleteChars(1)
    .pauseFor(145)
    .typeString(',')
    .pauseFor(550)
    .typeString(" also website for self learning coding")
    .pauseFor(170)
    .typeString('.')
    .pauseFor(7500)
    .deleteChars(1)
    .pauseFor(145)
    .typeString(" ")
    .pauseFor(300)
    .typeString(":")
    .pauseFor(350)
    .typeString(")")
    .pauseFor(260)
    .typeString(".")
    .start();