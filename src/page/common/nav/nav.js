/*
* @Author: lx
* @Date:   2018-03-25 19:30:28
* @Last Modified by:   lx
* @Last Modified time: 2018-03-27 23:54:37
*/

"use strict";
require('./nav.css');
var _mm     = require('util/mm.js');
//var _user   = require('service/user-service.js');
//var _cart   = require('service/cart-service.js');
// 导航
var nav = {
    init : function(){
        this.bindEvent();
        // this.loadUserInfo();
        // this.loadCartCount();
        return this;
    },
    bindEvent : function(){
        // 登录点击事件
        $('.js-login').click(function(){
            _mm.doLogin();
        });
        // 注册点击事件
        $('.js-register').click(function(){
            window.location.href = './user-register.html';
        });
        // 退出点击事件
        $('.js-logout').click(function(){
            _user.logout(function(res){
                window.location.reload();
            }, function(errMsg){
                _mm.errorTips(errMsg);
            });
        });
    },
   
};

module.exports = nav.init();