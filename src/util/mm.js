 /*
 *
 *@Author:LX
 *网络数据功能请求
 *
 */


'use strict';
var Hogan  = require('hogan.js');
var conf = {
    serverHost : ''
}
var _mm  = {
  // 网络请求
    request : function(param){
        var _this = this;
        $.ajax({
            type        : param.method  || 'get',
            url         : param.url     || '',
            dataType    : param.type    || 'json',
            data        : param.data    || '',
            success     : function(res){
                // 请求成功
                if(0 === res.status){
                    typeof param.success === 'function' && param.success(res.data, res.msg);//判断类型是否为函数，是就调用回调
                }
                // 没有登录状态，需要强制登录
                else if(10 === res.status){
                    _this.doLogin();
                }
                // 请求数据错误
                else if(1  === res.status){
                    typeof param.error === 'function' && param.error(res.msg);
                }
            },
            error       : function(err){
                typeof param.error === 'function' && param.error(err.statusText);
                //错误信息一般在statusText字段里
            }
        });
    },

    //获取服务器地址
    getServerUrl : (path)=>{
        return conf.serverHost + path;
    }, 
    //获取url参数
    getUrlParam  : (name)=>{
         var reg    = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');//匹配非&一直匹配，到&结束或字符串末尾
         var result = window.location.search.substr(1).match(reg);
         return result ? decodeURIComponent(result[2]) : null;
    },
    //渲染html模板
    renderHtml   : (htmlTemplate,data)=>{
        var template = Hogan.compile(htmlTemplate),
            result   = template.render(data);
            return result;
    },

    //成功提示
    successTips : (msg)=>{
        alert(msg || '操作成功！');
        },
    //错误提示
    errorTips   : (msg)=>{
        alert(msg || '哪里不对了吧');
        },
    //字段验证，支持是否为空、手机、邮箱
    validate    : (value,type)=>{
        var value = $.trim(value);
        //非空验证
        if ('require' === type) {
            return  !!value;
        }
        //手机验证
        if ('phone'   === type) {
            return /^1\d{10}$/.test(value);
        }
        //邮箱验证
        if ('email'   === type) {
            return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(value);
        }
    },
    // 统一登录处理
    doLogin      : ()=>{
 	  window.location.href = '/user-login.html?redirect='+encodeURIComponent(window.location.href);
     },
    goHome       : ()=>{
    window.location.href = './index.html';
    }
};

module.exports=_mm;