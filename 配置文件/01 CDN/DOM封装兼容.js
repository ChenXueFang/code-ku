//1.通过id获取元素
function getId(id){
	return  document.getElementById(id);
}

//2.通过标签名获取元素数组
function getEle(ele){
	return  document.getElementsByTagName(ele);
}

//3.通过类名获取元素数组
function getClass(cls){
	//找到所有的标签
	var elem = document.all?document.all:document.getElementsByTagName("*");
	//新建数组 
	var arr = [];
	//遍历找到所有标签数组
	for(var i=0; i<elem.length;i++){
		//判断标签数组所有的元素的类名与传进来的参数cls是否相等 
		if(elem[i].className==cls){
			//把具有这个类的元素放进arr数组 
			arr.push(elem[i]);
		}
	}
	//把找到的数组传出去
	return arr;
}

//4.通过id,class获取元素数组
//在id中,找class
function getIdClass(preId,cls){
	//先找id
	var pId = document.getElementById(preId);

	//找到所有的标签
	var elem = pId.all?pId.all:pId.getElementsByTagName("*");
	//新建数组 
	var arr = [];
	//遍历找到所有标签数组
	for(var i=0; i<elem.length;i++){
		//判断标签数组所有的元素的类名与传进来的参数cls是否相等 
		if(elem[i].className==cls){
			//把具有这个类的元素放进arr数组 
			arr.push(elem[i]);
		}
	}
	//把找到的数组传出去
	return arr;
}
//5.获取元素样式 
//ele:元素, attr样式属性(字符串)
function getStyle(ele,attr){
	if(ele.currentStyle){
		return ele.currentStyle[attr];
	}else{
		return window.getComputedStyle(ele,null)[attr];
	}
}

//6.获取前一个兄弟元素节点
//obj 是兄弟
function previous(obj){
	if(obj.previousElementSibling){
		//Ie9及现代浏览器 
		return obj.previousElementSibling;
	}else{
		//IE678
		return obj.previousSibling;
	}
}

//7.获取下一个兄弟元素节点
//obj 是兄弟
function next(obj){
	if(obj.nextElementSibling){
		//Ie9及现代浏览器 
		return obj.nextElementSibling;
	}else{
		//IE678
		return obj.nextSibling;
	}
}

//8.获取第一个孩子(元素)
//obj 是父亲
function firstC(obj){
	if(obj.firstElementChild){
		//Ie9及现代浏览器 
		return obj.firstElementChild;
	}else{
		//IE678
		return obj.firstChild;
	}
}

//9.获取最后一个孩子(元素)
//obj 是父亲
function lastC(obj){
	if(obj.lastElementChild){
		//Ie9及现代浏览器 
		return obj.lastElementChild;
	}else{
		//IE678
		return obj.lastChild;
	}
}
// 事件监听
// 10.事件绑定 
function addEventHandler(obj,eventName,handler){
	if(document.attachEvent){
		//IE
		obj.attachEvent('on'+eventName,handler);
	}else {
		obj.addEventListener(eventName,handler,false);
	}
}

//11.事件移除
function removeEventHandler(obj,eventName,handler){
	if(document.detachEvent){
		//IE
		obj.detachEvent('on'+eventName,handler);
	}else {
		obj.removeEventListener(eventName,handler,false);
	}
}

//12.获取事件目标对象
function eventTarget(evt){
	var event = evt||window.event; 
	var targetElement = event.target||event.srcElement;
	console.log(targetElement);
}

//13.阻止浏览器默认事件 
function preDefault(evt){
	var event = evt||window.event; 
	if(event&&event.preventDefault){
		event.preventDefault();
	}else{
		event.returnValue = false;
	}
}

//14.阻止事件冒泡
function stopBubble(evt){
	var event = evt||window.event;
	if(event&&event.stopPropagation){
		event.stopPropagation();
	}else{
		event.cancelBubble = true;
	}	
}