// console.log('sup')
// let clock = document.querySelector(".clock");
// console.log('clock', clock)


function time(){
    var date = new Date();
    // date stores the data of the actual time and date when the function is called

    var hours=date.getHours();
    // returns the hour value of date variable
    var minutes=date.getMinutes();
    // returns the minute value of date
    var seconds=date.getSeconds();
    // returns the seconds value of date

    var arr=[hours,minutes,seconds].map(function(num){
   return (num<10) ? '0'+num : String(num)
});

hours=arr[0];
minutes=arr[1];
seconds=arr[2];

return hours + ':' +  minutes + ':' + seconds;
}

function output(time)
{
var color= '# ' + time;
document.body.bgColor=color;
document.querySelector('#time').textContent=color;
}

setInterval(function(){output(time())},1000)

document.getElementById('time').onmouseover = function () {mouseOver()};
document.getElementById('time').onmouseout = function() {mouseOut()};

function mouseOver(){
    document.getElementById('time').toString(num);
    //some sort of function to change value to hex
}

function mouseOut() {
    document.getElementById('time').toString(num);
}
  // decimal to hexadecimal
ConvertBase.dec2hex = function (num) {
        return ConvertBase(num).from(10).to(16);
    };

//
// clock = document.getElementById('time');
//
// clock.addEventListener("mouseover",function(event) {
//
//     }
//
// )


    // let clockText = "00:00:01";


    // clock.textContent = clockText;




// setInterval(time, 1000)

//
//
//
// get hours
// get minutes



//clue: event listener in clock
// vaiable: is hovering
// <html_element>.addEventListener() set to true
//depending on whether it's hovering, show hex code or time
// mouseOver or mouseOut (is_hovering=True)