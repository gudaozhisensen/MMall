/*
* @Author: lx
* @Date:   2018-03-27 20:50:08
* @Last Modified by:   lx
* @Last Modified time: 2018-03-27 23:38:53
*/
//'use strict';
require('./header.css');
var _mm     = require('util/mm.js');

// 页面头部
var header = {
	//打开页面时调用函数
	//函数的调用
	init : function(){
		console.log('qwq');
		 this.onLoad();
		 this.bindEvent();
		
	},

    // 信息回填进搜索框中
    onLoad :function(){
    	var keyword = _mm.getUrlParam('keyword');
    	//keyword存在，则回填输入框
    	if(keyword){
    		$('#search-input').val(keyword);
    	};
    },

    bindEvent   :function(){
    	var _this = this;
    	//点击搜索按钮后，进行搜索提交
    	$('#search-btn').click(()=>{
    		console.log('click');
    		_this.searchSubmit();
    	}); 
    	//输入回车后，进行搜索操作
    	$('#search-input').keyup((e)=>{
    		if(e.keyCode === 13){
    			//13是回车键的keycode
    			_this.searchSubmit();
    		}
    	})
    },

    //搜索的提交
    searchSubmit :function(){
    	var keyword = $.trim($('#search-input').val());
    	if (keyword) {
    		//根据keyword定位到指定的html中
    		window.location.href = './list.html?keyword=' + keyword;
    	}else{
    		//如果keyword为空，直接返回首页
    		_mm.goHome();
    	}
    }

};

header.init();