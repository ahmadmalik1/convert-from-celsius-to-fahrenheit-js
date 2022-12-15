// now create a function for Fahrenheit

function convert(){
    // getting ids from elements (INPUT, RESULT BOX)
    var celsius_no = document.getElementById("input").value;
    var result_box = document.getElementById("result");
    // now apply logic for conversion
    var x = (celsius_no * 9/5) + 32;// formula for C to F

    // now put this ans in result box
    result_box.innerText = "Temprature in Fahrenheit is "+x+"F";

}