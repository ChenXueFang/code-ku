//通过id获取元素
function getId(id){
	return document.getElementById(id);
}

//通过标签名获取元素数组
function getEle(ele){
	return document.getElementsByTagName(ele);
}

//通过类名获取元素
function getClass(cls){
	//1.找到所有标签,ff不支持
	var elem = document.all?document.all:document.getElementsByTagName("*");
	//2.新建空数组
	var arr = [];
	//3.遍历一下所有的元素
	for (var i=0;i<elem.length;i++){
		if(elem[i].className == cls){
			arr.push(elem[i]);
		}
	}
	return arr;
}

//通过id和类名获取元素
function getIdClass(id,cls){
	var pid = document.getElementById(id);
	//1.找到所有标签,ff不支持
	var elem = pid.all?pid.all:pid.getElementsByTagName("*");
	//2.新建空数组
	var arr = [];
	//3.遍历一下所有的元素
	for (var i=0;i<elem.length;i++){
		if(elem[i].className == cls){
			arr.push(elem[i]);
		}
	}
	return arr;
}

//获取样式
function getStyle(ele,attr){
	if(ele.currentStyle){
		return ele.currentStyle[attr];
	}else{
		return window.getComputedStyle(ele,null)[attr];
	}
}

//获取第一个孩子
function firstC(obj){
	if(obj.firstElementChild){
		//现代浏览器
		return obj.firstElementChild;
	}else{
		//IE678
		return obj.firstChild;
	}
}

//获取最后一个孩子
function lastC(obj){
	if(obj.lastElementChild){
		//现代浏览器
		return obj.lastElementChild;
	}else{
		//IE678
		return obj.lastChild;
	}
}

//获取上一个兄弟
function previousS(obj){
	if(obj.previousElementSibling){
		return obj.previousElementSibling;
	}else{
		return obj.previousSibling;
	}
}

//获取下一个兄弟
function nextS(obj){
	if(obj.nextElementSibling){
		return obj.nextElementSibling;
	}else{
		return obj.nextSibling;
	}
}


// 事件 
// 事件监听
// obj 事件对象
// eventName 事件类型
// handler 方法
function addEventHandler(obj,eventName,handler){
	if(document.attachEvent){
		obj.attachEvent("on"+eventName,handler);
	}else{
		obj.addEventListener(eventName,handler,false);
	}
}

//移除事件
function removeEventHandler(obj,eventName,handler){
	if(document.attachEvent){
		obj.detachEvent("on"+eventName,handler);
	}else{
		obj.removeEventListener(eventName,handler,false);
	}
}

//获取事件对象
function eventTaget(evt){
	var evt = evt||window.event;
	var targetEle = evt.target || evt.srcElement;
	return targetEle;
}

//阻止冒泡 
function stopBubble(evt){
	var evt = evt||window.event;
	if(evt.stopPropagation){
		evt.stopPropagation();
	}else{
		evt.cancelBubble = true;
	}
}

//阻止浏览器默认行为
function preDefault(evt){
	var evt = evt||window.event;
	if(evt.preventDefault){
		evt.preventDefault();
	}else{
		evt.returnValue = false;
	}
}