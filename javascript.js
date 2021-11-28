function myButton(){
    let newText = "help";
    document.cookie = "clicked = yes;"
    var x = document.cookie
    if(document.getElementById('maintext').innerHTML != newText){
        document.getElementById('maintext').innerHTML = newText;
    } else {
        document.getElementById('maintext').innerHTML = x;
    }
}
//not my code here
function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}
//is my code
let clickCookie = getCookie("clicked")
if(clickCookie = "yes"){
    document.getElementById('maintext').innerHTML = "help";
} else {
    alert('fucking failure you are')//im not a failure, yay!
}