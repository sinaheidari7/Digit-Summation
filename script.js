// in Ex9 to Ex15, change the name of the following function properly
function problem_11() {

  var outputObj = document.getElementById("output");

  
  var a = parseInt(prompt("Please enter a number: ", ""));
  
  
    outputObj.innerHTML = "number: " + a + "<br><br>sum of digits: ";

  var sum = 0;

  while (a >= 1){
    num = a % 10;
    sum = sum + num;
    a = Math.floor(a / 10);
}
    outputObj.innerHTML = "sum of digits: " + sum;

  outputObj.innerHTML = outputObj.innerHTML  + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
