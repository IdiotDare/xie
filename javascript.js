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