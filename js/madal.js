const emailInut = document.querySelector('.email');
const emailButt = document.querySelector('.butt');
const formErr = document.querySelector('.form-err');

emailButt.disabled = true;

emailInut.addEventListener("input", (e) => {
	if (e.target.value === "") {
		formErr.textContent = "";
		formErr.classList.remove("show");
		emailButt.disabled = true;
	} else if (
		!e.target.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
	) {
		formErr.textContent = "Please, enter valid email";
		formErr.classList.add("show");
		emailButt.disabled = true;
	} else {
		setTimeout(() => {
			formErr.textContent = "";
			formErr.classList.remove("show");
			emailButt.disabled = false;
		}, 200);
	}
});

const emailForm = document.querySelector('.footer__form');
const modal = document.querySelector('.modal');

emailForm.addEventListener('submit', (e) => {
	modal.classList.toggle("show");

	e.preventDefault();

	setTimeout(() => {
		modal.classList.toggle("show");
		document.body.style.overflow = "auto";
	}, 2000);
})
