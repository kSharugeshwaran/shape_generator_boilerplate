

var button = document.getElementById("button")
var numberInsideShape = 1
var lastShapeNum = 0
button.onclick = () => {
    var n = document.getElementById("number").value
      //option selected    
    var circle = document.getElementById("circle").checked
    console.log(circle)
    var square = document.getElementById("square").checked
    console.log(square)
    var rectangle = document.getElementById("rectangle").checked
    console.log(rectangle)
    var TotalShapes = Number(lastShapeNum) + Number(n)
    console.log(TotalShapes)
    //create box variable where all the shapes are inserted    
    var box = document.getElementById("box")
    //Looping    
    for (let i = numberInsideShape; i <= TotalShapes; i++){
        //creating a div    
        var shape = document.createElement("div")
        shape.innerHTML = numberInsideShape
        //INCREMENT Number by 1    
        numberInsideShape = numberInsideShape + 1
        if (square == true) {
            
            shape.classList.add("square");}
         else if (circle == true) 
         {
            shape.classList.add("circle"); 
        }
        else if (rectangle == true) {
            shape.classList.add("rectangle")
        }
        //inserting the div created into the box div    
        box.append(shape)
        //take out last number from box div    
        lastShapeNum = box.lastChild.innerHTML}
    };
