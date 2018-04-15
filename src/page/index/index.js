'use strict';
require('page/common/nav/nav.js');
require('page/common/header/header.js');
var navSide = require('page/common/nav-side/nav-side.js');
var _mm  = require('../../util/mm.js');


navSide.init({
	name : 'order-list'
});











/* 
console.log(_mm.getUrlParam('?keyword'));

//要渲染的html模板
var html = '<div>{{data}}</div> <p>{{data}}</p><img src="../../src/image/icon/loading.gif"><i class="fa fa-user"></i>';
var data = {
	data : 345
}

//渲染html,方法在mm.js中
//$('body').html(_mm.renderHtml(html,data));

*/