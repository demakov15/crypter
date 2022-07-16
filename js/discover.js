const btn = document.querySelector(".discover__load");
const more = document.querySelector(".discover__more");

btn.addEventListener("click", (e) => {
	more.classList.toggle("show");
	if (btn.innerText === "Load More") {
		btn.innerText = "Load Less";
	} else {
		btn.innerText = "Load more";
	}
});