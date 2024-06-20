function updateclock(){
    const now = new Date();
    const years = now.getFullYear().toString();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let monthname = months[now.getMonth()];
    const days = now.getDate().toString();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let dayname = weekday[now.getDay()];
    const datenow = `${dayname} ${days}/${monthname}/${years}`;
    document.getElementById("siding").textContent = datenow;
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timestring = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timestring;
}

updateclock();
setInterval(updateclock, 1000);
