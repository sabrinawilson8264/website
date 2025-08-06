function affirmations() {
    var listOfAffirmations = [
        "You go girl!"
        , "I am deliberate and afraid of nothing"
        , "Squeak grant me serenity"
        , "I am a good driver and I am patient and calm"
    ]
    var randomNumber = Math.random()*listOfAffirmations.length
    var randomIndex = Math.floor(randomNumber)
    document.getElementById("demo").innerHTML = listOfAffirmations[randomIndex]
}

document.getElementById("myBtn").addEventListener("click", function() {
    affirmations();
  });