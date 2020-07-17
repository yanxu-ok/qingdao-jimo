//事件绑定 兼容ie8
function addEvent(element, type, handel) {
  if (element.addEventListener) {
    element.addEventListener(type, handel, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, handel);
  } else {
    element["on" + type] = null;
  }
}

//解除绑定
function removeEvent(element, type, handler) {
  if (element.removeEventListener) {
    element.removeEventListener(type, handel, false);
  } else if (element.detachEvent) {
    element.detachEvent("on" + type, handel);
  } else {
    element["on" + type] = null;
  }
}

//获得事件 ie为window.event
function getEvent(event) {
  return event ? event : window.event;
}

//获得事件目标 ie 为srcElement
function getTarget(event) {
  return event.target || event.srcElement;
}

//获取元素节点
function _(id) {
  return document.getElementById(id);
}

//获取标签名
function getElementsByTagName(id) {
  return document.getElementsByTagName(id);
}

//获取选择器的所有节点，返回的是一个类数组
function getSelectorAll(id) {
  return document.querySelectorAll(id);
}

// 获取浏览器的类型
function getBrowserType() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isOpera = userAgent.indexOf("Opera") > -1;
  //判断是否Opera浏览器
  if (isOpera) {
    return "Opera"
  };
  //判断是否Firefox浏览器
  if (userAgent.indexOf("Firefox") > -1) {
    return "FF";
  }
  //判断是否chorme浏览器
  if (userAgent.indexOf("Chrome") > -1) {
    return "Chrome";
  }
  //判断是否Safari浏览器
  if (userAgent.indexOf("Safari") > -1) {
    return "Safari";
  }
  //判断是否IE浏览器
  if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
    return "IE";
  }
  //判断是否Edge浏览器
  if (userAgent.indexOf("Trident") > -1) {
    return "Edge";
  };
}