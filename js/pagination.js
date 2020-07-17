/* 分页 */
/* 获取ul 通过ul获取到所有的li */
var ul = _('ul');
var li = ul.getElementsByTagName('li');
var span = ul.getElementsByTagName('span');
var inputVlue = _('currect');

//设置当前页的背景
li[2].className = 'fl background';

var num = 1; // 首页
var sum; //总数
//页面一加载先往li中填写内容
content(1);

//把所有的背景颜色去掉，给指定的分页添加背景颜色
function background(index) {
  for (var i = 0; i < li.length; i++) {
    li[i].className = 'fl';
    li[index].className = 'fl background';
  }
}

//循环填写内容 在类数组第三项开始依次填写
function content(num) {
  for (var i = 0; i < li.length - 4; i++) {
    li[i + 2].innerHTML = num;
    num++;
  }
}

//首页点击事件
addEvent(li[0], 'click', function () {
  num = 1;
  //设置背景色
  background(2);
  // 将当前页设为1
  //填写内容
  content(num);
})

//末页点击事件
addEvent(li[li.length - 1], 'click', function () {
  //设置背景色
  background(4);
  // 将当前页设为最后
  num = sum - 2;
  //填写内容
  content(num);
})

//上一页点击事件
addEvent(li[1], 'click', function () {
  //先循环 
  for (var j = 0; j < li.length - 4; j++) {
    if (li[j + 2].className == 'fl background' && li[j + 2].innerHTML != 1) {
      if (j + 2 != 2) {
        background(j + 1);
      }
      if (j + 2 == 2) {
        num--;
        content(num);
      }
      break;
    }
  }
})

//下一页点击事件
addEvent(li[li.length - 2], 'click', function () {
  //先循环 
  for (var i = 0; i < li.length; i++) {
    // 在当前
    if (li[i].className == 'fl background' && li[i].innerHTML < sum) {
      if (i + 1 < li.length - 2) {
        background(i + 1);
      }
      if (i + 1 == li.length - 2) {
        num++;
        content(num);
      }
      break;
    }
  }
})

// 分页的点击事件 用闭包
for (var i = 0; i < li.length - 4; i++) {
  (function (i) {
    //对象身上存着变量
    li[i + 2].index = i + 2;
    addEvent(li[i + 2], 'click', function (e) {
      //如果是 ie8的话需要这个方法
      var event = getEvent(e);
      var index = getTarget(event).index;
      background(index);
    })
  })(i);
}

// 跳转的方法
addEvent(inputVlue, 'keydown', function (e) {
  //如果是 ie8的话需要这个方法
  var event = getEvent(e);
  var target = getTarget(event)
  if (event.keyCode == 13) {
    if (target.value > sum) {
      return;
    }
    num = target.value;
    currect = target.value;
    content(target.value);
  }
})