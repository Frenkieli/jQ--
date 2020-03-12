let colorClass = ['red', 'yellow', 'green', 'blue', 'gray']
$(function () {
  // 處理navitem並獲取位置

  let section = $('.section');
  let sectionPosition = [];
  let sectionHeight = $(section).height();

  //上方為用到的變數
  $('.navbar_list').height(section.length * 20 + 'px');
  $(section).each(function (index, element) {
    console.log(element);
    sectionPosition.push($(element).offset().top);
    $('#navbar_list')
      .append('<li class="nvbar_item '
        + (index === 0 ? 'active ' : ' ')
        + colorClass[index]
        + '"><span class="navbar_dot left_dot"></span><span class="navbar_dot right_dot"></span>'
        + $(element).attr('data-title')
        + '</li>');
  })
  sectionPosition.push($(section).last().offset().top + sectionHeight);
  console.log(sectionPosition);
  // 處理滾輪事件

  let nowSection = 0;
  let navItem = $('.nvbar_item');
  let scrollTop = 0;

  let scrollEventList = [notyet, heightLightEvent, notyet, notyet, notyet];  //詳細內容再後面追加
  //上方為用到的變數
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    scrollTop = scrollTop + 200;
    if (scrollTop < sectionPosition[nowSection + 1] && scrollTop > sectionPosition[nowSection]) {
      console.log('沒事');
    } else {
      checkNowSection(scrollTop);
    }
  })
  function checkNowSection(scrollNow) {
    for (let i = 1; i <= sectionPosition.length; i++) {
      if (scrollNow < sectionPosition[i]) {
        nowSection = i - 1;
        console.log(scrollNow, sectionPosition[i], '沒有進來嗎?');
        break;
      }
    }
    if(nowSection == 0){
      console.log('remover', nowSection);
      $('#topButton').removeClass('active');
    }else{
      // $('#top').addClass('active');
      document.getElementById('topButton').className = 'active';
      console.log('addddd', nowSection);
    }
    console.log(scrollNow, nowSection);
    scrollEventList[nowSection](); //觸發對應section動畫事件;
    $(navItem)
      .eq(nowSection)
      .addClass('active')
      .siblings('.active')
      .removeClass('active');
    $(section)
      .eq(nowSection)
      .addClass('active')
      .siblings('section.active')
      .removeClass('active');
    
  }
  // 滾輪事件完成

  //處理點擊nav_item事件

  function moveScroll(num){
    $('html, body').stop().animate({ scrollTop: num });
  }
  $(navItem).click(function (e) {
    let index = $(this).index();
    moveScroll(sectionPosition[index])
    // console.log()
  })
  $('#topButton').click(function(e){
    moveScroll(0);
  })
  let canvas = document.getElementById('canvasBrave');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.font = 'bold 240px Tahoma';
  ctx.fillStyle = '#fa0';
  ctx.textAlign = 'center';
  ctx.fillText('Be Brave', canvas.offsetWidth / 2, canvas.offsetHeight / 2);
  ctx.closePath();
  // canvas.addEventListener('mousemove', function (e) {
  //   ctx.beginPath();
  //   console.log(e.pageY, e.pageX);
  //   ctx.fillStyle = '#fa0';
  //   // canvas.fillRect(x座標,y座標,寬度,高度);
  //   ctx.arc(e.pageX, e.pageY - sectionHeight, 100, 0, Math.PI * 2, false);
  //   ctx.fill();
  //   ctx.closePath();
  //   ctx.globalCompositeOperation = "destination-out";
  // })
})


// 冒險故事決定用滑鼠劃開
