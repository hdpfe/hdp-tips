var  $ = require('jquery');
require('./tips.css');

var $tips;     //当前页面上实例
var tid;       //timeoutId

var tpl = require('./tips.tpl');

function showTips(type,content,timeout){
    $tips && $tips.remove();
    tid && clearTimeout(tid);

    $tips = $(tpl({
        type:type,
        content:content
    })).appendTo('body');

    $tips.css({
        'margin-top':-$tips.height() / 2,
        'margin-left':-$tips.width() / 2
    });

    if(timeout){
        tid = setTimeout(function(){
            $tips && $tips.remove();
            $tips = null;
        },timeout);
    }
}

module.exports = {
    info:function(content,timeout){
        timeout = (typeof timeout === 'undefined') ? 5000 : 0;
        content = content || "此功能正在开发,如果您迫切需要这个功能,请联系我们客服";
        showTips('info',content,timeout);
    },
    fail:function(content,timeout){
        timeout = (typeof timeout === 'undefined') ? 5000 : 0;
        content = content || '服务器异常,请重试';
        showTips('fail',content,timeout);
    },
    success:function(content,timeout){
        timeout = (typeof timeout === 'undefined') ? 5000 : 0;
        content = content || '操作成功';
        showTips('success',content,timeout);
    },
    loading:function(content,timeout){
        content = content || '正在加载数据';
        showTips('loading',content,timeout);
    },
    hide:function(){
        $tips && $tips.remove();
        $tips = null;
    }
}