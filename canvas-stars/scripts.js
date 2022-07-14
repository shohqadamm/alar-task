// let canvas1 = document.getElementById('canvas1')
// let canvas2 = document.getElementById('canvas2')

// let ctx1 = canvas1.getContext('2d')
// let ctx2 = canvas2.getContext('2d')

// ctx1.fillStyle = 'white'
// ctx2.fillStyle = 'white'

// // first shape
// let firstStar = ctx1.beginPath();
// ctx1.moveTo(60, 30);
// ctx1.lineTo(75, 20);
// ctx1.lineTo(15, 25);
// ctx1.lineTo(25, 20);
// ctx1.closePath();

// ctx1.lineWidth = 2;
// ctx1.strokeStyle = "#333";
// ctx1.fillStyle = "#FFCC00";


// ctx1.fill();
// ctx1.stroke();

// // second shape
// ctx1.beginPath();
// ctx1.moveTo(50, 50);
// ctx1.lineTo(40, 30);
// ctx1.closePath();

// ctx1.lineWidth = 45;
// ctx1.strokeStyle = "steelblue";

// ctx1.stroke();
// ctx2.fillRect(0,10,600,50)


function fillBox(color){
    event.stopPropagation();
    document.querySelector('.star-colored-box').style.background = color
}