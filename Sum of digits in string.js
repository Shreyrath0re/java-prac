function sum_digits_from_string(dstr) {
  var dsum = 0;
  for (var i = 0; i < dstr.length; i++)
  {
    if (/[0-9]/.test(dstr[i])) dsum += parseInt(dstr[i])
  }
  return dsum;
}
console.log("sum :", sum_digits_from_string("1234"));
