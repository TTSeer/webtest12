/* global _czc,_hmt, $, gtag ,_taq*/

function chatClick(num) {
  if (typeof _czc !== 'undefined') {
    _czc.push(['_trackEvent', '点击复制' + num, '关注微信']);
  }
  if (typeof _hmt !== 'undefined') {
    _hmt.push(['_trackEvent', '点击复制' + num, '关注微信']);
  }
  if (typeof gtag !== 'undefined') {
    gtag('event', '点击'+num, {'event_category': '按钮'+num,'event_label': 'click','value': 1});
  }
  return
}

// QQ统计
function qqClick(num) {
  if (typeof _czc !== 'undefined') {
    _czc.push(['_trackEvent', '点击加群' + num, '加Q群']);
  }
  if (typeof _hmt !== 'undefined') {
    _hmt.push(['_trackEvent', '点击加群' + num, '加Q群']);
  }
  if (typeof gtag !== 'undefined') {
    gtag('event', '点击加群' + num, { event_category: '按钮' + num });
  }
  return;
}

// 今日头条
function Toutiao(convert_id) {
  _taq.push({ convert_id: convert_id, event_type: 'wechat' });
}

// 腾讯
//   eid 是行为源ID 目前是运营部提供
//  action 目前默认用 'click'
function TClick(eid, action) {
  $.ajax({
    url: 'https://tg01.lanyife.com.cn/index.php',
    type: 'GET',
    dataType: 'jsonp',
    data: {
      r: 'api/te-report/report',
      eid: eid,
      action: action,
    },
  });
}

var IMGS = {
  banner1: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner1.2d9fdf8d.png',
  banner2: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner2.f024379b.jpg',
  banner3: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner3.f57b3f5c.png',
  banner4: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner4.ddfb5d72.png',
  banner5: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner5.d46fc14b.png',
  banner6: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner6.8809aed3.png',
  banner7: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner7.5b81a788.png',
  banner8: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner8.33a659f9.png',
  banner9: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner9.33a0e762.png',
  banner10: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner10.a23dfbda.jpg',
  banner11: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/btn1.09c3343f.gif',
  banner12: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner12.31c82ae6.jpg',
  banner13: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner13.82d54fe2.png',
  banner14: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner14.576526d7.jpg',
  banner15: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner15.1ec89713.png',
  banner16: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner16.26b278cb.png',
  banner17: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner17.d2aa3371.png',
  banner18: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner18.11e4f16d.png',
  banner19: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner19.54376bf4.png',
  banner20: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner20.6df882b3.png',
  banner21: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner21.12dce221.jpg',
  banner22: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner22.2125795f.png',
  banner23: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner23.129cf859.png',
  banner24: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner24.7cccf365.png',
  banner25: 'http://7xw10e.com1.z0.glb.clouddn.com/yyActivity/static/media/banner25.a5ade8dd.png',
};

function replaceImg(num) {
  $('[data-img]').each(function(_, el) {
    var $el = $(el);
    var imgSrc = IMGS[$el.data('img')];

    if (!imgSrc) {
      return;
    }

    if ($el.prop('tagName') === 'IMG') {
      $el.attr('src', imgSrc);
    } else {
      $el.css('backgroundImage', 'url(' + imgSrc + ')');
    }
  });
  return;
}

replaceImg();

/*
* @url: 获取当前url传入就行了
* @dec: 奇虎360 OCPC监测
* */
function QClick(url) {
  const imId = url.indexOf('impression_id=')>=0?url.split('?')[1].split('=')[1].split('&')[0]:'' ;
  const exId = url.indexOf('exchange_id=')>=0?url.split('?')[1].split('=')[2]:'' ;
  $.ajax({
    url: 'http://tg.lanyicj.com.cn/',
    type: 'GET',
    dataType: 'jsonp',
    data: {
      r: 'api/qihu/active',
      impression_id: imId,
      exchange_id:exId
    },
  });
}
//跳转到微信京东链接
/*
* @dec: 跳转到微信界面显示二维码
* @wxID: 需要获取当前页面的微信号
* */
function goWx (wxId) {
  window.location.href = " http://tg.lanyicj.com.cn/index.php?r=open/open-ticket&name="+wxId
}



