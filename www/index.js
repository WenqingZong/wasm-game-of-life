import init, { Universe } from "./dist/wasm_game_of_life.js";

// Initialise web assembly.
await init();

const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();

// On each iteration, JS draws the current universe to the <pre>, and then calls Universe::tick.
const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();

    requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);
