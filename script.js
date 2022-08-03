
var timer = document.querySelector(".timer");

var seconds = new Promise((tim,sec) => {
  let Timer = setInterval(() => {
    var runtime = parseInt(document.querySelector(".timer").innerText);
    timer.innerText = runtime - 1;
   
    if (runtime === 0) {
     clearInterval(Timer);
     tim((timer.innerText = "Happy Independence day"));
    }else{
      sec("hi i am abdul")
    }

  }, 1000);
});
console.log(seconds);