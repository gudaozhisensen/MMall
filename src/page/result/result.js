/*
* @Author: lx
* @Date:   2018-04-01 00:28:12
* @Last Modified by:   lx
* @Last Modified time: 2018-04-01 14:50:32
*/
'use strict';
require('./result.css');
require('page/common/nav-simple/index.js');
var _mm  = require('../../util/mm.js');


$(function(){
	var type = _mm.getUrlParam('type') || 'default',
	$element = $('.' + type + '-success');
	//显示对应的提示元素
	$element.show();
})