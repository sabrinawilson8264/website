function affirmations() {
    var listOfAffirmations = [
        "I am deliberate and afraid of nothing"
        , `Squeak grant me serenity to accept things I cannot change, courage to
         change things I can and wisdom to know the difference`
        , "I am a good driver and I am patient and calm"
        ,"I am loved and I am worthy of love"
        ,"I have the body I need to live my dream life"
        ,"I am safe and I am surrounded by love and support"
        ,"I make collages! I am an artist, sir!"
        ,"I love who I am and I'm excited for all that I may be"
        ,"Hang in there baby, you can cry, you can cuss but you gotta hold on"
        ,"doing it scared is just as brave"
    ]
    var randomNumber = Math.random()*listOfAffirmations.length
    var randomIndex = Math.floor(randomNumber)
    console.log(randomIndex)
    document.getElementById("demo").innerHTML = listOfAffirmations[randomIndex]
}

document.getElementById("myBtn").addEventListener("click", function() {
    affirmations();
  });