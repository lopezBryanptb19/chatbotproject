function askQuestion(){
  var question = document.getElementById("input").value;
  var giveresponse = responses[question]
document.getElementById("chat-area").innerHTML += giveresponse +  " " + "<br>";
}

var responses = {
  "How are you?" : "Very good. How about you?",
  "What's your name?" : "Me llamo Juan",
  "How old are you?" : "I am a 77 years old.",
  "What team do you support?" : "CHIVAS xD!!"
}
