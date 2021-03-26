const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
// clear background
ctx.beginPath();
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = '#fff';
ctx.fill();
// draw line
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(canvas.width, canvas.height);
ctx.stroke();
