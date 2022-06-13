const countDate = new Date('june, 30, 2022 00:00:00').getTime();  // set the date

 setInterval(() =>{

    const currentDate = new Date().getTime();
    let difference = countDate - currentDate;  // diffence between the future date and the current date (how many days left) 
    
    // time calculation
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    console.log(hour)

     // calculate the remaining time in days hours minutes and seconds.
     const days = Math.floor(difference / day);
     const hours = Math.floor((difference % day)/hour);
     const minutes = Math.floor((difference % hour)/minute);
     const seconds = Math.floor((difference % minute)/second);
    document.querySelector('.dayz').innerText = days
    document.querySelector('.hourz').innerText = hours
    document.querySelector('.minutez').innerText = minutes
    document.querySelector('.secondz').innerText = seconds

    },1000)   // make a timer function update every second