import "./clock.css"

function clock() {

    function clock() {
        const date = new Date();
        const hours = ((date.getHours() + 11) % 12 + 1);
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const hour = hours * 30;
        const minute = minutes * 6;
        const second = seconds * 6;
  
        document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;
        document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
        document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
    }

    setInterval(clock, 1000);

  return (
    <div className="clock">
		<div className="wrap">
		  <span className="heure"></span>
		  <span className="minute"></span>
		  <span className="seconde"></span>
		  <span className="dot"></span>
		</div>
	</div>
  );
}

export default clock;