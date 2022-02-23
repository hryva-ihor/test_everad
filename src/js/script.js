// timer start
const showTimeLess = () => {
    function addZero  (x) {return ((x < 10)? '0' : '') + x}
    let timeLeft = Math.round (.001 * (sessionStorage.getItem ('timeset') - performance.now ()));
    // console.log(timeLeft);
    document.getElementById ('my_timer').textContent = [addZero(Math.floor (timeLeft / 3600)), addZero(Math.floor ((timeLeft / 60) % 60)), addZero  (timeLeft % 60)].join (':');
    if (timeLeft) setTimeout (showTimeLess, 345);
}
let innerTimeLeft = document.getElementById ('my_timer').textContent.split (':');
    sessionStorage.setItem ('timeset', (innerTimeLeft [0] * 3600 + innerTimeLeft [1] * 60 + +innerTimeLeft [2]) * 1000);
    showTimeLess ();
// timer end

// start actual date
const actualData = document.querySelector(`#actual_data`)
let date = new Date();
let output = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
actualData.append(output);
//  actual date end

// tel mask start
inp.onclick = function() {
    inp.value = "+38(0";
}

var old = 0;

inp.onkeydown = function() {
    let curLen = inp.value.length;
    if (curLen < old){
        old--;
        return;
        }
    if (curLen == 7) inp.value = inp.value + ")";
    if (curLen == 7) inp.value = inp.value + "-";
    if (curLen == 12) inp.value = inp.value + "-"; 
    if (curLen == 15) inp.value = inp.value + "-";  
    if (curLen > 17) inp.value = inp.value.substring(0, inp.value.length - 1);
    old++;
}
// tel mask end