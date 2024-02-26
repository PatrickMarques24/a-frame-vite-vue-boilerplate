export const toggleFog = (boolean) => {
	if (boolean) {
		document
			.querySelector("a-scene")
			.setAttribute("fog", "type: linear; color: #00A8E5; near: 1; far: 15;");
	} else {
		document.querySelector("a-scene").removeAttribute("fog");
	}
};
