let timer =document.getElementById("countDown");

let bigin=10;

setTimeout(()=>{
  timer.innerHTML=bigin;
  bigin--;
   setTimeout(()=>{
    timer.innerHTML=bigin;
    bigin--;
    setTimeout(()=>{
      timer.innerHTML=bigin;
      bigin--;
      setTimeout(()=>{
        timer.innerHTML=bigin;
        bigin--;
        setTimeout(()=>{
          timer.innerHTML=bigin;
          bigin--;
          setTimeout(()=>{
            timer.innerHTML=bigin;
            bigin--;
            setTimeout(()=>{
              timer.innerHTML=bigin;
              bigin--;
              setTimeout(()=>{
                timer.innerHTML=bigin;
                bigin--;
                setTimeout(()=>{
                  timer.innerHTML=bigin;
                  bigin--;
                  setTimeout(()=>{
                    timer.innerHTML=bigin;
                    bigin--;
                    setTimeout(()=>{
                      timer.innerHTML="happy independence day";
                      timer.classList.add('text-danger')
                    },1000)
                  },1000)
                },1000)
              },1000) 
            },1000)
          },1000) 
        },1000) 
      },1000)
    },1000) 
  },1000)
},1000)
