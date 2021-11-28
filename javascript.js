function myButton(newText){
    if(document.getElementById('maintext') != newText){
        document.getElementById('maintext') = newText;
    } else{
        document.getElementById('maintext') = 'yeetos'
    }
}