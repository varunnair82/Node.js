function clock(){
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.clear();
    console.log(hours, ":", min, ":", sec);
    
}


setInterval(clock, 1000);