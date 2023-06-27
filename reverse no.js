var n = parseInt(prompt("enter a number:"));
function reverse_a_number(n)
{
n = n + "";
result = n. split(""). reverse(). join("");
console.log("reversed number:", result);
}
reverse_a_number(n);