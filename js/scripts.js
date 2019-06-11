$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var sentence = $("#input").val();
    var characters = []
      for (var index = 0; index < sentence.length; index += 1) {
        characters.push(sentence[index]);
      };
      characters = characters.map(function(character) {
      if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u" || character === "y") {
        return "-"
      } else {
        return character
      }
    });
    var finished = characters.join('');
    $("#hiddenVowels").text(finished);
    $("#formOne").hide();
    $(".newpuzzle").show();
    console.log(characters)
    event.preventDefault();
  });
});
