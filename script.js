const canvas = document.getElementById("skinCanvas");
const ctx = canvas.getContext("2d");
const hairStyleSelect = document.getElementById("hairStyle");
const hairColorSelect = document.getElementById("hairColor");
const eyeStyleSelect = document.getElementById("eyeStyle");
const outfitStyleSelect = document.getElementById("outfitStyle");

const templates = {
    hair: ["assets/hair/hair1.png", "assets/hair/hair2.png"],
    eyes: ["assets/eyes/eyes1.png", "assets/eyes/eyes2.png"],
    outfit: ["assets/outfits/outfit1.png", "assets/outfits/outfit2.png"]
};

const colors = {
    hair: ["#ff6600", "#ffff00"],
    eyes: ["#0000ff", "#00ff00"],
    outfit: ["#ff0000", "#ffffff"]
};

function loadImage(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
    });
}

async function drawSkin() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const base = await loadImage("assets/base.png");
    const hair = await loadImage(hairStyleSelect.value);
    const eyes = await loadImage(eyeStyleSelect.value);
    const outfit = await loadImage(outfitStyleSelect.value);

    ctx.drawImage(base, 0, 0);
    ctx.fillStyle = hairColorSelect.value;
    ctx.fillRect(0, 0, 64, 64);
    ctx.drawImage(hair, 0, 0);
    ctx.drawImage(eyes, 0, 0);
    ctx.drawImage(outfit, 0, 0);
}

function populateSelectOptions() {
    hairStyleSelect.innerHTML = templates.hair.map(src => `<option value="${src}">${src}</option>`).join("");
    hairColorSelect.innerHTML = colors.hair.map(color => `<option value="${color}" style="background:${color}">${color}</option>`).join("");
    eyeStyleSelect.innerHTML = templates.eyes.map(src => `<option value="${src}">${src}</option>`).join("");
    outfitStyleSelect.innerHTML = templates.outfit.map(src => `<option value="${src}">${src}</option>`).join("");
}

populateSelectOptions();
drawSkin();
