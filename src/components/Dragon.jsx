import { useEffect } from "react";
import dragonMarkup from "../dragon.svg.html?raw";

const Dragon = () => {
  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const screen = document.getElementById("screen");
    if (!screen) return;

    const xmlns = "http://www.w3.org/2000/svg";
    const xlinkns = "http://www.w3.org/1999/xlink";

    let width = window.innerWidth;
    let height = window.innerHeight;
    let isClicked = false;
    let frameId = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    const N = 40;
    const elems = [];
    for (let i = 0; i < N; i++) elems[i] = { use: null, x: width / 2, y: 0 };

    const prepend = (use, i) => {
      const elem = document.createElementNS(xmlns, "use");
      elems[i].use = elem;
      elem.setAttributeNS(xlinkns, "xlink:href", `#${use}`);
      screen.prepend(elem);
    };

    for (let i = 1; i < N; i++) {
      if (i === 1) prepend("Cabeza", i);
      else if (i === 8 || i === 14) prepend("Aletas", i);
      else prepend("Espina", i);
    }

    const pointer = { x: width / 1.5, y: height / 1.5 };
    const smoothedPointer = { x: pointer.x, y: pointer.y };
    const radm = Math.min(pointer.x, pointer.y);
    let frm = Math.random();
    let rad = 0;

    const run = () => {
      frameId = requestAnimationFrame(run);

      const speedFactor = isClicked ? 0.3 : 1;
      const ax = (Math.cos(2 * frm) * rad * width) / height;
      const ay = (Math.sin(2 * frm) * rad * height) / width;

      pointer.x = width / 2 + ax;
      pointer.y = height / 2 + ay;

      smoothedPointer.x += (pointer.x - smoothedPointer.x) * 0.05;
      smoothedPointer.y += (pointer.y - smoothedPointer.y) * 0.05;

      const head = elems[0];
      head.x += ((smoothedPointer.x - head.x) / 10) * speedFactor;
      head.y += ((smoothedPointer.y - head.y) / 10) * speedFactor;

      for (let i = 1; i < N; i++) {
        const e = elems[i];
        const ep = elems[i - 1];
        const a = Math.atan2(e.y - ep.y, e.x - ep.x);

        e.x +=
          ((ep.x - e.x + (Math.cos(a) * (100 - i)) / 5) / 4) * speedFactor;
        e.y +=
          ((ep.y - e.y + (Math.sin(a) * (100 - i)) / 5) / 4) * speedFactor;

        const s = (162 + 4 * (1 - i)) / 50;
        e.use.setAttributeNS(
          null,
          "transform",
          `translate(${(ep.x + e.x) / 2},${(ep.y + e.y) / 2}) rotate(${
            (180 / Math.PI) * a
          }) scale(${s},${s})`
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

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      while (screen.firstChild) screen.removeChild(screen.firstChild);
    };
  }, []);

  return (
    <div
      className="dragon-root"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: dragonMarkup }}
    />
  );
};

export default Dragon;
