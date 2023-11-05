$(document).ready(function() {
    $(".title__hero, .btn-all").each(function(i) {
        $(this).delay(500 * i).queue(function() {
            $(this).addClass("animated");
        });
    });
});


$(document).ready(function() {
    $(".fa-bars").click(function() {
      $(".menu__bottom").slideToggle(function() {
        if ($(".menu__bottom").is(":visible")) {
          $(".menu__bottom").css({
            "max-height": "200px",
            "overflow-y": "auto"
          });
        }
      });
    });
  });


$(document).ready(function() {
    $('.header__top-select li').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
});

//nút quay lại đầu trang
$(document).ready(function() {
    $('window').scroll(function() {
        if($(this).scrollTop()){
            $('.backtop').fadeIn();
        } else {
            $('.backtop').fadeOut();
        }
    });
    $('.backtop').click(function() {
       $('html, body').animate({scrollTop: 0},1000);
    });
});

//Thay đổi giá trị placeholder cho khung tìm kiếm
$(document).ready(function() {
    const placeholders = [
        'Bạn cần tìm gì....?',
        'Tên sản phẩm bạn cần tìm....',
        'Sản phẩm bán chạy nhất....?'
    ];

    let currentPlaceholderIndex = 0;
    let currentCharacterIndex = 0;
    let intervalId = null;

    function updatePlaceholder() {
        const input = $('.header-search__input');
        const placeholder = placeholders[currentPlaceholderIndex];
        input.attr('placeholder', placeholder.substring(0, currentCharacterIndex));

        if (currentCharacterIndex < placeholder.length) {
            currentCharacterIndex++;
        } else {
            clearInterval(intervalId);
            currentCharacterIndex = 0;
            currentPlaceholderIndex = (currentPlaceholderIndex + 1) % placeholders.length;
            setTimeout(function() {
                intervalId = setInterval(updatePlaceholder, 100);
            }, 1000);
        }
    }

    intervalId = setInterval(updatePlaceholder, 100);
});

//Thay đổi giá trị placeholder cho form-input
$(document).ready(function() {
    const placeholders = [
        'Nhập địa chỉ email của bạn....',
        'Đăng kí để nhận thông báo khuyến mãi....'
    ];

    let currentPlaceholderIndex = 0;
    let currentCharacterIndex = 0;
    let intervalId = null;

    function updatePlaceholder() {
        const input = $('.form-input');
        const placeholder = placeholders[currentPlaceholderIndex];
        input.attr('placeholder', placeholder.substring(0, currentCharacterIndex));

        if (currentCharacterIndex < placeholder.length) {
            currentCharacterIndex++;
        } else {
            clearInterval(intervalId);
            currentCharacterIndex = 0;
            currentPlaceholderIndex = (currentPlaceholderIndex + 1) % placeholders.length;
            setTimeout(function() {
                intervalId = setInterval(updatePlaceholder, 100);
            }, 1000);
        }
    }

    intervalId = setInterval(updatePlaceholder, 100);
});

// Flash sale
$(document).ready(function() {
    function countdown() {
      var countdownDate = $('.timer-view').data('date');
      var targetDate = moment(countdownDate, "YYYY-MM-DD-HH-mm-ss");
      var now = moment();
      var duration = moment.duration(targetDate.diff(now));
  
      // Calculate remaining days, hours, minutes, and seconds
      var days = Math.floor(duration.asDays());
      var hours = duration.hours().toString().padStart(2, '0');
      var minutes = duration.minutes().toString().padStart(2, '0');
      var seconds = duration.seconds().toString().padStart(2, '0');
  
      // Set value to 0 if it is negative
      days = days < 0 ? 0 : days;
      hours = hours < 0 ? '00' : hours;
      minutes = minutes < 0 ? '00' : minutes;
      seconds = seconds < 0 ? '00' : seconds;
  
      // Update the countdown display
      $('.block-timer .days').text(days);
      $('.block-timer .hours').text(hours);
      $('.block-timer .minutes').text(minutes);
      $('.block-timer .seconds').text(seconds);
  
      // Check if the countdown has ended
      if (duration.asMilliseconds() <= 0) {
        clearInterval(countdownInterval);
        $('.timer-view').html('<p>Countdown Ended</p>');
      }
    }
  
    // Start the countdown
    var countdownInterval = setInterval(countdown, 1000);
  });