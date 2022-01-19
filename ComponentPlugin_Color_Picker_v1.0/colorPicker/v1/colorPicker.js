
// Appian callbacks
$(document).ready(function () {
    Appian.Component.onNewValue(function (newValues) {
		var color = newValues.colorHexcode;
		
document.getElementById("favcolor").value = color;
		   console.log("1"  + color);
    
start(color);
     
    });

                     
      
});

function start(color) {
	
 var theInput = document.getElementById("favcolor");
  var theColor = theInput.value;
    		   console.log("2" + color);

 	     Appian.Component.saveValue("colorHexcode", color);   

  theInput.addEventListener("input", function() {
  var theColor1 = theInput.value;
  		   console.log("3" + theColor1);

  Appian.Component.saveValue("colorHexcode", theColor1);


    });
     
} ;

function isValidColor(strColor){
  var s = new Option().style;
  s.color = strColor;
  return s.color == strColor;
}


