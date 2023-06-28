const str = prompt("enter a string: ");
function countVowelsAndConsonants(string){
    var vowels = "aeiouAEIOU";
    var vowelCount = 0;
    var consonantCount = 0;
    for(var i=0; i<string.length; i++){
        var char = str[i];
        if(char.match(/[a-zA-z]/)){
            if(vowels.includes(char)){
                vowelCount++;
            }
            else{
                consonantCount++;
            }
        }
    }
    return [vowelCount, consonantCount];
}
var counts = countVowelsAndConsonants(str);
console.log("Number of vowels:", counts[0]);
console.log("Number of consonants:", counts[1]);