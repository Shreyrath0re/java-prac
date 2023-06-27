function lengthOfString(string){
    var words = string.split(/\s+/);
    result = words.length;
    console.log(result);
}
lengthOfString("We are NeoGrammers");