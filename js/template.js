$(function () {
  // 菜单导航
  var navCurIndex = $('.js-nav .nav_main_item.active').index()
  console.log(navCurIndex)
  var jsNav = $('.js-nav .nav_main_item')
  jsNav.hover(function () {
    jsNav.removeClass('active')
    $(this).addClass('active').find('.nav_sub').stop().slideDown()
  }, function () {
    jsNav.eq(navCurIndex).addClass('active')
    $(this).removeClass('active').find('.nav_sub').stop().slideUp()
  })

  // 切换一
  var timer01 = null;
  var tabItem = $('.tab_item_01');
  var tabItemIndex = 0;

  function showCnt(tabItemIndex) {
    var curUrl = $('.tab_item_01').eq(tabItemIndex).data("url");
    console.log(curUrl)
    $('#showMore').attr("href", curUrl);
    $('.tab_item_01').removeClass('active').eq(tabItemIndex).addClass('active');
    $('.tab_cnt_01').hide().eq(tabItemIndex).fadeIn(300);
  }

  tabItemIndex++;
  timer01 = setInterval(function () {
    showCnt(tabItemIndex);
    tabItemIndex++;
    if (tabItemIndex > tabItem.length - 1) {
      tabItemIndex = 0;
    }
  }, 5000)

  tabItem.hover(
    function () {
      clearInterval(timer01);
      var curUrl = $(this).data("url");
      tabItemIndex = $(this).index();
      tabItem.removeClass('active');
      $(this).addClass('active');
      $('#showMore').attr("href", curUrl);
      $(this).parents(".tab_header").siblings().hide().eq(tabItemIndex).fadeIn(300);
    },
    function () {
      tabItemIndex = $(this).index() + 1;
      timer01 = setInterval(function () {
        showCnt(tabItemIndex);
        tabItemIndex++;
        if (tabItemIndex > tabItem.length - 1) {
          tabItemIndex = 0;
        }
      }, 5000)
    }
  )

  // TAB 2
  var tabItem2 = $('.tab_item_02');
  tabItem2.on('click', function () {
    var curUrl = $(this).data("url");
    $('#showMore2').attr("href", curUrl);
    tabItem2.removeClass('active').eq($(this).index()).addClass('active');
    $('.tab_cnt_02').hide().eq($(this).index()).fadeIn(300);
    return false;
  })

  // 切换3 今日高密 报纸tab切换
  var tabItem3 = $('.one_date');
  tabItem3.hover(function () {
    tabItem3.removeClass('active_paper');
    $(this).addClass('active_paper');
    $('.paper_pic').stop().hide().eq($(this).index()).fadeIn()
  }, function () {

  })

  // 幻灯1 图说高密
  var mySwiper01 = new Swiper('.swiper-container01', {
    autoplay: 4000,
    loop: true,
    slidesPerView: 6,
    // pagination: '.pagination',
    // paginationClickable: true
  })

  // 幻灯2 部门列表
  var mySwiper02 = new Swiper('.swiper-container02', {
    autoplay: 4000,
    loop: true,
    pagination: '.pagination',
    paginationClickable: true
  })
  // var btnPrev01 = $('.swiper-container01 .swiper-button-prev')
  // var btnNext02 = $('.swiper-container01 .swiper-button-next')
  // btnPrev01.on('click', function (e) {
  //   e.preventDefault();
  //   mySwiper01.swipePrev();
  // });
  // btnNext02.on('click', function (e) {
  //   e.preventDefault();
  //   mySwiper01.swipeNext();
  // });
  // $('.swiper-container').hover(function () {
  //   $('.swiper-button-prev,.swiper-button-next').fadeIn(300);
  // }, function () {
  //   $('.swiper-button-prev,.swiper-button-next').fadeOut(300);
  // });

});