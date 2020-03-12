var canvasTime;
var canvasTimeOur;
function resetEvent(){
  let canvas = document.getElementById('canvasBrave');
  let ctx = canvas.getContext("2d");
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.font = 'bold 240px Tahoma';
  ctx.fillStyle = '#fa0';
  ctx.textAlign = 'center';
  ctx.fillText('Be Brave', canvas.offsetWidth / 2, canvas.offsetHeight / 2);
  ctx.closePath();
  clearInterval(canvasTime);
  clearTimeout(canvasTimeOur);
}

let notyet = function(){
  console.log('製作中@@');
  resetEvent();
}

let heightLightEvent = function(){
  console.log('觸發')
  let canvas = document.getElementById('canvasBrave');
  let ctx = canvas.getContext("2d");
  let width = canvas.offsetWidth;
  let height = canvas.offsetHeight;
  let xAsix = 0; //  width + 150 ~ width - 150 
  let yAsix = 0; //  height + 150 ! height -150 loop * 2
  canvasTime = setInterval(() => {
    ctx.beginPath();
    ctx.fillStyle = '#fa0';
    // canvas.fillRect(x座標,y座標,寬度,高度);
    ctx.arc( width - xAsix - 75, yAsix, 150, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
    ctx.globalCompositeOperation = "destination-out";
    xAsix += width / 200 ;
    yAsix += height / 200 ;
    // console.log(yAsix, );
  }, 10);
  canvasTimeOur = setTimeout(() => {
    clearInterval(canvasTime);
    clearTimeout(canvasTimeOur);
  }, 2000);
}