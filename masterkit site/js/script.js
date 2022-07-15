
/*===== Swiper reviews=====*/

// Swipe on touch and click 
const frame = document.querySelector('.reviews__wrapper');
const row = document.querySelector('.reviews__row');
const allItems = document.querySelectorAll('.reviews__item');
const item = document.querySelector('.reviews__item');
const viewport = document.documentElement.clientWidth;

if (viewport <= 768){
frame.addEventListener("touchstart", start);
frame.addEventListener("mousedown", start);
}


const itemWidth = item.offsetWidth;
const rowWidth = allItems.length * itemWidth;
let startTime, endTime, totalTime, startX, endX, direction;
let track = 0;
let moving = false;

//Coloring buttons and counters under reviews
const allItemsCount = document.querySelector('.reviews__more-numbers');
const activeItemCount = allItemsCount.querySelector('span');
const allItemsBtns = document.querySelectorAll('.reviews__btn');

allItemsCount.insertAdjacentHTML("beforeend", ` &#183 ${allItems.length}`);
function activeItemShow (){
	let curentItemNumber = (track + itemWidth) / itemWidth;
	activeItemCount.innerHTML = "";
	activeItemCount.insertAdjacentHTML("beforeend", `${curentItemNumber}`);
	allItemsBtns.forEach(element => element.style = "");
	allItemsBtns[curentItemNumber - 1].style = "background: #FFFFFF;";
}
activeItemShow();


// Start swiping function
function start() {
	event.preventDefault();
	if (event.pageX){
		startX = event.pageX;
	} else {
		startX = event.changedTouches[0].pageX;
	}
	startTime = new Date();
	frame.addEventListener("touchmove", move);
	frame.addEventListener("touchend", end);
	frame.addEventListener("mousemove", move);
	frame.addEventListener("mouseup", end);
};

function move(){
	moving = true;
}

function end() {
	if (event.pageX){
		endX = event.pageX;
	} else {
		endX = event.changedTouches[0].pageX;
	};
	endTime = new Date();
	if(moving) {
		totalTime = endTime - startTime;
		direction = endX - startX;
	}
	frame.removeEventListener("touchmove", move);
	frame.removeEventListener("touchend", end);
	frame.removeEventListener("mousemove", move);
	frame.removeEventListener("mouseup", end);
	moving = false;
	if (totalTime > 60){
		if(direction < -25){
			moveRight();
		} else if (direction > 25) {
			moveLeft();
		}
	}
	activeItemShow ();
};


function moveRight(){
	if(track < (rowWidth - itemWidth)){
		track += itemWidth;
		row.style = `transform: translate(${-track}px,0);`;
	}
}
function moveLeft(){
	if (track >= itemWidth){
		track -= itemWidth;
		row.style = `transform: translate(${-track}px,0);`;
	}
}
//End swiping function



/*===== Form and popup scripts =====*/

const allForms = document.forms;
const popup = document.querySelector('.wrapper-popup');
const popupClose = popup.querySelector('.pushup__close');
const popupEmail = document.querySelector('.pushup__email');

//Cheking forms
allForms[0].addEventListener("submit", check);
allForms[1].addEventListener("submit", check);

async function check () {
	let emailForm = this.email;
	let personalInf = this.personal;
	let mainForm = this;
	let email = false;
	let checkbox = false;
	event.preventDefault();


	if (emailTest(emailForm)){
		if(mainForm.querySelector('.form__error')) emailForm.nextElementSibling.remove();
		emailForm.insertAdjacentHTML("afterend", `<div class="form__error">Введите email</div>`);
		emailForm.style = "border-color: #E24A1A;";
	} else {email = true;};
	if (!personalInf.checked){
		personalInf.nextElementSibling.style = "color: #E24A1A; border-color: #E24A1A;";
	} else {checkbox=true;};


	emailForm.addEventListener("focus", function(){
		if(mainForm.querySelector('.form__error')){
			emailForm.nextElementSibling.remove();
			emailForm.style = "";
		};
	}, {once: true});
	personalInf.addEventListener("click", function(){
		if(personalInf.checked) personalInf.nextElementSibling.style = "";
	}, {once: true});

	let formData = new FormData(mainForm);

	// Pushup block (Pop up)
	if (email && checkbox){
		mainForm.classList.add('sending');
		/*let response = await fetch('sendmail.php',{
			method: 'POST',
			body: formData
		});
		if(response.ok){
			let result = await response.json();*/

			mainForm.classList.remove('sending');
			popup.classList.add('active');
			popupEmail.textContent = `${emailForm.value}`;
			document.body.classList.add('lock');
			popupClose.addEventListener("click", function(){
				document.body.classList.remove('lock');
				popup.classList.add('smooth');
				setTimeout(function (){
					popup.classList.remove('active');
					popup.classList.remove('smooth');
				}, 480);
				mainForm.reset();
			}, {once:true});
		} else {
			mainForm.classList.remove('sending');
			alert('Ошибка' + response.status);
		};
	};
/*};*/


//Checking emaile
function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
};






