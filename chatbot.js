function askQuestion(){
  var question = document.getElementById("input").value;
  var giveresponse = responses[question]
document.getElementById("chat-area").innerHTML += giveresponse +  " " + "<br>";
}

var responses = {
  "How are you?" : "Very very good. And you?",
  "What's your name?" : "Me llamo Felipe",
  "How old are you?" : "I am a very young adult."
}
