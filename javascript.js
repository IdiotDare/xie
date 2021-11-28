function myButton(newText){
    let newText = "help"
    if(document.getElementById('maintext') != newText){
        document.getElementById('maintext') = newText;
    } else {
        document.getElementById('maintext') = 'yeetos'
    }
}