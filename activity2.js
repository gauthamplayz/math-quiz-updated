function Back() {
         window.location = "activity_1.html" ;

}

function Getscore() {
         score = localStorage.getItem("Score") ;
         document.getElementById("Update").innerHTML = "<h1>Score: " + score +"</h1>";

}