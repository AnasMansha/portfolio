"use strict";

const screen = document.getElementById("screen");
const xmlns = "http://www.w3.org/2000/svg";
const xlinkns = "http://www.w3.org/1999/xlink";

let isClicked = false;

const resize = () => {
	width = window.innerWidth;
	height = window.innerHeight;
};

let width, height;
resize();
window.addEventListener("resize", resize);

const prepend = (use, i) => {
	const elem = document.createElementNS(xmlns, "use");
	elems[i].use = elem;
	elem.setAttributeNS(xlinkns, "xlink:href", "#" + use);
	screen.prepend(elem);
};

const N = 40;
const elems = [];
for (let i = 0; i < N; i++) elems[i] = { use: null, x: width / 2, y: 0 };

const pointer = { x: width / 1.5, y: height / 1.5 };
const smoothedPointer = { x: pointer.x, y: pointer.y };

const radm = Math.min(pointer.x, pointer.y);
let frm = Math.random();
let rad = 0;

for (let i = 1; i < N; i++) {
	if (i === 1) prepend("Cabeza", i);
	else if (i === 8 || i === 14) prepend("Aletas", i);
	else prepend("Espina", i);
}

const run = () => {
	requestAnimationFrame(run);

	let speedFactor = isClicked ? 0.3 : 1;

	// Calculate target position using smooth sinusoidal motion
	const ax = (Math.cos(2 * frm) * rad * width) / height;
	const ay = (Math.sin(2 * frm) * rad * height) / width;

	pointer.x = width / 2 + ax;
	pointer.y = height / 2 + ay;

	// Smooth the pointer movement
	smoothedPointer.x += (pointer.x - smoothedPointer.x) * 0.05;
	smoothedPointer.y += (pointer.y - smoothedPointer.y) * 0.05;

	// Head (first segment)
	let e = elems[0];
	e.x += ((smoothedPointer.x - e.x) / 10) * speedFactor;
	e.y += ((smoothedPointer.y - e.y) / 10) * speedFactor;

	// Tail segments
	for (let i = 1; i < N; i++) {
		let e = elems[i];
		let ep = elems[i - 1];
		const a = Math.atan2(e.y - ep.y, e.x - ep.x);

		// Smooth follow with spring-like motion
		e.x += ((ep.x - e.x + Math.cos(a) * (100 - i) / 5) / 4) * speedFactor;
		e.y += ((ep.y - e.y + Math.sin(a) * (100 - i) / 5) / 4) * speedFactor;

		const s = (162 + 4 * (1 - i)) / 50;

		e.use.setAttributeNS(
			null,
			"transform",
			`translate(${(ep.x + e.x) / 2},${(ep.y + e.y) / 2}) rotate(${(180 / Math.PI) * a}) scale(${s},${s})`
		);
	}

	if (rad < radm) rad += speedFactor;
	frm += 0.003 * speedFactor;

	if (rad > 60) {
		pointer.x += ((width / 2 - pointer.x) * 0.05) * speedFactor;
		pointer.y += ((height / 2 - pointer.y) * 0.05) * speedFactor;
	}
};

run();
