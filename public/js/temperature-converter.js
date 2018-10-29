var givenvalue = "celsius";  


document.getElementById("submit").onclick = convert;
document.getElementById("reset").onclick = reset;

document.getElementById("celsius").onchange = function() {
  givenvalue = "celsius";
};
document.getElementById("fahrenheit").onchange = function() {
  givenvalue = "fahrenheit";
};


function convert(temperature) {

  
  var celsius = document.getElementById("celsius").value;
  celsius = parseFloat(celsius);

  var fahrenheit = document.getElementById("fahrenheit").value;
  fahrenheit = parseFloat(fahrenheit);

  
  var convertCelsius;
  var convertFahrenheit;
  

 
  if (givenvalue === "celsius") {
    var convertFahrenheit = celsius * 9 / 5 + 32;
   
    document.getElementById("fahrenheit").value = Math.round(conversionF);
    
  } 
   
    else (givenvalue === "fahrenheit") {
      convertCelsius = (fahrenheit - 32) * 5 / 9;
   
    document.getElementById("celsius").value = Math.round(conversionC);
    
  } 
    

 
  document.getElementById("celsius").innerHTML = convertCelsius;
  document.getElementById("fahrenheit").innerHTML = conversionF;
  
}


function reset() {
  document.getElementById("celsius").value = 0;
  document.getElementById("fahrenheit").value = 0;
  
}