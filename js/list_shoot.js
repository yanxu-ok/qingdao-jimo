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
// var currectCateId; // 传递过来的栏目名称

// 获取当前问号之后的条件
var url = window.location.search;
var str = url.substr(1);
var t = $('.navigation ul li');

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
        // 分页总数
        total(templateId, res.data)
        // 位置
        position(templateId, currectCateId, res.data)
        renderHtml(res.data, templateId, nodeId)
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

function requestUrl(num) {
  request(_URL + "/app/snapshot?" + '_orgid_=' + jiGouId + '&page=' + num + '', 'Get', 'department', 'myHeader_contain');
}

// 分页总数
function total(templateId, data) {
  if (templateId == 'department') {
    sum = Math.ceil((data.total / 20))
    document.getElementById('sum').innerHTML = '共' + sum + '页';
  } else {
    return;
  }
}

// 當前位置
function position(templateId, currectCateId, data) {
  // if (templateId == 'department') {
  //   t.eq(1).find('a').text('随手拍' + '>');
  //   // t.eq(2).find('a').text(data.infos[0].catename);
  // } else return;
  t.eq(1).find('a').text('随手拍');
}

// 获取当前栏目id
function getCateId() {
  var str1 = str.split('&')[0]
  currectCateId = str1.split('=')[1];
}

$(function () {
  // getCateId();

  // currect 当前页
  var currect = 1;

  // 页面加载先请求第一页
  requestUrl(1);

  // 首页点击重新获取
  $('#index_page').click(function () {
    requestUrl(1);
  })

  // 分页 点击事件
  var pages = $('#page_1,#page_2,#page_3');
  for (var index = 0; index < pages.length; index++) {
    pages.eq(index).click(function (e) {
      currect = e.target.innerHTML;
      requestUrl(currect);
    })
  }

  //下一页
  $('#xia_page').click(function () {
    if (currect >= sum) {
      return;
    }
    currect++;
    requestUrl(currect);
  })

  // 上一页
  $('#shang_page').click(function () {
    if (currect <= 1) {
      return;
    }
    currect--;
    requestUrl(currect);
  })

  // 跳转
  $('#currect').keydown(function (e) {
    if (e.target.value > sum) {
      return;
    }
    currect = e.target.value;
    requestUrl(currect)
  })

  // 末页
  $('#end_page').click(function (e) {
    currect = sum
    requestUrl(currect)
  })

  // 头部
  request('', 'GET', 'search1', 'search_contain');
  $('#search_a').click(function (e) {
    $(this).attr('href', '/search.html?keyword=' + $('#searchId').val());
  })

  // 相关新闻
  request(_URL + "/app/article?flag=2&_orgid_=" + jiGouId, 'Get', 'related', 'related_contain');

  // 本地新闻
  request(_URL + "/app/article?flag=1&_orgid_=" + jiGouId, 'Get', 'local', 'local_contain');

  // 头条新闻
  request(_URL + "/app/article?flag=3&_orgid_=" + jiGouId, 'Get', 'headlines1', 'headlines_contain');
})