function minDate(date1, date2) {
    var formattedDate1 = formatDate(date1);
    var formattedDate2 = formatDate(date2);
    if (formattedDate1 < formattedDate2) {
      return date1;
    } else {
      return date2;
    }
  }
  function formatDate(dateString) {
    var parts = dateString.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);
    return new Date(year, month - 1, day);
  }
  var date1 = '02/05/2021';
  var date2 = '24/01/2021';
  var earlierDate = minDate(date1, date2);
  console.log(earlierDate);
  