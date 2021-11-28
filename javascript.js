function myButton(){
    let newText = "help";
    if(document.getElementById('maintext').innerHTML != newText){
        document.getElementById('maintext').innerHTML = newText;
    } else {
        document.getElementById('maintext').innerHTML = 'yeetos'
    }
}