const say = require('say')



// Use default system voice and speed

say.speak('Hello!')


// Stop the text currently being spoken

say.stop()


// More complex example (with an OS X voice) and slow speed

 say.speak('"Hello? Alex', 0.5)

say.stop();

var sorryDave = function() {

say.speak("I'm sorry, Dave")

}


setTimeout(sorryDave, 500)