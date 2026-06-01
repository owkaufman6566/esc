document.addEventListener("keydown", function(event) {
    if (event.ctrlKey) document.getElementById("answer").innerHTML = "the function name is 'supurb()' ";
});
document.addEventListener("keydown", function(event) {
    if (event.metaKey) document.getElementById("answer").innerHTML = "the function name is 'supurb()' ";
});




function supurb(click){

    document.getElementById("puzzle").innerHTML = "12D25LP.html"
}    
