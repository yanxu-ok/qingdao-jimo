// 全局样式
var _URL = 'https://app.iqilu.com/v1';
var jiGouId = 221; // 机构id

var cateIds = [17929, 15939, 14335, 14307, 14769, 14325, 14393, 14317];
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

// 获取当前问号之后的条件
var url = window.location.search;

//显示日期在页面上  yyy-MM-dd
function init() {
  var date = new Date();
  //年
  var year = date.getFullYear();
  //月
  var month = date.getMonth() + 1;
  //日
  var day = date.getDate();
  //时
  var hh = date.getHours();
  //分
  var mm = date.getMinutes();
  //秒
  var ss = date.getSeconds();
  var rq = year + "年" + month + "月" + day + "日";
  return rq;
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
        renderHtml(askList, templateId, nodeId)
      }
    })
  } else {
    renderHtml(true, templateId, nodeId);
  }
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
  // 新闻导航栏
  request(_URL + '/app/article/cate?_orgid_=' + jiGouId, 'Get', 'nav', 'nav_contain');
  // 看电视导航栏
  request(_URL + '/app/article/cate?parentid=' + zuJianId.tv + '&type=tv' + '&_orgid_=' + jiGouId, 'Get', 'nav1', 'nav1_contain');
  // 广播点播导航
  request(_URL + '/app/article/cate?parentid=' + zuJianId.radio + '&type=radio' + '&_orgid_=' + jiGouId, 'Get', 'nav2', 'nav2_contain');
  // 文明实践导航
  request(_URL + '/app/article/cate?parentid=' + zuJianId.wmsj + '&type=osps' + '&_orgid_=' + jiGouId, 'Get', 'nav3', 'nav3_contain');
  // 爆料
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