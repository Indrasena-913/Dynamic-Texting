document.addEventListener("DOMContentLoaded", function () {
	const text = ["web developer", "singer", "dancer"];
	const p = document.createElement("p");
	p.style.fontSize = "30px";
	p.style.color = "blue";
	p.textContent = "I am a ";
	p.style.padding = "20px";
	const div = document.querySelector("div");
	div.appendChild(p);

	let i = 0;
	let j = 0;
	function typeword() {
		if (i < text.length) {
			if (j < text[i].length) {
				p.textContent += text[i][j];
				j++;
				setTimeout(typeword, 200);
			} else {
				i++;
				j = 0;
				setTimeout(() => {
					p.textContent = "I am a ";
					typeword();
				}, 500);
			}
		} else {
			i = 0;
			setTimeout(typeword, 500);
		}
	}
	typeword();
});
