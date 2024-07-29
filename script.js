let clickCount =0;//initial value =0 beacause it will be updated and incremented
function countClicks(){
    clickCount++ //this is =clickCount+1

    //print how many times the user clicks the button, this changes the text in HTML
    document.getElementById('clickCount').innerText = 'You have clicked' +clickCount + 'times';
}