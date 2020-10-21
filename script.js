// in Ex9 to Ex15, change the name of the following function properly
function problem_11() {

  var outputObj = document.getElementById("output");

  
  var a = parseInt(prompt("Please enter a number: ", ""));
  
  
<<<<<<< HEAD
  outputObj.innerHTML = "number: " + a + "<br><br>";
=======
  outputObj.innerHTML = "number: " + a;
>>>>>>> 7a55915faf1592311d1b56e403412f6c44e24d6d

  var sum = 0;

  while (a >= 1){
    num = a % 10;
    sum = sum + num;
    a = Math.floor(a / 10);
}
<<<<<<< HEAD
  outputObj.innerHTML += "sum of digits: " + sum;
=======

outputObj.innerHTML += "<br><br>sum of digits: " +  sum;
>>>>>>> 7a55915faf1592311d1b56e403412f6c44e24d6d

  outputObj.innerHTML = outputObj.innerHTML  + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
