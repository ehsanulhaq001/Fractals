let ang;
let r;
let leftColor;
let rightColor;
window.onload = start();

function start() {
    setup();
    draw();
}

function setup() {
    cnv = document.querySelector("#canvas");
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;
    cnv.style.backgroundColor = "black";
    ctx = cnv.getContext("2d");
    document.querySelector("#showAngle").innerHTML =
        Math.round((ang * 180) / Math.PI) + "º";
    document.querySelector("#showRatio").innerHTML = r + " : 1";
    leftColor = document.querySelector("#leftColor").value;
    rightColor = document.querySelector("#rightColor").value;
}

function draw() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    branch(
        cnv.width / 2,
        cnv.height / 10,
        Math.min(cnv.height, cnv.width) / 3.5,
        0,
        leftColor
    );
}

function branch(x, y, len, angle, color) {
    if (len > 3.5) {
        ctx.beginPath();
        ctx.moveTo(x, cnv.height - y);
        x = x + len * Math.sin(angle);
        y = y + len * Math.cos(angle);
        ctx.lineTo(x, cnv.height - y);
        ctx.strokeStyle = color;
        ctx.stroke();
        ang = (document.querySelector("#angle").value * Math.PI) / 180;
        r = document.querySelector("#ratio").value;
        document.querySelector("#showAngle").innerHTML =
            Math.round((ang * 180) / Math.PI) + "º";
        document.querySelector("#showRatio").innerHTML = r + " : 1";
        leftColor = document.querySelector("#leftColor").value;
        rightColor = document.querySelector("#rightColor").value;
        branch(x, y, (len * 2) / 3, angle + ang, leftColor);
        branch(x, y, (len * 2) / 3, angle - r * ang, rightColor);
    }
}

function bigHolder(n) {
    if (n == 1) {
        document.querySelector("#modify").style.display = "none";
        document.querySelector("#bigHolder").style.display = "flex";
    }
    if (n == 0) {
        document.querySelector("#modify").style.display = "flex";
        document.querySelector("#bigHolder").style.display = "none";
    }
}