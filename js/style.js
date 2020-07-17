$(window).load(function () {
  // 新即墨切换
  var tabItem3 = $('.newjimo_item');
  tabItem3.eq(0).addClass('active_paper');
  tabItem3.eq(0).find('i').css('background-color', "#0068B7");
  tabItem3.hover(function () {
    tabItem3.removeClass('active_paper');
    tabItem3.siblings().find('i').css('background-color', "#999999");
    $(this).addClass('active_paper');
    $(this).find('i').css('background-color', "#0068B7");
    // $('.paper_pic').stop().hide().eq($(this).index()).fadeIn()
  }, function () {})

  //直播
  var redTitle = $('.zhibo ul li')
  redTitle.hover(
    function () {
      $(this).find('a').css("color", '#0068B7');
    },
    function () {
      $(this).find('a').css("color", '#555555');
    }
  );
  var title = $('.zhibo h3')
  title.hover(
    function () {
      $(this).css("color", '#0068B7');
    },
    function () {
      $(this).css("color", '#555555');
    }
  );

  // 即墨招聘
  var zhaopin1 = $('.jinqian_ul li a')
  zhaopin1.hover(
    function () {
      $(this).css("color", '#0068B7');
    },
    function () {
      $(this).css("color", '#555555');
    }
  );

  var zhaopin = $('.job_title')
  zhaopin.hover(
    function () {
      $(this).css("color", '#0068B7');
    },
    function () {
      $(this).css("color", '#555555');
    }
  );


  // 鼠标滑过
  function hover(id) {
    var redTitle = $(id)
    redTitle.hover(function () {
      $(this).find('a').css('color', '#0068B7')
      $(this).siblings().find('a').css('color', '#555555')
    }, function () {
      $(this).find('a').css('color', '#555555')
    })
  }
  hover('.banner_news_item');
  hover('.head_list_item');
  hover('.cell .cell_main_title');

  // 民生
  var redTitle1 = $('.cell_main_title1');
  redTitle1.hover(function () {
    $(this).find('a').css('color', '#0068B7')
    $(this).siblings().find('a').css('color', '#555555')
  }, function () {
    $(this).find('a').css('color', '#555555')
  })

  // 掌上生活
  var tab = $('.shou_life ul li')
  tab.addClass('rbgcolor')
  // tab.eq(0).css("background", "#00B4FF").find('h5').css("color", "#FFFFFF")
  // tab.eq(1).css("background", "#6ED172").find('h5').css("color", "#FFFFFF")
  // tab.eq(4).css("background", "#FFB362").find('h5').css("color", "#FFFFFF")
  // tab.eq(5).css("background", "#21D9F0").find('h5').css("color", "#FFFFFF")

  // 媒体看即墨
  var redTitle = $('.watch_tv ul li')
  redTitle.hover(
    function () {
      $(this).find('a').css("color", '#0068B7');
    },
    function () {
      $(this).find('a').css("color", '#555555');
    }
  );

  // 随手拍
  var title_p = $('.swiper-container1 .swiper-slide')
  title_p.hover(function () {
      $(this).find('.icon_zanting').show();
      $(this).find('h3').show();
    },
    function () {
      $(this).find('.icon_zanting').hide();
      $(this).find('h3').hide();
    }, )

  //最新问政
  var tabItem4 = $('.tabitem3_ul');
  tabItem4.eq(0).find('.triangle').show();
  tabItem4.hover(function () {
    tabItem4.removeClass('tabitem3_active');
    $(this).addClass('tabitem3_active');
    $(this).find('.triangle').show();
    $(this).siblings().find('.triangle').hide();
    $('.pic').stop().hide().eq($(this).index()).fadeIn()
  }, function () {})

  var tabItem5 = $('.tabitem4_ul');
  tabItem5.eq(0).find('.pic_content').show()
  tabItem5.eq(0).css('font-weight', "bold")
  for (var index = 0; index < tabItem5.length; index++) {
    tabItem5.eq(index).hover(function () {
      // 点击的时候先判断当前的div是否为隐藏的，如果是则显示并把其他兄弟的隐藏，
      // 如果当前元素不是隐藏的，则把当前的隐藏
      if ($(this).find('.pic_content').css('display') == 'block') {
        $(this).css('font-weight', "bold")
      } else {
        $(this).find('.pic_content').show()
        $(this).siblings().find('.pic_content').hide()
        $(this).css('font-weight', "bold")
        $(this).siblings().css('font-weight', "400")
      }
    })
  }

  // 二级页问政
  var tab5 = $('.tabitem5_ul');
  for (var index = 0; index < tab5.length; index++) {
    tab5.eq(index).click(function () {
      // 点击的时候先判断当前的div是否为隐藏的，如果是则显示并把其他兄弟的隐藏，
      // 如果当前元素不是隐藏的，则把当前的隐藏
      if ($(this).find('.pic_content').css('display') == 'block') {
        $(this).find('.pic_content').hide()
      } else {
        $(this).find('.pic_content').show()
      }
    })
  }

  // 二级页随手拍
  var shoot = $('.shoot');
  shoot.hover(function () {
    $(this).find('.img_small_contain_img1').css("border", '2px solid #0068B7');
    $(this).find('.img_small_contain_title').show();
    $(this).find('.img_small_contain_img').css('opacity', '1');
  }, function () {
    $(this).find('.img_small_contain_img1').css("border", 'none');
    $(this).find('.img_small_contain_title').hide();
    $(this).find('.img_small_contain_img').css('opacity', '0.5');
  })

  //国内国际
  var redTitle = $('.guoneiguoji ul li')
  redTitle.hover(
    function () {
      $(this).find('a').css("color", '#0068B7');
    },
    function () {
      $(this).find('a').css("color", '#555555');
    }
  );

  // 导航栏
  $(".tablist li").on("click", function () {
    var i = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".newspaper-pic li").eq(i).show().siblings().hide();
  })

  $(".wrap_seven a").on({
    mouseover: function () {
      $(this).find("p").show();
    },
    mouseout: function () {
      $(this).find("p").hide();
    }
  })
  // 二级导航栏字体大小
  $('.level-nav li a').css('font-weight', '500');

  $(".nav_item").on({
    mouseover: function () {
      $(this).addClass("nav_item_active");
      $(this).siblings().removeClass("nav_item_active");
      $(this).find(".level-nav").show();
    },
    mouseout: function () {
      $(this).find(".level-nav").hide();
    }
  })

  $(".level-nav li").on({
    mouseover: function () {
      $(this).addClass("on");
    },
    mouseout: function () {
      $(this).removeClass("on");
    }
  })

  // 随手拍
  var swiper1 = new Swiper('.swiper-container1', {
    slidesPerView: 1.8,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  // 切换图片
  var news_background_content = $('.news_background_content');
  news_background_content.find('.news_background_bofang1').click(function () {
    $(this).hide();
    news_background_content.find('.news_background_bofang').show();
    audio.play();
  })
  news_background_content.find('.news_background_bofang').click(function () {
    $(this).hide();
    news_background_content.find('.news_background_bofang1').show();
    audio.pause();
  })

  // 走马灯
  function Index() {};
  $.extend(Index.prototype, {
    init: function () {
      this.initSwiper();
    },
    initSwiper: function () {
      new Swiper('.swiper-container', {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'my_bullet',
          bulletActiveClass: 'my_bullet_active'
        }
      })
    }
  })

  $(".wrap_seven a").find("p").hide();
  // IE8();
  var index = new Index();
  index.init();

  if ($('#shareqq')) {
    $('#shareqq').click(function () {
      window.open('http://connect.qq.com/widget/shareqq/index.html?url=' + document.location.href);
    })
  }
  // 分享qq
  if ($('#shareweixin')) {
    $('#shareweixin').click(function () {
      window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + document.location.href);
    })
  }
  if ($('#shareweibo')) {
    $('#shareweibo').click(function () {
      window.open('http://service.weibo.com/share/share.php?url=' + document.location.href);
    })
  }

  // 用公平台放大
  $('.recruitment').hover(
    function () {
      $(this).find('.change_da').show();
    },
    function () {
      $(this).find('.change_da').hide();
    }
  );
})