function myButton(newText){
    if(document.getElementById('maintext').innerHTML != newText){
        document.getElementById('maintext').innerHTML = newText;
    } else {
        document.getElementById('maintext') = 'yeetos'
    }
}