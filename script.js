const hourhand = document.querySelector(".hour-hand");
const minutehand = document.querySelector(".minute-hand");
const secondhand = document.querySelector(".second-hand");

function tick() {
    const time = new Date();
    const hours = time.getHours() %12 ;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const interval = 6;


secondhand.style.setProperty("--rotation", seconds * interval);
minutehand.style.setProperty("--rotation", minutes * interval + seconds / 10);
hourhand.style.setProperty("--rotation", hours * 30 + minutes / 2 );
}

tick();
setInterval(tick,1000);