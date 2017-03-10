$(document).ready(function () {
    $("button").on("click", function(){
         $.getJSON("https://jsonplaceholder.typicode.com/users", function(data) {
             for (var i = 0; i < data.length; i++){
                 var osoba = (data[i].name + ", " + data[i].username  + ", " + data[i].email + ", " + data[i].phone + ", ");
                 
                 $("ul").append("<li>"+osoba);
             };            
         });           
    });    
});

