var _URL = 'https://app.iqilu.com/v1';
var jiGouId = 221; // 机构id

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
// var currectCateId; // 当前栏目ID
// var articleId; // 文稿ID

// 获取当前问号之后的条件
var url = window.location.search;
var str = url.substr(1);

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
        renderHtml(res.data, templateId, nodeId)
      }
    })
  } else {
    renderHtml(true, templateId, nodeId);
  }
}

// 获取当前栏目id 和 articleId
// function getCateId() {
//   var str1 = str.split('&')[0]
//   articleId = str1.split('=')[1];
//   var str2 = str.split('&')[1]
//   currectCateId = str2.split('=')[1];
// }

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
  //getCateId();

  // 页面显示内容
  // request(_URL + '/app/article/detail?id=' + articleId + '&_orgid_=' + jiGouId, 'Get', 'headerGetArticle', 'headlines');

  // 相关新闻
  request(_URL + "/app/article/common/json?flag=2&_orgid_=" + jiGouId + '&cateid=' + currectCateId, 'Get', 'related', 'related_contain');

  // 本地新闻
  request(_URL + "/app/article/common/json?flag=1&_orgid_=" + jiGouId + '&cateid=' + currectCateId, 'Get', 'local', 'local_contain');

  // 头条新闻
  request(_URL + "/app/article/common/json?flag=3&_orgid_=" + jiGouId + '&cateid=' + currectCateId, 'Get', 'headlines1', 'headlines_contain');

  // 头部
  request('', 'GET', 'search1', 'search_contain');
  $('#search_a').click(function (e) {
    $(this).attr('href', '/search.html?keyword=' + $('#searchId').val());
  })
  // 字体事件
  $(window).load(function () {
    document.getElementById('content').style.cssText = "font-size:14px"
    var number = 14;
    // $('#content').css('font-size', number + 'px')
    $('#btn_button1').click(function () {
      if (number == 25) {
        return;
      }
      number++;
      $('#content').css('font-size', number + 'px')
    })
    $('#btn_button2').click(function () {
      if (number == 5) {
        return;
      }
      number--;
      $('#content').css('font-size', number + 'px')
    })
  })
})