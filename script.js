// define variables
const dice_btn = document.getElementById("dice");
const advice_numberEL = document.getElementById("advice-number");
const adviceEL = document.getElementById("advice");

// fetch advice and update the DOM
function getAdvice() {
	fetch(`https://api.adviceslip.com/advice`).then((res) =>
		res.json().then((data) => {
			advice_numberEL.innerText = data.slip.id;
			advice.textContent = data.slip.advice;
		})
	);
}

// event listener
dice_btn.addEventListener("click", getAdvice);
