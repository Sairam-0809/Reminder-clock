function realclocktime() {
    let First1element = document.querySelectorAll(".first1");
    let hour = First1element[0];
    let minutes = First1element[1];
    let Second = First1element[2];
    let newdate = new Date();
    let newhour = newdate.getHours();
    let newminute = newdate.getMinutes();
    let newseconds = newdate.getSeconds();
   
  
  
    document.querySelector(".first1").innerText = newhour
  
    let greeting =document.querySelector("#greeting")
    if (newhour >= 12 && newhour <16) {
      greeting.innerText = "GOOD!! AFTERNOON!! TAKE SOME SLEEP"
    }
    if (newhour >= 16 && newhour < 20) {
      greeting.innerText = "GOOD!! EVENING!!"
    }
    if (newhour >= 20 && newhour <= 23) {
      greeting.innerText = "GOOD!! NIGHT!!"
  
    }
    if (newminute < 10) {
      newminute = "0" + newminute;
    }
    if (newhour >= 12) {
      newhour -= 12
      // ampm="PM"
      document.querySelector(".second").innerText = "PM"
    }
    if (newhour == 0) {
      newhour = 12;
    }
    hour.innerText = newhour;
    minutes.innerText = newminute;
    Second.innerText = newseconds;
   
  }
  //   realclocktime();
  setInterval(realclocktime, 1000);
  //   setInterval((callbackfunction,timeinterval) =>{
  
  //   }, interval);
  
  
  // set instruction for button tag
  let setbutton = document.querySelector("#setbutton")
  setbutton.addEventListener("mouseover", () => {
    setbutton.innerText = "Party Time"
    setbutton.style.background = "linear-gradient(-113deg, #6E54EC 0%, #CB52F8 40%, #FC5EFF 81%, #F1A7C5 100%)";
  })
  setbutton.addEventListener("mouseout", () => {
    setbutton.innerText = "Set Alarm"
    setbutton.style.background = "linear-gradient(113deg, #6E54EC 0%, #CB52F8 40%, #FC5EFF 81%, #F1A7C5 100%)";
  })
  let changelabel1 = document.querySelector("#changelabel1")
  let changelabel2 = document.querySelector("#changelabel2")
  let changelabel3 = document.querySelector("#changelabel3")
  let changelabel4 = document.querySelector("#changelabel4")
  let selecttimer1 = document.querySelector("#selecttime1")
  let selecttimer2 = document.querySelector("#selecttime2")
  let selecttimer3 = document.querySelector("#selecttime3")
  let selecttimer4 = document.querySelector("#selecttime4")
  let massage =document.querySelector("#massage1")
  
  setbutton.addEventListener("click", () => {
    let newdate = new Date();
    let newhour = newdate.getHours();
    // selecttimer1.children
    // console.log(selecttimer1.selectedIndex)
    changelabel1.innerText = (selecttimer1.children[selecttimer1.selectedIndex].innerText)
    changelabel2.innerText = (selecttimer2.children[selecttimer2.selectedIndex].innerText)
    changelabel3.innerText = (selecttimer3.children[selecttimer3.selectedIndex].innerText)
    changelabel4.innerText = (selecttimer4.children[selecttimer4.selectedIndex].innerText)
    console.log(selecttimer3.value)
    if(Number(selecttimer2.value) === newhour){
      massage.innerText = "LET'S HAVE SOME LUNCH !!";
      img.src = "./Images/LunchPoster.svg";
  }
  
  else if(Number(selecttimer3.value) === newhour){
      massage.innerText = " STOP YAWNING, GET SOME TEA... ITS JUST EVENING!";
      img.src = "./Images/lunch_image.png";
  }
  else if(Number(selecttimer4.value) === newhour){
    massage.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
      img.src = "./Images/NightPoster.svg";
  }else{
    massage.innerText = "GRAB SOME HEALTHY BREAKFAST"
    img.src="./Images/WakeUpPoster.svg"
  }
  
   
    
  })
  