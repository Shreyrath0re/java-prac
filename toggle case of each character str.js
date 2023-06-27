function toggleCase(str) {
    var toggledString = "";
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (char === char.toLowerCase()) {
        toggledString += char.toUpperCase();
      } else {
        toggledString += char.toLowerCase();
      }
    }
    return toggledString;
  }
  var inputString = "good afternoon";
  var result = toggleCase(inputString);
  console.log("Toggled String:", result);
  