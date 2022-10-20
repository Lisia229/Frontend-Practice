// 分數
let score = 0
// 剩餘秒數
let countdown = 0
// 計時器
let timer = 0


// 這個可以讓綠谷跳起來一下 但不知道怎麼連續跳
// $(document).mousedown(function (event) {
//   to_top();
// });
// $(document).mouseup(function (event) {
//   to_down();
// });
// function to_top() {
//   $("#deku2").css({ 'top': '-=30' });
// }
// function to_down() {
//   $("#deku2").css({ 'top': '+=30' });
// }


// 讓綠谷左右移動
// 鍵盤的keycode
$(document).keydown(function (event) {
  if (event.keyCode == 37) {
    $('#deku2').attr('src', './images/deku.gif')
    to_left();
  } else if (event.keyCode == 39) {
    $('#deku2').attr('src', './images/might.png')
    to_right();
  }
});

// 讓左邊和右邊各做事情
function to_left() {
  let left = $("#deku2").css('left');
  $("#deku2").css({ 'left': '-=10' });
  if (parseInt(left) <= -10) {
    $("#deku2").css({ 'left': -10 + 'px' });
  }
}

function to_right() {
  console.log($('#deku2').attr('src'))
  let left = $("#deku2").css('left');
  $("#deku2").css({ 'left': '+=10' });
  // 把文字去掉轉成數字
  if (parseInt(left) >= 540) {
    $("#deku2").css({ 'left': 540 + 'px' });
  }
}


// 點擊遊戲開始
$("#start").on("click", function () {
  // 讓遊戲開始畫面隱藏
  $(".mask").hide();
  // 分數
  score = 0
  $('#text-score').text(score)
  // 倒數計時
  countdown = 90
  $('#time').text(countdown)
  timer = setInterval(function () {
    countdown--
    $('#time').text(countdown)

    // 時間到
    if (countdown === 0) {
      clearInterval(timer)
    }
  }, 1000)
});

// 遊戲說明點擊
$("#Introduction").on("click", function () {
  $(".Introduction").toggle();
});