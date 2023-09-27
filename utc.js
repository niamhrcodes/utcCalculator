//var userInput = '2023-09-17T23:36:10-05:00'
function dateToUtc(){
  var {value} = document.forms['date_utc']['date_string']
  var result = new Date(value).toISOString(value);
  document.getElementById("result").innerText = result;
}