var _URL = 'https://app.iqilu.com/v1';
var jiGouId = 221; // 机构id

var cateIds = [17929, 15939, 14335, 14307, 14769, 14459, 14393, 14317];
//栏目ID, 媒体Id 17929,  在线政务服务15939, 墨视频 14335,直播14307, 时政 14769, 民生 14325,综合 14393,国内国际 14317

var zuJianId = {
  article: 1500,
  party: 1501,
  tv: 1502,
  radio: 1503,
  wmsj: 1504,
  zw: 1505,
  osps: 1506, // 政务号
  osps_1: 1507, // 资讯
  sjzzx: 1508 // 实践站资讯
}

// url 请求路径
// type 请求类型
// templateId 模板id
// nodeId  被渲染的id
function request(url, type, templateId, nodeId) {
  console.log(templateId, url)
  if (url != '') {
    $.ajax({
      url: url,
      type: type,
      dataType: 'jsonp',
      jsonp: 'cqcallback',
      success: function (res) {
        var askList = res.data;
        renderHtml(askList, templateId, nodeId);
      }
    })
  } else {
    renderHtml(true, templateId, nodeId);
  }
}

// 招聘
function requestZhaopin(url, type, templateId, nodeId) {
  console.log(templateId, url)
  $.ajax({
    url: url,
    type: type,
    success: function (res) {
      var res = JSON.parse(res)
      var askList = res.data.list;
      renderHtml(askList, templateId, nodeId);
    }
  })
}

// 渲染模板
function renderHtml(askList, templateId, nodeId) {
  if (!askList || askList.length === 0) {
    askList = [];
    return;
  }
  var data = {
    message: askList
  };
  console.log(templateId, data.message);
  var htmlStr = template(templateId, data);
  document.getElementById(nodeId).innerHTML = htmlStr;
}

$(function () {
  // 获取当前时间
  var date = init();
  $('.tianqi').text(date);
  $('.head_news_date2').text(date);
  $('.tianqi').text(date);

  //头条文稿
  // request(_URL + '/app/article?flag=2&_orgid_=' + jiGouId, 'Get', 'headerGetArticle1', 'headlines');

  // //头部文稿
  // request(_URL + '/app/article?flag=1&_orgid_=' + jiGouId, 'Get', 'headerGetArticle', 'getArticle');

  // //幻灯片
  request(_URL + '/app/article/focus?_orgid_=' + jiGouId, 'POST', 'slides', 'swiper_wrapper');

  // //民生
  request(_URL + '/app/article/common/json?' + 'cateid=' + cateIds[5] + '&_orgid_=' + jiGouId, 'Get', 'livelihood', 'livelihood_contain');


  // //幻灯下
  request(_URL + '/app/play/tv/live?_orgid_=' + jiGouId, 'Get', 'my-video', 'dianshi_contain');

  // //随手拍
  request(_URL + '/app/snapshot?_orgid_=' + jiGouId, 'Get', 'shoot', 'shoot_contain');

  // // 直播
  request(_URL + '/app/live?page=1&_orgid_=' + jiGouId, 'Get', 'now_video', 'now_video_contain');

  // // 最新问政
  request(_URL + '/osps/app/govask/recent?' + '_orgid_=' + jiGouId, 'Get', 'latest_question', 'latest_question_contain');

  // // 即墨新闻
  request(_URL + '/app/article/common/json/?cateid=14457&_orgid_=' + jiGouId, 'Get', 'news', 'news_contain');

  // // 即墨号
  request(_URL + '/govnum/app/index/recommendArticle?_orgid_=' + jiGouId, 'Get', 'news1', 'news_contain1');

  // // 掌上生活
  request(_URL + '/app/icongrid/fuwu?_orgid_=' + jiGouId, 'GET', 'life', 'life_number_contain');

  // 新即墨报
  request(_URL + '/app/article/common/json?_orgid_=' + jiGouId + '&cateid=' + 24031, 'GET', 'jimobao', 'jimobao_contain');

  // 即墨招聘
  requestZhaopin('https://app-job.iqilu.com/wap/jobs?_orgid_=' + jiGouId, 'get', 'zhaopin', 'zhaopin_contain');

  // 头部搜索
  // request('', 'GET', 'search1', 'search_contain');
  // $('#search_a').click(function (e) {
  //   console.log(1);
  //   $(this).attr('href', './list_search.html?keyword=' + $('#searchId').val());
  // })
  var isOpen = false
  $('#baoliao').click(function () {
    isOpen = !isOpen;
    if (isOpen) {
      $('.modal').show();
      $('.container').show();
      $('body').css("overflow", "hidden")
    } else {
      $('.modal').hide();
    }
  })
  $('.close').click(function () {
    $('.modal').hide();
    isOpen = false;
    $('body').css("overflow", "auto")
  })
})