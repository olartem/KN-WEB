(function() {
  var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
  
  names.forEach(function(name) {
    if(name.charAt(0).toLowerCase() === 'j') {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  });
  console.log("------------------------------");
  names.forEach(function(name) {
    if(name.charAt(name.length - 1).toLowerCase() === 'n') {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  });
})();
