<!DOCTYPE html>
<html lang='zh-CN'>
<head>
<title>jd_family.js · shuye72/MyActions - Gitee.com</title>
<meta content='on' http-equiv='x-dns-prefetch-control'>
<link href='//e.gitee.com' rel='dns-prefetch'>
<link href='//files.gitee.com' rel='dns-prefetch'>
<link href='//toscode.gitee.com' rel='dns-prefetch'>
<link href='https://assets.gitee.com' rel='dns-prefetch'>
<link href='https://portrait.gitee.com' rel='dns-prefetch'>
<link href="https://assets.gitee.com/assets/favicon-9007bd527d8a7851c8330e783151df58.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
<link href="https://gitee.com/shuye72/MyActions" rel="canonical" />
<meta content='gitee.com/shuye72/MyActions git https://gitee.com/shuye72/MyActions.git' name='go-import'>
<meta charset='utf-8'>
<meta content='always' name='referrer'>
<meta content='Gitee' property='og:site_name'>
<meta content='Object' property='og:type'>
<meta content='http://gitee.com/shuye72/MyActions/blob/main/jd_family.js' property='og:url'>
<meta content='https://gitee.com/static/images/logo_themecolor.png' itemprop='image' property='og:image'>
<meta content='jd_family.js · shuye72/MyActions - Gitee.com' itemprop='name' property='og:title'>
<meta content='Gitee.com（码云） 是 OSCHINA.NET 推出的代码托管平台，支持 Git 和 SVN，提供免费的私有仓库托管。目前已有超过 600 万的开发者选择 Gitee。' property='og:description'>
<meta content='码云,Gitee,代码托管,Git,Git@OSC,Gitee.com,开源,内源,项目管理,版本控制,开源代码,代码分享,项目协作,开源项目托管,免费代码托管,Git代码托管,Git托管服务' name='Keywords'>
<meta content='Gitee.com（码云） 是 OSCHINA.NET 推出的代码托管平台，支持 Git 和 SVN，提供免费的私有仓库托管。目前已有超过 600 万的开发者选择 Gitee。' itemprop='description' name='Description'>

<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="authenticity_token" name="csrf-param" />
<meta content="l26xx+q8nmngwxdhgvfB2+WB24PQjI/aleqvpYmq608=" name="csrf-token" />

<link href="https://assets.gitee.com/assets/application-f72cc8630c5278e51ce060cb46604031.css" media="all" rel="stylesheet" />
<script>
//<![CDATA[
window.gon = {};gon.locale="zh-CN";gon.sentry_dsn=null;gon.baidu_register_hm_push=null;gon.sensor={"server_url":"https://haveaniceday.gitee.com:3443/sa?project=production","page_type":"其他"};gon.info={"controller_path":"blob","action_name":"show","current_user":false};gon.tour_env={"current_user":null,"action_name":"show","original_url":"http://gitee.com/shuye72/MyActions/blob/main/jd_family.js","controller_path":"blob"};gon.http_clone="https://gitee.com/shuye72/MyActions.git";gon.user_project="shuye72/MyActions";gon.manage_branch="管理分支";gon.manage_tag="管理标签";gon.enterprise_id=0;gon.create_reaction_path="/shuye72/MyActions/reactions";gon.ref="main";
//]]>
</script>
<script src="https://assets.gitee.com/assets/static/sensor-5984a2e9c24e9047ba28a1ddc8442b67.js"></script>
<script src="https://assets.gitee.com/assets/static/sentry-5.1.0-a823fb0be1b61c5d7ca4a89f0536cb0a.js"></script>
<script src="https://assets.gitee.com/assets/application-fb4563169034627b7f5b90430f40a8fb.js"></script>
<script src="https://assets.gitee.com/assets/lib/jquery.timeago.zh-CN-4a4818e98c1978d2419ab19fabcba740.js"></script>

<link href="https://assets.gitee.com/assets/projects/application-705b8d764a3d4201795216aad0ed4b70.css" media="all" rel="stylesheet" />
<script src="https://assets.gitee.com/assets/projects/app-ae221407d88e722bf588a6546eab67dd.js"></script>

<script src="//res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script>
  var title = document.title.replace(/( - Gitee| - 码云)$/, '')
      imgUrl = '';
  
  document.addEventListener('DOMContentLoaded', function(event) {
    var imgUrlEl = document.querySelector('.readme-box .markdown-body > img, .readme-box .markdown-body :not(a) > img');
    imgUrl = imgUrlEl && imgUrlEl.getAttribute('src');
  
    if (!imgUrl) {
      imgUrlEl = document.querySelector('meta[itemprop=image]');
      imgUrl = imgUrlEl && imgUrlEl.getAttribute('content'); 
      imgUrl = imgUrl || "https://gitee.com/static/images/logo_themecolor.png";
    }
  
    wx.config({
      debug: false,
      appId: "wxff219d611a159737",
      timestamp: "1618855544",
      nonceStr: "7312680bfc034c1bb5c3d08d2cb20174",
      signature: "4b4615a938cc813e715b5a3a63dcabc404665d57",
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage'
      ]
    });
  
    wx.ready(function () {
      wx.onMenuShareTimeline({
        title: title, // 分享标题
        link: "https://gitee.com/shuye72/MyActions/blob/main/jd_family.js", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl // 分享图标
      });
      wx.onMenuShareAppMessage({
        title: title, // 分享标题
        link: "https://gitee.com/shuye72/MyActions/blob/main/jd_family.js", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        desc: document.querySelector('meta[name=Description]').getAttribute('content'),
        imgUrl: imgUrl // 分享图标
      });
    });
    wx.error(function(res){
      console.error('err', res)
    });
  })
</script>

<script type='text/x-mathjax-config'>
MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    displayMath: [["$$","$$"],["\\[","\\]"]],
    processEscapes: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    ignoreClass: "container|files",
    processClass: "markdown-body"
  }
});
</script>
<script src="https://assets.gitee.com/uploads/resources/MathJax-2.7.2/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

<script>
  (function () {
    var messages = {
      'zh-CN': {
        addResult: '增加 <b>{term}</b>',
        count: '已选择 {count}',
        maxSelections: '最多 {maxCount} 个选择',
        noResults: '未找到结果',
        serverError: '连接服务器时发生错误'
      },
      'zh-TW': {
        addResult: '增加 <b>{term}</b>',
        count: '已選擇 {count}',
        maxSelections: '最多 {maxCount} 個選擇',
        noResults: '未找到結果',
        serverError: '連接服務器時發生錯誤'
      }
    }
  
    if (messages[gon.locale]) {
      $.fn.dropdown.settings.message = messages[gon.locale]
    }
  }());
</script>

<script>
  var userAgent = navigator.userAgent;
  var isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  if(isLessIE11){
    var can_access = ""
    if (can_access != "true"){
      window.location.href = "/incompatible.html";
    }
  }
  document.addEventListener("error", function (ev) {
    var elem = ev.target;
    if (elem.tagName.toLowerCase() === 'img') {
      elem.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAAAAACIM/FCAAACh0lEQVR4Ae3ch5W0OgyG4dt/mQJ2xgQPzJoM1m3AbALrxzrf28FzsoP0HykJEEAAAUQTBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEkKK0789+GK/I2ezfQB522PnS1qc8pGgXvr4tE4aY0XOUWlGImThWgyCk6DleixzE7qwBkg/MGiDPlVVAyp1VQGrPKiACDhFI6VkF5LmzCki+sg7IwDoglnVAil0IMkeG9CyUiwsxLFUVFzJJOQaKCjFCDN9RXMjIX7W6ztZXZDKKCyn8sWJvH+nca7WHDN9lROlAliPH9iRKCPI4cswFJQWxB46toLQgQ9jhn5QYZA9DOkoMUoQde5YapAxDWkoNYsOQR3KQd9CxUnIQF4S49CB9ENKlBxmDEKsFUgMCCCCAAHIrSF61f6153Ajy8nyiPr8L5MXnmm4CyT2fzN4DUvHZ+ntA2tOQBRBAAAEEEEAAAQQQ7ZBaC6TwSiDUaYHQ2yuB0MN+ft+43whyrs4rgVCjBUKTFshLC6TUAjGA3AxSaYFYLZBOC2RUAsk8h5qTg9QcbEoOsoQhQ2qQhsO5xCD5dgB5JQaZ+KBKGtKecvR81Ic0ZDjByKdDx0rSEDZ/djQbH+bkIdvfJFm98BfV8hD2zprfVdlu9PxVeyYAkciREohRAplJCaRSAplJCcQogTjSAdlyHRBvSAekJR0QRzogA+mADJkOiCPSAPEtqYBshlRAXC43hxix2QiOuEZkVERykGyNo9idIZKE0HO7XrG6OiMShlDWjstVzdPgXtUH9v0CEidAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQP4HgjZxTpdEii0AAAAASUVORK5CYII=";
    }
  }, true);
</script>
</head>

<body class='git-project lang-zh-CN large'>
<header class='common-header fixed noborder' id='git-header-nav'>
<div class='ui container'>
<div class='ui menu header-menu'>
<div class='git-nav-expand-bar'>
<i class='iconfont icon-mode-table'></i>
</div>
<div class='gitee-nav__sidebar'>
<div class='gitee-nav__sidebar-container'>
<div class='gitee-nav__sidebar-top'>
<div class='gitee-nav__avatar-box'></div>
<div class='gitee-nav__buttons-box'>
<a class="ui button small fluid orange" href="/login">登录</a>
<a class="ui button small fluid basic is-register" href="/signup">注册</a>
</div>
</div>
<div class='gitee-nav__sidebar-middle'>
<div class='gitee-nav__sidebar-list'>
<ul>
<li class='gitee-nav__sidebar-item'>
<a href="/explore"><i class='iconfont icon-ic-discover'></i>
<span class='gitee-nav__sidebar-name'>开源软件</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/enterprises"><i class='iconfont icon-ic-enterprise'></i>
<span class='gitee-nav__sidebar-name'>企业版</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/education"><i class='iconfont icon-ic-education'></i>
<span class='gitee-nav__sidebar-name'>高校版</span>
</a></li>
<li class='gitee-nav__sidebar-item split-line'></li>
<li class='gitee-nav__sidebar-item'>
<a href="/search"><i class='iconfont icon-ic-search'></i>
<span class='gitee-nav__sidebar-name'>搜索</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/help"><i class='iconfont icon-help-circle'></i>
<span class='gitee-nav__sidebar-name'>帮助中心</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/terms"><i class='iconfont icon-file'></i>
<span class='gitee-nav__sidebar-name'>使用条款</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/about_us"><i class='iconfont icon-issuepx'></i>
<span class='gitee-nav__sidebar-name'>关于我们</span>
</a></li>
</ul>
</div>
</div>
<div class='gitee-nav__sidebar-bottom'>
<div class='gitee-nav__sidebar-close-button'>
<i class='fa fa-angle-double-left'></i>
</div>
</div>
</div>
</div>

<div class='item gitosc-logo'>
<a href="/"><img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline image' height='28' src='/static/images/logo.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='95'>
<img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline black image' height='28' src='/static/images/logo-black.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='95'>
</a></div>
<a class="item " href="/explore" title="开源软件">开源软件
</a><a class="item " href="/enterprises" title="企业版">企业版
<sup class='ui red label'>
特惠
</sup>
</a><a class="item " href="/education" title="高校版">高校版
</a><a class="item" href="https://blog.gitee.com/" id="gitee-blog" target="_blank" title="博客">博客
</a><div class='center responsive-logo'>
<a href="/"><img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline image' height='24' src='/static/images/logo.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='85'>
<img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline black image' height='24' src='/static/images/logo-black.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='85'>
</a></div>
<div class='right menu userbar' id='git-nav-user-bar'>
<form accept-charset="UTF-8" action="/search" class="ui item" data-text-filter="搜索格式不正确" data-text-require="搜索关键字不能少于1个" id="navbar-search-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
<input id="navbar-search-type" name="type" type="hidden" />
<input id="fork_filter" name="fork_filter" type="hidden" value="on" />
<div class='ui search'>
<input class="prompt" id="navbar-search-input" name="q" placeholder="搜开源" type="text" value="" />
</div>
</form>

<script>
  var can_search_in_repo = 1,
      repo = "VFZSVmVFNTZTVE5QUkZKb1RucFplbHBuUFQxaE56WXpaZz09YTc2M2Y=",
      reponame = "shuye72/MyActions";
  
  $(function() {
    var $search = $('#navbar-search-form .ui.search');
    $search.search({
      apiSettings: {
        url: '/search/relative_project?q={query}',
        onResponse: function (res) {
          if (res && res.status === 200 && res.data) {
            var query = htmlSafe($search.search('get value'));
  
            res.data.map(function (item) {
              item.path_ns = '/' + item.path_ns;
              item.icon = 'iconfont icon-project-public';
            });
            res.data.unshift({
              name_ns: "在全站搜索 <b class='hl'>" + query +"</b> 相关项目",
              path_ns: '/search?fork_filter=on&q=' + query,
              icon: 'iconfont icon-search'
            });
            return res;
          } else {
            return { data: [] };
          }
        }
      },
      fields: {
        results: 'data',
        description: 'name_ns',
        url: 'path_ns',
        icon: 'icon'
      },
      minCharacters: 1,
      maxResults: 10,
      searchDelay: 250,
      showNoResults: false,
      transition: 'fade'
    });
  });
</script>

<a class="item git-nav-user__login-item" href="/login" sa_evt="login_show" sa_referrer_action="站导航右上角-登录按钮" sa_referrer_type="其他" sa_referrer_url="">登录
</a><a class="item git-nav-user__register-item" href="/signup" sa_evt="register_show" sa_referrer_action="站导航右上角-注册按钮" sa_referrer_type="其他" sa_referrer_url="">注册
</a><script>
  $('.destroy-user-session').on('click', function() {
    $.cookie('access_token', null, { path: '/' });
  })
</script>

</div>
</div>
</div>
</header>
<script>
  Gitee.initNavbar()
  Gitee.initRepoRemoteWay()
  $.cookie('user_locale',null)
</script>

<script>
  var userAgent = navigator.userAgent;
  var isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  if(isLessIE11){
    var can_access = ""
    if (can_access != "true"){
      window.location.href = "/incompatible.html";
    }
  }
</script>

<div class='fixed-notice-infos'>
<div class='all-messages'>
</div>
<div class='ui container'>
<div class='flash-messages' id='messages-container'></div>
</div>
<script>
  (function() {
    $(function() {
      var $error_box, alertTip, notify_content, notify_options, template;
      template = '<div data-notify="container" class="ui {0} message" role="alert">' + '<i data-notify="dismiss" class="close icon"></i>' + '<span data-notify="message">{2}</span>' + '</div>';
      notify_content = null;
      notify_options = {};
      alertTip = '';
      $error_box = $(".flash_error.flash_error_box");
      if (notify_options.type === 'error' && $error_box.length > 0 && !$.isEmptyObject(notify_content.message)) {
        if (notify_content.message === 'captcha_fail') {
          alertTip = "验证码不正确";
        } else if (notify_content.message === 'captcha_expired') {
          alertTip = "验证码已过期，请点击刷新";
        } else if (notify_content.message === 'not_found_in_database') {
          alertTip = "帐号或者密码错误";
        } else if (notify_content.message === 'not_found_and_show_captcha') {
          alertTip = "帐号或者密码错误";
        } else if (notify_content.message === 'phone_captcha_fail') {
          alertTip = "手机验证码不通过";
        } else {
          alertTip = notify_content.message;
        }
        return $error_box.html(alertTip).show();
      } else if (notify_content) {
        if ("show" === 'third_party_binding') {
          return $('#third_party_binding-message').html(notify_content.message).addClass('ui message red');
        }
        notify_options.delay = 3000;
        notify_options.template = template;
        notify_options.offset = {
          x: 10,
          y: 30
        };
        notify_options.element = '#messages-container';
        return $.notify(notify_content, notify_options);
      }
    });
  
  }).call(this);
</script>

</div>
<script>
  (function() {
    $(function() {
      var setCookie;
      setCookie = function(name, value) {
        $.cookie(name, value, {
          path: '/',
          expires: 365
        });
      };
      $('#remove-bulletin, #remove-bulletin-dashboard').on('click', function() {
        setCookie('remove_bulletin', "gitee-maintain-1617622451");
        $('#git-bulletin').hide();
      });
      $('#remove-member-bulletin').on('click', function() {
        setCookie('remove_member_bulletin', "gitee_member_bulletin");
        $(this).parent().hide();
      });
      return $('#remove-gift-bulletin').on('click', function() {
        setCookie('remove_gift_bulletin', "gitee-gift-bulletin");
        $(this).parent().hide();
      });
    });
  
  }).call(this);
</script>
<script>
  function closeMessageBanner(pthis, type, val) {
    var json = {}
  
    val = typeof val === 'undefined' ? null : val
    $(pthis).parent().remove()
    if (type === 'out_of_enterprise_member') {
      json = {type: type, data: val}
    } else if (type === 'enterprise_overdue') {
      json = {type: type, data: val}
    }
    $.post('/profile/close_flash_tip', json)
  }
</script>

<div class='site-content'>
<div class='git-project-header'>
<div class='fixed-notice-infos'>
<div class='ui info icon floating message green' id='fetch-ok' style='display: none'>
<div class='content'>
<div class='header status-title'>
<i class='info icon status-icon'></i>
代码拉取完成，页面将自动刷新
</div>
</div>
</div>
<div class='ui info icon floating message error' id='fetch-error' style='display: none'>
<div class='content'>
<div class='header status-title'>
<i class='info icon status-icon'></i>
<span class='error_msg'></span>
</div>
</div>
</div>
</div>
<div class='ui container'>

<div class='git-project-header-details'>
<div class='git-project-header-container'>
<div class='git-project-header-actions'>
<div class='ui tiny modal project-donate-modal' id='project-donate-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>捐赠</div>
<div class='content'>
捐赠前请先登录
</div>
<div class='actions'>
<a class='ui blank button cancel'>取消</a>
<a class='ui orange ok button' href='/login'>前往登录</a>
</div>
</div>
<div class='ui small modal wepay-qrcode'>
<i class='iconfont icon-close close'></i>
<div class='header'>
扫描微信二维码支付
<span class='wepay-cash'></span>
</div>
<div class='content weqcode-center'>
<img id='wepay-qrcode' src=''>
</div>
<div class='actions'>
<div class='ui cancel blank button'>取消</div>
<div class='ui ok orange button'>
支付完成
</div>
</div>
</div>
<div class='ui mini modal' id='confirm-alipay-modal'>
<div class='header'>支付提示</div>
<div class='content'>
将跳转至支付宝完成支付
</div>
<div class='actions'>
<div class='ui approve orange button'>
确定
</div>
<div class='ui blank cancel button'>
取消
</div>
</div>
</div>

<span class='ui buttons basic watch-container'>
<div class='ui dropdown button js-project-watch' data-watch-type='unwatch'>
<input type='hidden' value=''>
<i class='iconfont icon-watch'></i>
<div class='text'>
Watch
</div>
<i class='dropdown icon'></i>
<div class='menu'>
<a class="item" data-method="post" data-value="unwatch" href="/shuye72/MyActions/unwatch" rel="nofollow" sa_evt="loginInform_show" sa_referrer_action="Watch" sa_referrer_type="其他" sa_referrer_url=""><i class='iconfont icon-msg-read'></i>
不关注
</a><a class="item" data-method="post" data-value="watching" href="/shuye72/MyActions/watch" rel="nofollow" sa_evt="loginInform_show" sa_referrer_action="Watch" sa_referrer_type="其他" sa_referrer_url=""><i class='iconfont icon-msg-read'></i>
关注所有动态
</a><a class="disabled item" data-method="post" data-value="releases_only" href="/shuye72/MyActions/release_only_watch" rel="nofollow" sa_evt="loginInform_show" sa_referrer_action="Watch" sa_referrer_type="其他" sa_referrer_url=""><i class='iconfont icon-msg-read'></i>
仅关注版本发行动态
</a><a class="item" data-method="post" data-value="ignoring" href="/shuye72/MyActions/ignoring_watch" rel="nofollow" sa_evt="loginInform_show" sa_referrer_action="Watch" sa_referrer_type="其他" sa_referrer_url=""><i class='iconfont icon-msg-read'></i>
关注但不提醒动态
</a></div>
</div>
<style>
  .js-project-watch .text .iconfont {
    display: none; }
  .js-project-watch a, .js-project-watch a:hover {
    color: #000; }
  .js-project-watch .item > .iconfont {
    visibility: hidden;
    margin-left: -10px; }
  .js-project-watch .selected .iconfont {
    visibility: visible; }
  .js-project-watch .menu {
    margin-top: 4px !important; }
</style>
<script>
  $('.js-project-watch').dropdown({
    action: 'select',
    onChange: function(value, text, $selectedItem) {
      var type = value === 'unwatch' ? 'Watch' : 'Watching';
      $(this).children('.text').text(type);
      $(this).dropdown('set selected', value)
    }
  });
</script>

<a class="ui button action-social-count" href="/shuye72/MyActions/watchers" title="19">19
</a></span>
<span class='basic buttons star-container ui'>
<a class="ui button star" href="/login" sa_evt="loginInform_show" sa_referrer_action="Star" sa_referrer_type="其他" sa_referrer_url=""><i class='iconfont icon-star'></i>
Star
</a><a class="ui button action-social-count " href="/shuye72/MyActions/stargazers" title="70">70
</a></span>
<span class='ui basic buttons fork-container' title='无权 Fork 此仓库'>
<a class="ui button fork" href="/login" sa_evt="loginInform_show" sa_referrer_action="Fork" sa_referrer_type="其他" sa_referrer_url="" title="你必须登录后才可以fork一个仓库"><i class='iconfont icon-fork'></i>
Fork
</a><a class="ui button action-social-count disabled-style" href="/shuye72/MyActions/members" title="0">0
</a></span>
</div>
<h2 class='git-project-title'>
<span class="project-title"><i class="project-icon iconfont icon-project-public" title="这是一个公开仓库"></i> <a class="author" href="/shuye72" title="shuye72">shuye72</a> / <a class="repository" href="/shuye72/MyActions" sa_evt="repoClick" sa_location="其他" sa_repo_id="15172784" sa_url="" style="padding-bottom: 0px" target="" title="MyActions">MyActions</a></span><span class="project-badges"><style>
  .gitee-modal {
    width: 500px !important; }
</style>
</span>
<input id="project_title" name="project_title" type="hidden" value="shuye72/MyActions" />
</h2>
</div>
</div>
</div>
<script>
  var title_import_url = "false";
  var title_post_url = "/shuye72/MyActions/update_import";
  var title_fork_url = "/shuye72/MyActions/sync_fork";
  var title_project_path = "MyActions";
  var title_p_name = "MyActions";
  var title_p_id= "15172784";
  var title_description = "";
  var title_form_authenticity_token = "l26xx+q8nmngwxdhgvfB2+WB24PQjI/aleqvpYmq608=";
  var watch_type = "unwatch";
  
  $('.js-project-watch').dropdown('set selected', watch_type);
  $('.checkbox.sync-wiki').checkbox();
</script>
<style>
  i.loading {
    -webkit-animation: icon-loading 1.2s linear infinite;
    animation: icon-loading 1.2s linear infinite;
  }
  .qrcode_cs {
    float: left;
  }
  .check-sync-wiki {
    float: left;
    height: 28px;
    line-height: 28px;
  }
  .sync-wiki-warn {
    color: #e28560;
  }
</style>

<div class='git-project-nav'>
<div class='ui container'>
<div class='ui secondary pointing menu'>
<a class="item active" href="/shuye72/MyActions"><i class='iconfont icon-code'></i>
代码
</a><a class="item  " href="/shuye72/MyActions/graph/main"><i class='iconfont icon-statistics'></i>
统计
</a><div class='item project-devops-item'>
<div class='ui pointing top right dropdown project-devops-dropdown'>
<div class='text'>
<i class='iconfont icon-devops'></i>
DevOps
</div>
<i class='dropdown icon'></i>
<div class='menu' style='display:none'>
<a class="item" href="/shuye72/MyActions/gitee_go"><img alt="Giteego" src="https://assets.gitee.com/assets/giteego-7ec42270742374f05850d0d3ad09e303.png" />
<div class='item-title'>
Gitee Go
</div>
</a><a class="item" href="https://gitee.com/help/articles/4285" target="_blank"><img alt="Baidu efficiency cloud" src="https://assets.gitee.com/assets/baidu_efficiency_cloud-81a98c2eb67fac83b1453ca3d2feb326.svg" />
<div class='item-title'>
百度效率云
</div>
</a><a class="item" href="https://gitee.com/help/articles/4318" target="_blank"><img alt="Cloudbase" src="https://assets.gitee.com/assets/cloudbase-1197b95ea3398aff1df7fe17c65a6d42.png?20200925" />
<div class='item-title'>
腾讯云托管
</div>
</a><a class="item" href="https://gitee.com/help/articles/4330" target="_blank"><img alt="Cloud serverless" src="https://assets.gitee.com/assets/cloud_serverless-686cf926ced5d6d2f1d6e606d270b81e.png" />
<div class='item-title'>
腾讯云 Serverless
</div>
</a><a class="item" href="https://gitee.com/help/articles/4193" target="_blank"><img alt="Jenkins for gitee" src="https://assets.gitee.com/assets/jenkins_for_gitee-554ec65c490d0f1f18de632c48acc4e7.png" />
<div class='item-title'>
Jenkins for Gitee
</div>
</a></div>
</div>
</div>
<div class='item'>
<div class='ui pointing top right dropdown git-project-service'>
<div class='text'>
<i class='iconfont icon-service'></i>
服务
</div>
<i class='dropdown icon'></i>
<div class='menu' style='display:none'>
<a class="item" href="/shuye72/MyActions/pages"><img alt="Logo en" src="/static/images/logo-en.svg" />
<div class='item-title'>
Gitee Pages
</div>
</a><a class="item" href="/shuye72/MyActions/javadoc"><img alt="Maven" src="https://assets.gitee.com/assets/maven-bd58aee84f266d64d4b8ce5b006a9fcf.png" />
<div class='item-title'>
JavaDoc
</div>
</a><a class="item" href="/shuye72/MyActions/phpdoc"><img alt="Phpdoc" src="https://assets.gitee.com/assets/phpdoc-a99f87c2feaa2fd99e5065377a39487e.png" />
<div class='item-title'>
PHPDoc
</div>
</a><a class="item" href="/shuye72/MyActions/quality_analyses?platform=sonar_qube"><img alt="Sonar mini" src="https://assets.gitee.com/assets/sonar_mini-5e1b54bb9f6c951d97fb778ef623afea.png" />
<div class='item-title'>
质量分析
</div>
</a><a class="item" href="/shuye72/MyActions/quality_analyses?platform=codesafe"><img alt="Codesafe mini" src="https://assets.gitee.com/assets/codesafe_mini-accbe1e555e9864c552620240d10e4de.png" width="100%" />
<div class='item-title'>
奇安信代码卫士
</div>
</a><a class="item" href="/shuye72/MyActions/gitee_scans"><img alt="Giteescan" src="https://assets.gitee.com/assets/giteescan-cd9ab4076bd751faf7e30888eb10f782.png" />
<div class='item-title'>Gitee Scan</div>
</a><button class='ui orange basic button quit-button' id='quiting-button'>
我知道了，不再自动展开
</button>
</div>
</div>
</div>
</div>
</div>
</div>
<script>
  $('.git-project-nav .ui.dropdown').dropdown({ action: 'nothing' });
</script>
<style>
  .git-project-nav i.checkmark.icon {
    color: green;
  }
  #quiting-button {
    display: none;
  }
  
  .git-project-nav .dropdown .menu.hidden:after {
    visibility: hidden !important;
  }
</style>
<script>
  isSignIn = false
  isClickGuide = false
  $('#git-versions.dropdown').dropdown();
  $.ajax({
    url:"/shuye72/MyActions/access/add_access_log",
    type:"GET"
  });
  $('#quiting-button').on('click',function() {
    $('.git-project-service').click();
    if (isSignIn) {
      $.post("/projects/set_service_guide")
    }
    $.cookie("Serve_State", true, { expires: 3650, path: '/'})
    $('#quiting-button').hide();
  });
  if (!(isClickGuide || $.cookie("Serve_State") == 'true')) {
    $('.git-project-service').click()
    $('#quiting-button').show()
  }
</script>

</div>
<div class='ui container'>
<div class='register-guide'>
<div class='register-container'>
<div class='regist'>
加入 Gitee
</div>
<div class='description'>
与超过 600 万 开发者一起发现、参与优秀开源项目，私有仓库也完全免费 ：）
</div>
<a class="ui orange button free-registion" href="/signup?from=project-guide" sa_evt="register_show" sa_referrer_action="免费加入" sa_referrer_type="其他" sa_referrer_url="">免费加入</a>
<div class='login'>
已有帐号？
<a href="/login?from=project-guide">立即登录</a>
</div>
</div>
</div>

<div class='git-project-content-wrapper'>
<div class='ui grid' id='project-wrapper'>
<div class='sixteen wide column'>
<div class='git-project-content' id='git-project-content'>
<div class='row'>
<div class='git-project-desc-wrapper'>
<div class='ui yellow message no-license' id='user-no-license-message'>
该仓库未指定开源许可证，未经作者的许可，此代码仅用于学习，不能用于其他用途。
<i class='help circle icon'></i>
<div class='ui popup dark'>
项目仓库所选许可证以仓库主分支所使用许可证为准
</div>
<i class='remove icon' id='remove-no-license-message'></i>
</div>
<script>
  if (false) {
    gon.project_new_blob_path = "/shuye72/MyActions/new/main/jd_family.js"
    bindShowModal({
      el: $('.no-license .project-license__create'),
      complete: function(data, modal) {
        if (!data.haveNoChoice && !data.data) {
          Flash.show('请选择一项开源许可证')
        } else {
          location.href = gon.project_new_blob_path + '?license=' + data.data
        }
      },
      skip: function () {
        location.href = gon.project_new_blob_path + '?license'
      }
    });
  }
  
  $('i.help.circle.icon').popup({
    popup: '.no-license .ui.popup',
    position: 'right center'
  });
  
  $('#remove-no-license-message').on('click', function() {
    $.cookie("skip_repo_no_license_message_15172784", 'hide', { expires: 365 });
    $('#user-no-license-message').hide();
    return;
  });
</script>
</div>

</div>
<div class='git-project-bread' id='git-project-bread'>
<div class='ui horizontal list mr-1'>
<div class='item git-project-branch-item'>
<input id="path" name="path" type="hidden" value="jd_family.js" />
<div class='ui top left pointing dropdown gradient button dropdown-has-tabs' id='git-project-branch'>
<input id="ref" name="ref" type="hidden" value="main" />
<div class='default text'>
main
</div>
<i class='dropdown icon'></i>
<div class='menu'>
<div class='ui left icon search input'>
<i class='iconfont icon-search'></i>
<input class='search-branch' placeholder='搜索分支' type='text'>
</div>
<div class='tab-menu'>
<div class='tab-menu-action' data-tab='branches'>
<a class="ui link button" href="/shuye72/MyActions/branches">管理</a>
</div>
<div class='tab-menu-action' data-tab='tags'>
<a class="ui link button" href="/shuye72/MyActions/tags">管理</a>
</div>
<div class='tab-menu-item' data-placeholder='搜索分支' data-tab='branches'>
分支 (1)
</div>
</div>
<div class='tab scrolling menu' data-tab='branches'>
<div class="item" data-value="main"><span>main</span></div>
</div>
</div>
</div>
<style>
  .iconfont.icon-shieldlock {
    color: #8c92a4;
  }
</style>

<script>
  $(function () {
    Gitee.initTabsInDropdown($('#git-project-branch').dropdown({
      fullTextSearch: true,
      selectOnKeydown: true,
      action: function (text,value,el) {
        var oItemOrInitObject = el[0] || el
        var isNotSelect = oItemOrInitObject.dataset.tab && oItemOrInitObject.dataset.tab === 'branches'
        if(isNotSelect){
          console.warn("You didn't choose a branch")
          return
        } 
        var path = $('#path').val();
        var href = ['/shuye72/MyActions/tree', encodeURIComponent(value), path].join('/');
        window.location.href = href;
        return true
      },
      onNoResults: function (searchTerm) {
        //未找到结果
        return true
      },
    }));
    $('.protected-branch-popup').popup()
  })
</script>

</div>
</div>
<div class='git-project-right-actions pull-right'>
<div class='ui orange button' id='btn-dl-or-clone'>
克隆/下载
<i class='dropdown icon'></i>
</div>
<div class='git-project-download-panel for-project ui bottom right popup'>
<div class='ui small secondary pointing menu'>
<a class='item active' data-text='' data-type='http' data-url='https://gitee.com/shuye72/MyActions.git'>HTTPS</a>
<a class='item' data-text='' data-type='ssh' data-url='git@gitee.com:shuye72/MyActions.git'>SSH</a>
<a class='item' data-text="该仓库未启用SVN访问，请仓库管理员前往【&lt;a target='_blank' href=/shuye72/MyActions/settings&gt;仓库设置&lt;/a&gt;】开启。" data-type='svn' data-url=''>SVN</a>
<a class='item' data-text="该仓库未启用SVN访问，请仓库管理员前往【&lt;a target='_blank' href=/shuye72/MyActions/settings&gt;仓库设置&lt;/a&gt;】开启。" data-type='svn_ssh' data-url=''>SVN+SSH</a>
</div>
<div class='ui fluid right labeled small input download-url-panel'>
<input id="project_clone_url" name="project_clone_url" onclick="focus();select()" readonly="readonly" type="text" value="https://gitee.com/shuye72/MyActions.git" />
<div class='ui basic label'>
<div class='ui small basic orange button' data-clipboard-target='#project_clone_url' id='btn-copy-clone-url'>
复制
</div>
</div>
</div>
<div class='ui fluid right labeled warning-text forbid-warning-text'>

</div>
<hr>
<a class="ui fluid download link button" href="javascript:void(0);" sa_evt="loginInform_show" sa_referrer_action="克隆/下载" sa_referrer_type="其他" sa_referrer_url=""><i class='icon download'></i>
下载ZIP
</a><div class='download_repository_zip form modal tiny ui' id='unlanding-complaint-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>
登录提示
</div>
<div class='container actions'>
<div class='content'>
该操作需登录 Gitee 帐号，请先登录后再操作。
</div>
<div class='ui orange icon large button ok'>
立即登录
</div>
<div class='ui button blank cancel'>
没有帐号，去注册
</div>
</div>
</div>
<script>
  var $elm = $('.download');
  
  $elm.on('click', function() {
    var modals = $("#unlanding-complaint-modal.download_repository_zip");
    if (modals.length > 1) {
      modals.eq(0).modal('show');
    } else {
      modals.modal('show');
    }
  })
  $("#unlanding-complaint-modal.download_repository_zip").modal({
    onDeny: function() {
      window.location.href = "/signup?from=download_repository_zip";
    },
    onApprove: function() {
      window.location.href = "/login?from=download_repository_zip";
    }
  })
</script>

</div>
<script>
  (function() {
    var $btnClone, $btnCopy, $input, $panel;
  
    $btnClone = $('#btn-dl-or-clone');
  
    $panel = $('.git-project-download-panel');
  
    $input = $('#project_clone_url');
  
    $btnCopy = $('#btn-copy-clone-url');
  
    $btnClone.popup({
      on: 'click',
      hoverable: true,
      position: 'bottom center'
    });
  
    $panel.find('.menu > .item').on('click', function(e) {
      var $item, dataUrl;
      $item = $(this).addClass('active');
      $item.siblings().removeClass('active');
      dataUrl = $item.attr('data-url');
      if (dataUrl) {
        $panel.find('.download-url-panel').show();
        $input.val(dataUrl);
        $panel.find('.forbid-warning-text').html('');
      } else {
        $panel.find('.download-url-panel').hide();
        $panel.find('.forbid-warning-text').html($item.attr('data-text') || '');
      }
      return $.cookie('remote_way', $item.attr('data-type'), {
        expires: 365,
        path: '/'
      });
    }).filter('[data-type="http"]').trigger('click');
  
    new Clipboard($btnCopy[0]).on('success', function() {
      $btnCopy.popup({
        content: '已复制',
        position: 'right center',
        onHidden: function() {
          return $btnCopy.popup('destroy');
        }
      });
      return $btnCopy.popup('show');
    });
  
  }).call(this);
</script>

</div>
<div class='d-inline pull-right' id='git-project-root-actions'>
<script>
  $('.disabled-upload-readonly').popup({
    content: "只读目录不允许上传文件",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-folder').popup({
    content: "只读目录不允许创建目录",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-file').popup({
    content: "只读目录不允许创建文件",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-upload-readonly').click(function() {
    return false
  })
  $('.disabled-create-folder').click(function() {
    return false
  })
  $('.disabled-create-file').click(function() {
    return false
  })
</script>
<style>
  .disabled-upload-readonly, .disabled-create-file, .disabled-create-folder {
    background-color: #dcddde !important;
    color: rgba(0, 0, 0, 0.4) !important;
    opacity: 0.3 !important;
    background-image: none !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important; }
</style>


</div>
<div class='breadcrumb_path path-breadcrumb-contrainer' id='git-project-breadcrumb'>
<div class='ui breadcrumb path project-path-breadcrumb' id='path-breadcrumb'>
<a class="section repo-name" data-direction="back" href="/shuye72/MyActions/tree/main" style="font-weight: bold">MyActions
</a><div class='divider'>
/
</div>
<strong>
jd_family.js
</strong>
<i class='iconfont icon-clone' data-clipboard-text='jd_family.js' id='btn-copy-file-path'></i>
</div>
<style>
  #btn-copy-file-path {
    vertical-align: middle;
    cursor: pointer;
  }
</style>
<script>
  $btnCopy = $('#btn-copy-file-path')
  $btnCopy.popup({
    content: '复制路径'
  })
  
  if ($btnCopy[0]) {
    new Clipboard($btnCopy[0]).on('success', function() {
      $btnCopy.popup('destroy').popup({
        content: '已复制',
        on: 'manual'
      }).popup('show');
      setTimeout(function () {
        $btnCopy.popup('destroy').popup({
          content: '复制路径'
        });
      }, 2000)
    });
  }
</script>


</div>
<div class='ui horizontal list repo-action-list branches-tags' style='display: none;'>
<div class='item'>
<a class="ui blank button" href="/shuye72/MyActions/branches"><i class='iconfont icon-branches'></i>
分支 1
</a></div>
<div class='item mr-3'>
<a class="ui blank button" href="/shuye72/MyActions/tags"><i class='iconfont icon-tag'></i>
标签 0
</a></div>
</div>
</div>
<script>
  if(window.gon.locale == 'en')
    $('.branches-tags').css('margin-top', '12px')
</script>

<style>
  .ui.dropdown .menu > .header {
    text-transform: none; }
</style>
<script>
  $(function () {
    var $tip = $('#apk-download-tip');
    if (!$tip.length) {
      return;
    }
    $tip.find('.btn-close').on('click', function () {
      $tip.hide();
    });
  });
  (function(){
    function pathAutoRender() {
      var $parent = $('#git-project-bread'),
          $child = $('#git-project-bread').children('.ui.horizontal.list'),
          mainWidth = 0;
      $child.each(function (i,item) {
        mainWidth += $(item).width()
      });
      $('.breadcrumb.path.fork-path').remove();
      if (mainWidth > 995) {
        $('#path-breadcrumb').hide();
        $parent.append('<div class="ui breadcrumb path fork-path">' + $('#path-breadcrumb').html() + '<div/>')
      } else {
        $('#path-breadcrumb').show();
      }
    }
    window.pathAutoRender = pathAutoRender;
    pathAutoRender();
  })();
</script>

<div class='row column tree-holder' id='tree-holder'>
<div class='tree-content-holder' id='tree-content-holder'>
<div class='file_holder'>
<div class='file_title'>
<div class='blob-header-title'>
<div class='blob-description'>
<i class="iconfont icon-file"></i>
<span class='file_name' title='jd_family.js'>
jd_family.js
</span>
<small>16.83 KB</small>
</div>
<div class='options'><div class='ui mini buttons basic'>
<textarea id="blob_raw" name="blob_raw" style="display:none;">
/*&#x000A;京东家庭号&#x000A;活动入口：玩一玩-家庭号&#x000A;8000幸福值可换100京豆，一天任务做完大概300幸福值，周期较长&#x000A;已支持IOS双京东账号,Node.js支持N个京东账号&#x000A;脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js&#x000A;&#x000A;易黑号，建议禁用&#x000A;脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js&#x000A;============Quantumultx===============&#x000A;[task_local]&#x000A;#京东家庭号&#x000A;1 12,23 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_family.js, tag=京东家庭号, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_family.png, enabled=true&#x000A;&#x000A;================Loon==============&#x000A;[Script]&#x000A;cron &quot;1 12,23 * * *&quot; script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_family.js,tag=京东家庭号&#x000A;&#x000A;===============Surge=================&#x000A;京东家庭号 = type=cron,cronexp=&quot;1 12,23 * * *&quot;,wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_family.js&#x000A;&#x000A;============小火箭=========&#x000A;京东家庭号 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_family.js, cronexpr=&quot;1 12,23 * * *&quot;, timeout=3600, enable=true&#x000A; */&#x000A;const $ = new Env(&#39;京东家庭号&#39;);&#x000A;const notify = $.isNode() ? require(&#39;./sendNotify&#39;) : &#39;&#39;;&#x000A;const jdCookieNode = $.isNode() ? require(&#39;./jdCookie.js&#39;) : &#39;&#39;;&#x000A;//Node.js用户请在jdCookie.js处填写京东ck;&#x000A;//IOS等用户直接用NobyDa的jd cookie&#x000A;let cookiesArr = [], cookie = &#39;&#39;, message;&#x000A;&#x000A;if ($.isNode()) {&#x000A;  Object.keys(jdCookieNode).forEach((item) =&gt; {&#x000A;    cookiesArr.push(jdCookieNode[item])&#x000A;  })&#x000A;  if (process.env.JD_DEBUG &amp;&amp; process.env.JD_DEBUG === &#39;false&#39;) console.log = () =&gt; {&#x000A;  };&#x000A;} else {&#x000A;  cookiesArr = [$.getdata(&#39;CookieJD&#39;), $.getdata(&#39;CookieJD2&#39;), ...jsonParse($.getdata(&#39;CookiesJD&#39;) || &quot;[]&quot;).map(item =&gt; item.cookie)].filter(item =&gt; !!item);&#x000A;}&#x000A;&#x000A;!(async () =&gt; {&#x000A;  if (!cookiesArr[0]) {&#x000A;    $.msg($.name, &#39;【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取&#39;, &#39;https://bean.m.jd.com/bean/signIndex.action&#39;, {&quot;open-url&quot;: &quot;https://bean.m.jd.com/bean/signIndex.action&quot;});&#x000A;    return;&#x000A;  }&#x000A;  for (let i = 0; i &lt; cookiesArr.length; i++) {&#x000A;    if (cookiesArr[i]) {&#x000A;      cookie = cookiesArr[i];&#x000A;      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) &amp;&amp; cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])&#x000A;      $.index = i + 1;&#x000A;      $.isLogin = true;&#x000A;      $.nickName = &#39;&#39;;&#x000A;      $.beans = 0&#x000A;      message = &#39;&#39;;&#x000A;      await TotalBean();&#x000A;      console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);&#x000A;      if (!$.isLogin) {&#x000A;        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {&quot;open-url&quot;: &quot;https://bean.m.jd.com/bean/signIndex.action&quot;});&#x000A;        if ($.isNode()) {&#x000A;          await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);&#x000A;        }&#x000A;        continue&#x000A;      }&#x000A;      await jdFamily()&#x000A;    }&#x000A;  }&#x000A;})()&#x000A;  .catch((e) =&gt; {&#x000A;    $.log(&#39;&#39;, `❌ ${$.name}, 失败! 原因: ${e}!`, &#39;&#39;)&#x000A;  })&#x000A;  .finally(() =&gt; {&#x000A;    $.done();&#x000A;  })&#x000A;&#x000A;async function jdFamily() {&#x000A;  await getInfo()&#x000A;  await getUserInfo()&#x000A;  await getUserInfo(true)&#x000A;  await showMsg();&#x000A;}&#x000A;&#x000A;function showMsg() {&#x000A;  return new Promise(resolve =&gt; {&#x000A;    // message += `本次运行获得${$.beans}京豆`&#x000A;    $.log($.name, &#39;&#39;, `京东账号${$.index}${$.nickName}\n${message}`);&#x000A;    resolve()&#x000A;  })&#x000A;}&#x000A;&#x000A;function getInfo() {&#x000A;  return new Promise(resolve =&gt; {&#x000A;    $.get({&#x000A;      url: &#39;https://lgame.jd.com/babelDiy/Zeus/VhPVVaw8nTSVr69E757fyCebwKG/index.html&#39;,&#x000A;      headers: {&#x000A;        Cookie: cookie&#x000A;      }&#x000A;    }, async (err, resp, data) =&gt; {&#x000A;      try {&#x000A;        $.info = JSON.parse(data.match(/var snsConfig = (.*)/)[1])&#x000A;        $.prize = JSON.parse($.info.prize)&#x000A;      } catch (e) {&#x000A;        console.log(e)&#x000A;      } finally {&#x000A;        resolve()&#x000A;      }&#x000A;    })&#x000A;  })&#x000A;}&#x000A;&#x000A;function getUserInfo(info = false) {&#x000A;  return new Promise(resolve =&gt; {&#x000A;    $.get(taskUrl(&#39;family_query&#39;), async (err, resp, data) =&gt; {&#x000A;      try {&#x000A;        if (err) {&#x000A;          console.log(`${err},${jsonParse(resp.body)[&#39;message&#39;]}`)&#x000A;          console.log(`${$.name} API请求失败，请检查网路重试`)&#x000A;        } else {&#x000A;          $.userInfo = JSON.parse(data.match(/query\((.*)\n/)[1])&#x000A;          console.log(`当前幸福值：${$.userInfo.tatalprofits}`)&#x000A;          if (info) {&#x000A;            message += `当前幸福值：${$.userInfo.tatalprofits}`&#x000A;          } else for (let task of $.info.config.tasks) {&#x000A;            let vo = $.userInfo.tasklist.filter(vo =&gt; vo.taskid === task[&#39;_id&#39;])&#x000A;            if (vo.length &gt; 0) {&#x000A;              vo = vo[0]&#x000A;              // 5fed97ce5da81a8c069810df 健身 2 9 3&#x000A;              // 5fed97ce5da81a8c069810de 撸猫 80 6 1&#x000A;              // 5fed97ce5da81a8c069810dd 做美食 40 10 2&#x000A;              // 5fed97ce5da81a8c069810dc 去组队 150 13 5&#x000A;              if (vo[&#39;isdo&#39;] === 1) {&#x000A;                if (vo[&#39;times&#39;] === 0) {&#x000A;                  console.log(`去做任务${task[&#39;_id&#39;]}`)&#x000A;                  await doTask(task[&#39;_id&#39;])&#x000A;                  await $.wait(1000)&#x000A;                } else {&#x000A;                  console.log(`${Math.trunc(vo[&#39;times&#39;] / 60)}分钟可后做任务${task[&#39;_id&#39;]}`)&#x000A;                }&#x000A;              }&#x000A;            }&#x000A;          }&#x000A;        }&#x000A;      } catch (e) {&#x000A;        $.logErr(e, resp)&#x000A;      } finally {&#x000A;        resolve(data);&#x000A;      }&#x000A;    })&#x000A;  })&#x000A;}&#x000A;&#x000A;function doTask(taskId) {&#x000A;  let body = `taskid=${taskId}`&#x000A;  return new Promise(resolve =&gt; {&#x000A;    $.get(taskUrl(&#39;family_task&#39;, body), async (err, resp, data) =&gt; {&#x000A;      try {&#x000A;        if (err) {&#x000A;          console.log(`${err},${jsonParse(resp.body)[&#39;message&#39;]}`)&#x000A;          console.log(`${$.name} API请求失败，请检查网路重试`)&#x000A;        } else {&#x000A;          data = JSON.parse(data.match(/query\((.*)\n/)[1])&#x000A;          if (data.ret === 0) {&#x000A;            console.log(`任务完成成功`)&#x000A;          } else {&#x000A;            console.log(`任务完成失败，原因未知`)&#x000A;          }&#x000A;        }&#x000A;      } catch (e) {&#x000A;        $.logErr(e, resp)&#x000A;      } finally {&#x000A;        resolve(data);&#x000A;      }&#x000A;    })&#x000A;  })&#x000A;}&#x000A;&#x000A;function taskUrl(function_id, body = &#39;&#39;) {&#x000A;  body = `activeid=${$.info.activeId}&amp;token=${$.info.actToken}&amp;sceneval=2&amp;shareid=&amp;t=${Date.now()}&amp;_=${new Date().getTime()}&amp;callback=query&amp;${body}`&#x000A;  return {&#x000A;    url: `https://wq.jd.com/activep3/family/${function_id}?${body}`,&#x000A;    headers: {&#x000A;      &#39;Host&#39;: &#39;wq.jd.com&#39;,&#x000A;      &#39;Accept&#39;: &#39;application/json&#39;,&#x000A;      &#39;Accept-Language&#39;: &#39;zh-cn&#39;,&#x000A;      &#39;Content-Type&#39;: &#39;application/json;charset=utf-8&#39;,&#x000A;      &#39;Origin&#39;: &#39;wq.jd.com&#39;,&#x000A;      &#39;User-Agent&#39;: &#39;JD4iPhone/167490 (iPhone; iOS 14.2; Scale/3.00)&#39;,&#x000A;      &#39;Referer&#39;: `https://anmp.jd.com/babelDiy/Zeus/xKACpgVjVJM7zPKbd5AGCij5yV9/index.html?wxAppName=jd`,&#x000A;      &#39;Cookie&#39;: cookie&#x000A;    }&#x000A;  }&#x000A;}&#x000A;&#x000A;function taskPostUrl(function_id, body) {&#x000A;  return {&#x000A;    url: `https://lzdz-isv.isvjcloud.com/${function_id}`,&#x000A;    body: body,&#x000A;    headers: {&#x000A;      &#39;Host&#39;: &#39;lzdz-isv.isvjcloud.com&#39;,&#x000A;      &#39;Accept&#39;: &#39;application/json&#39;,&#x000A;      &#39;Accept-Language&#39;: &#39;zh-cn&#39;,&#x000A;      &#39;Content-Type&#39;: &#39;application/x-www-form-urlencoded&#39;,&#x000A;      &#39;Origin&#39;: &#39;https://lzdz-isv.isvjcloud.com&#39;,&#x000A;      &#39;User-Agent&#39;: &#39;JD4iPhone/167490 (iPhone; iOS 14.2; Scale/3.00)&#39;,&#x000A;      &#39;Referer&#39;: `https://lzdz-isv.isvjcloud.com/dingzhi/book/develop/activity?activityId=${ACT_ID}`,&#x000A;      &#39;Cookie&#39;: `${cookie} isvToken=${$.isvToken};`&#x000A;    }&#x000A;  }&#x000A;}&#x000A;&#x000A;function TotalBean() {&#x000A;  return new Promise(async resolve =&gt; {&#x000A;    const options = {&#x000A;      &quot;url&quot;: `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,&#x000A;      &quot;headers&quot;: {&#x000A;        &quot;Accept&quot;: &quot;application/json,text/plain, */*&quot;,&#x000A;        &quot;Content-Type&quot;: &quot;application/x-www-form-urlencoded&quot;,&#x000A;        &quot;Accept-Encoding&quot;: &quot;gzip, deflate, br&quot;,&#x000A;        &quot;Accept-Language&quot;: &quot;zh-cn&quot;,&#x000A;        &quot;Connection&quot;: &quot;keep-alive&quot;,&#x000A;        &quot;Cookie&quot;: cookie,&#x000A;        &quot;Referer&quot;: &quot;https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2&quot;,&#x000A;        &quot;User-Agent&quot;: $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : &quot;jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1&quot;) : ($.getdata(&#39;JDUA&#39;) ? $.getdata(&#39;JDUA&#39;) : &quot;jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1&quot;)&#x000A;      }&#x000A;    }&#x000A;    $.post(options, (err, resp, data) =&gt; {&#x000A;      try {&#x000A;        if (err) {&#x000A;          console.log(`${JSON.stringify(err)}`)&#x000A;          console.log(`${$.name} API请求失败，请检查网路重试`)&#x000A;        } else {&#x000A;          if (data) {&#x000A;            data = JSON.parse(data);&#x000A;            if (data[&#39;retcode&#39;] === 13) {&#x000A;              $.isLogin = false; //cookie过期&#x000A;              return&#x000A;            }&#x000A;            if (data[&#39;retcode&#39;] === 0) {&#x000A;              $.nickName = (data[&#39;base&#39;] &amp;&amp; data[&#39;base&#39;].nickname) || $.UserName;&#x000A;            } else {&#x000A;              $.nickName = $.UserName&#x000A;            }&#x000A;          } else {&#x000A;            console.log(`京东服务器返回空数据`)&#x000A;          }&#x000A;        }&#x000A;      } catch (e) {&#x000A;        $.logErr(e, resp)&#x000A;      } finally {&#x000A;        resolve();&#x000A;      }&#x000A;    })&#x000A;  })&#x000A;}&#x000A;&#x000A;function safeGet(data) {&#x000A;  try {&#x000A;    if (typeof JSON.parse(data) == &quot;object&quot;) {&#x000A;      return true;&#x000A;    }&#x000A;  } catch (e) {&#x000A;    console.log(e);&#x000A;    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);&#x000A;    return false;&#x000A;  }&#x000A;}&#x000A;&#x000A;function jsonParse(str) {&#x000A;  if (typeof str == &quot;string&quot;) {&#x000A;    try {&#x000A;      return JSON.parse(str);&#x000A;    } catch (e) {&#x000A;      console.log(e);&#x000A;      $.msg($.name, &#39;&#39;, &#39;不要在BoxJS手动复制粘贴修改cookie&#39;)&#x000A;      return [];&#x000A;    }&#x000A;  }&#x000A;}&#x000A;// prettier-ignore&#x000A;function Env(t,e){class s{constructor(t){this.env=t}send(t,e=&quot;GET&quot;){t=&quot;string&quot;==typeof t?{url:t}:t;let s=this.get;return&quot;POST&quot;===e&amp;&amp;(s=this.post),new Promise((e,i)=&gt;{s.call(this,t,(t,s,r)=&gt;{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,&quot;POST&quot;)}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile=&quot;box.dat&quot;,this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator=&quot;\n&quot;,this.startTime=(new Date).getTime(),Object.assign(this,e),this.log(&quot;&quot;,`🔔${this.name}, 开始!`)}isNode(){return&quot;undefined&quot;!=typeof module&amp;&amp;!!module.exports}isQuanX(){return&quot;undefined&quot;!=typeof $task}isSurge(){return&quot;undefined&quot;!=typeof $httpClient&amp;&amp;&quot;undefined&quot;==typeof $loon}isLoon(){return&quot;undefined&quot;!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=&gt;{this.get({url:t},(t,s,i)=&gt;e(i))})}runScript(t,e){return new Promise(s=&gt;{let i=this.getdata(&quot;@chavy_boxjs_userCfgs.httpapi&quot;);i=i?i.replace(/\n/g,&quot;&quot;).trim():i;let r=this.getdata(&quot;@chavy_boxjs_userCfgs.httpapi_timeout&quot;);r=r?1*r:20,r=e&amp;&amp;e.timeout?e.timeout:r;const[o,h]=i.split(&quot;@&quot;),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:&quot;cron&quot;,timeout:r},headers:{&quot;X-Key&quot;:o,Accept:&quot;*/*&quot;}};this.post(n,(t,e,i)=&gt;s(i))}).catch(t=&gt;this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require(&quot;fs&quot;),this.path=this.path?this.path:require(&quot;path&quot;);const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&amp;&amp;this.fs.existsSync(e);if(!s&amp;&amp;!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require(&quot;fs&quot;),this.path=this.path?this.path:require(&quot;path&quot;);const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&amp;&amp;this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,&quot;.$1&quot;).split(&quot;.&quot;);let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=&gt;Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])&gt;&gt;0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):&quot;&quot;;if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,&quot;&quot;):e}catch(t){e=&quot;&quot;}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?&quot;null&quot;===o?null:o||&quot;{}&quot;:&quot;{}&quot;;try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&amp;&amp;this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&amp;&amp;this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require(&quot;got&quot;),this.cktough=this.cktough?this.cktough:require(&quot;tough-cookie&quot;),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&amp;&amp;(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&amp;&amp;void 0===t.cookieJar&amp;&amp;(t.cookieJar=this.ckjar))}get(t,e=(()=&gt;{})){t.headers&amp;&amp;(delete t.headers[&quot;Content-Type&quot;],delete t.headers[&quot;Content-Length&quot;]),this.isSurge()||this.isLoon()?(this.isSurge()&amp;&amp;this.isNeedRewrite&amp;&amp;(t.headers=t.headers||{},Object.assign(t.headers,{&quot;X-Surge-Skip-Scripting&quot;:!1})),$httpClient.get(t,(t,s,i)=&gt;{!t&amp;&amp;s&amp;&amp;(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&amp;&amp;(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=&gt;{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=&gt;e(t))):this.isNode()&amp;&amp;(this.initGotEnv(t),this.got(t).on(&quot;redirect&quot;,(t,e)=&gt;{try{if(t.headers[&quot;set-cookie&quot;]){const s=t.headers[&quot;set-cookie&quot;].map(this.cktough.Cookie.parse).toString();s&amp;&amp;this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=&gt;{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=&gt;{const{message:s,response:i}=t;e(s,i,i&amp;&amp;i.body)}))}post(t,e=(()=&gt;{})){if(t.body&amp;&amp;t.headers&amp;&amp;!t.headers[&quot;Content-Type&quot;]&amp;&amp;(t.headers[&quot;Content-Type&quot;]=&quot;application/x-www-form-urlencoded&quot;),t.headers&amp;&amp;delete t.headers[&quot;Content-Length&quot;],this.isSurge()||this.isLoon())this.isSurge()&amp;&amp;this.isNeedRewrite&amp;&amp;(t.headers=t.headers||{},Object.assign(t.headers,{&quot;X-Surge-Skip-Scripting&quot;:!1})),$httpClient.post(t,(t,s,i)=&gt;{!t&amp;&amp;s&amp;&amp;(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=&quot;POST&quot;,this.isNeedRewrite&amp;&amp;(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=&gt;{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=&gt;e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=&gt;{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=&gt;{const{message:s,response:i}=t;e(s,i,i&amp;&amp;i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={&quot;M+&quot;:s.getMonth()+1,&quot;d+&quot;:s.getDate(),&quot;H+&quot;:s.getHours(),&quot;m+&quot;:s.getMinutes(),&quot;s+&quot;:s.getSeconds(),&quot;q+&quot;:Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&amp;&amp;(t=t.replace(RegExp.$1,(s.getFullYear()+&quot;&quot;).substr(4-RegExp.$1.length)));for(let e in i)new RegExp(&quot;(&quot;+e+&quot;)&quot;).test(t)&amp;&amp;(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:(&quot;00&quot;+i[e]).substr((&quot;&quot;+i[e]).length)));return t}msg(e=t,s=&quot;&quot;,i=&quot;&quot;,r){const o=t=&gt;{if(!t)return t;if(&quot;string&quot;==typeof t)return this.isLoon()?t:this.isQuanX()?{&quot;open-url&quot;:t}:this.isSurge()?{url:t}:void 0;if(&quot;object&quot;==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t[&quot;open-url&quot;],s=t.mediaUrl||t[&quot;media-url&quot;];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t[&quot;open-url&quot;]||t.url||t.openUrl,s=t[&quot;media-url&quot;]||t.mediaUrl;return{&quot;open-url&quot;:e,&quot;media-url&quot;:s}}if(this.isSurge()){let e=t.url||t.openUrl||t[&quot;open-url&quot;];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&amp;&amp;$notify(e,s,i,o(r))),!this.isMuteLog){let t=[&quot;&quot;,&quot;==============📣系统通知📣==============&quot;];t.push(e),s&amp;&amp;t.push(s),i&amp;&amp;t.push(i),console.log(t.join(&quot;\n&quot;)),this.logs=this.logs.concat(t)}}log(...t){t.length&gt;0&amp;&amp;(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&amp;&amp;!this.isQuanX()&amp;&amp;!this.isLoon();s?this.log(&quot;&quot;,`❗️${this.name}, 错误!`,t.stack):this.log(&quot;&quot;,`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=&gt;setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log(&quot;&quot;,`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&amp;&amp;$done(t)}}(t,e)}</textarea>
<a class="ui button" href="#" id="copy-text" style="border-left: none;">一键复制</a>
<a class="ui button disabled has_tooltip edit-blob" href="/shuye72/MyActions/edit/main/jd_family.js" title="无编辑权限">编辑</a>
<a class="ui button web-ide" href="/-/ide/project/shuye72/MyActions/edit/main/-/jd_family.js" target="_blank">Web IDE</a>
<a class="ui button edit-raw" href="/shuye72/MyActions/raw/main/jd_family.js" target="_blank">原始数据</a>
<a class="ui button edit-blame" href="/shuye72/MyActions/blame/main/jd_family.js">按行查看</a>
<a class="ui button edit-history" href="/shuye72/MyActions/commits/main/jd_family.js">历史</a>
</div>
<script>
  "use strict";
  try {
    if((gon.wait_fork!=undefined && gon.wait_fork==true) || (gon.wait_fetch!=undefined && gon.wait_fetch==true)){
      $('.edit-blob').popup({content:"当前仓库正在后台处理中,暂时无法编辑", on: 'hover', delay: { show: 200, hide: 200 }});
      $('.edit-blob').click(function(e){
        e.preventDefault();
      })
    }
  
    var setUrl = function() {
      var params = window.location.search
      if (params==undefined || $.trim(params).length==0) return;
      $('span.options').children('.basic').find('a').each(function(index,ele){
        var origin_href = $(ele).attr('href');
        if (origin_href!="#" && origin_href.indexOf('?') == -1){
          $(ele).attr('href',origin_href+params);
        }
      });
    }
  
    setUrl();
  
    var clipboard = null,
        $btncopy  = $("#copy-text");
  
    clipboard = new Clipboard("#copy-text", {
      text: function(trigger) {
        return $("#blob_raw").val();
      }
    })
  
    clipboard.on('success', function(e) {
      $btncopy.popup('hide');
      $btncopy.popup('destroy');
      $btncopy.popup({content: '已复制', position: 'bottom center'});
      $btncopy.popup('show');
    })
  
    clipboard.on('error', function(e) {
      var giteeModal = new GiteeModalHelper({okText: '确定'});
      giteeModal.alert("一键复制", '复制失败，请手动复制');
    })
  
    $(function() {
      $btncopy.popup({
        content: '点击复制',
        position: 'bottom center'
      })
    })
  
  } catch (error) {
    console.log('blob/action error:' + error);
  }
  
  $('.disabled-edit-readonly').popup({
    content: "只读文件不可编辑",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-edit-readonly').click(function() {
    return false
  })
</script>
<style>
  .disabled-edit-readonly {
    background-color: #dcddde !important;
    color: rgba(0, 0, 0, 0.4) !important;
    opacity: 0.3 !important;
    background-image: none !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important; }
</style>
</div>
</div>
<div class='contributor-description'><span class='recent-commit' style='margin-top: 0.7rem'>
<a class="commit-author-link  js-popover-card" data-username="null" href="mailto:82073070+wuzhi03@users.noreply.github.com">wuzhi03</a>
<span>提交于</span>
<span class='timeago commit-date' title='2021-04-07 11:27:54 +0800'>
2021-04-07 11:27
</span>
.
<a href="/shuye72/MyActions/commit/3ca47aca44de6ac9ddc8f1ae1b6e7beaed5c156f">新库wuzhi03</a>
</span>
</div>
</div>
<div class='clearfix'></div>
<div class='file_content code'>
<div class='lines white'>
<div class='line-numbers'><a href='#L1' id='L1'>1</a><a href='#L2' id='L2'>2</a><a href='#L3' id='L3'>3</a><a href='#L4' id='L4'>4</a><a href='#L5' id='L5'>5</a><a href='#L6' id='L6'>6</a><a href='#L7' id='L7'>7</a><a href='#L8' id='L8'>8</a><a href='#L9' id='L9'>9</a><a href='#L10' id='L10'>10</a><a href='#L11' id='L11'>11</a><a href='#L12' id='L12'>12</a><a href='#L13' id='L13'>13</a><a href='#L14' id='L14'>14</a><a href='#L15' id='L15'>15</a><a href='#L16' id='L16'>16</a><a href='#L17' id='L17'>17</a><a href='#L18' id='L18'>18</a><a href='#L19' id='L19'>19</a><a href='#L20' id='L20'>20</a><a href='#L21' id='L21'>21</a><a href='#L22' id='L22'>22</a><a href='#L23' id='L23'>23</a><a href='#L24' id='L24'>24</a><a href='#L25' id='L25'>25</a><a href='#L26' id='L26'>26</a><a href='#L27' id='L27'>27</a><a href='#L28' id='L28'>28</a><a href='#L29' id='L29'>29</a><a href='#L30' id='L30'>30</a><a href='#L31' id='L31'>31</a><a href='#L32' id='L32'>32</a><a href='#L33' id='L33'>33</a><a href='#L34' id='L34'>34</a><a href='#L35' id='L35'>35</a><a href='#L36' id='L36'>36</a><a href='#L37' id='L37'>37</a><a href='#L38' id='L38'>38</a><a href='#L39' id='L39'>39</a><a href='#L40' id='L40'>40</a><a href='#L41' id='L41'>41</a><a href='#L42' id='L42'>42</a><a href='#L43' id='L43'>43</a><a href='#L44' id='L44'>44</a><a href='#L45' id='L45'>45</a><a href='#L46' id='L46'>46</a><a href='#L47' id='L47'>47</a><a href='#L48' id='L48'>48</a><a href='#L49' id='L49'>49</a><a href='#L50' id='L50'>50</a><a href='#L51' id='L51'>51</a><a href='#L52' id='L52'>52</a><a href='#L53' id='L53'>53</a><a href='#L54' id='L54'>54</a><a href='#L55' id='L55'>55</a><a href='#L56' id='L56'>56</a><a href='#L57' id='L57'>57</a><a href='#L58' id='L58'>58</a><a href='#L59' id='L59'>59</a><a href='#L60' id='L60'>60</a><a href='#L61' id='L61'>61</a><a href='#L62' id='L62'>62</a><a href='#L63' id='L63'>63</a><a href='#L64' id='L64'>64</a><a href='#L65' id='L65'>65</a><a href='#L66' id='L66'>66</a><a href='#L67' id='L67'>67</a><a href='#L68' id='L68'>68</a><a href='#L69' id='L69'>69</a><a href='#L70' id='L70'>70</a><a href='#L71' id='L71'>71</a><a href='#L72' id='L72'>72</a><a href='#L73' id='L73'>73</a><a href='#L74' id='L74'>74</a><a href='#L75' id='L75'>75</a><a href='#L76' id='L76'>76</a><a href='#L77' id='L77'>77</a><a href='#L78' id='L78'>78</a><a href='#L79' id='L79'>79</a><a href='#L80' id='L80'>80</a><a href='#L81' id='L81'>81</a><a href='#L82' id='L82'>82</a><a href='#L83' id='L83'>83</a><a href='#L84' id='L84'>84</a><a href='#L85' id='L85'>85</a><a href='#L86' id='L86'>86</a><a href='#L87' id='L87'>87</a><a href='#L88' id='L88'>88</a><a href='#L89' id='L89'>89</a><a href='#L90' id='L90'>90</a><a href='#L91' id='L91'>91</a><a href='#L92' id='L92'>92</a><a href='#L93' id='L93'>93</a><a href='#L94' id='L94'>94</a><a href='#L95' id='L95'>95</a><a href='#L96' id='L96'>96</a><a href='#L97' id='L97'>97</a><a href='#L98' id='L98'>98</a><a href='#L99' id='L99'>99</a><a href='#L100' id='L100'>100</a><a href='#L101' id='L101'>101</a><a href='#L102' id='L102'>102</a><a href='#L103' id='L103'>103</a><a href='#L104' id='L104'>104</a><a href='#L105' id='L105'>105</a><a href='#L106' id='L106'>106</a><a href='#L107' id='L107'>107</a><a href='#L108' id='L108'>108</a><a href='#L109' id='L109'>109</a><a href='#L110' id='L110'>110</a><a href='#L111' id='L111'>111</a><a href='#L112' id='L112'>112</a><a href='#L113' id='L113'>113</a><a href='#L114' id='L114'>114</a><a href='#L115' id='L115'>115</a><a href='#L116' id='L116'>116</a><a href='#L117' id='L117'>117</a><a href='#L118' id='L118'>118</a><a href='#L119' id='L119'>119</a><a href='#L120' id='L120'>120</a><a href='#L121' id='L121'>121</a><a href='#L122' id='L122'>122</a><a href='#L123' id='L123'>123</a><a href='#L124' id='L124'>124</a><a href='#L125' id='L125'>125</a><a href='#L126' id='L126'>126</a><a href='#L127' id='L127'>127</a><a href='#L128' id='L128'>128</a><a href='#L129' id='L129'>129</a><a href='#L130' id='L130'>130</a><a href='#L131' id='L131'>131</a><a href='#L132' id='L132'>132</a><a href='#L133' id='L133'>133</a><a href='#L134' id='L134'>134</a><a href='#L135' id='L135'>135</a><a href='#L136' id='L136'>136</a><a href='#L137' id='L137'>137</a><a href='#L138' id='L138'>138</a><a href='#L139' id='L139'>139</a><a href='#L140' id='L140'>140</a><a href='#L141' id='L141'>141</a><a href='#L142' id='L142'>142</a><a href='#L143' id='L143'>143</a><a href='#L144' id='L144'>144</a><a href='#L145' id='L145'>145</a><a href='#L146' id='L146'>146</a><a href='#L147' id='L147'>147</a><a href='#L148' id='L148'>148</a><a href='#L149' id='L149'>149</a><a href='#L150' id='L150'>150</a><a href='#L151' id='L151'>151</a><a href='#L152' id='L152'>152</a><a href='#L153' id='L153'>153</a><a href='#L154' id='L154'>154</a><a href='#L155' id='L155'>155</a><a href='#L156' id='L156'>156</a><a href='#L157' id='L157'>157</a><a href='#L158' id='L158'>158</a><a href='#L159' id='L159'>159</a><a href='#L160' id='L160'>160</a><a href='#L161' id='L161'>161</a><a href='#L162' id='L162'>162</a><a href='#L163' id='L163'>163</a><a href='#L164' id='L164'>164</a><a href='#L165' id='L165'>165</a><a href='#L166' id='L166'>166</a><a href='#L167' id='L167'>167</a><a href='#L168' id='L168'>168</a><a href='#L169' id='L169'>169</a><a href='#L170' id='L170'>170</a><a href='#L171' id='L171'>171</a><a href='#L172' id='L172'>172</a><a href='#L173' id='L173'>173</a><a href='#L174' id='L174'>174</a><a href='#L175' id='L175'>175</a><a href='#L176' id='L176'>176</a><a href='#L177' id='L177'>177</a><a href='#L178' id='L178'>178</a><a href='#L179' id='L179'>179</a><a href='#L180' id='L180'>180</a><a href='#L181' id='L181'>181</a><a href='#L182' id='L182'>182</a><a href='#L183' id='L183'>183</a><a href='#L184' id='L184'>184</a><a href='#L185' id='L185'>185</a><a href='#L186' id='L186'>186</a><a href='#L187' id='L187'>187</a><a href='#L188' id='L188'>188</a><a href='#L189' id='L189'>189</a><a href='#L190' id='L190'>190</a><a href='#L191' id='L191'>191</a><a href='#L192' id='L192'>192</a><a href='#L193' id='L193'>193</a><a href='#L194' id='L194'>194</a><a href='#L195' id='L195'>195</a><a href='#L196' id='L196'>196</a><a href='#L197' id='L197'>197</a><a href='#L198' id='L198'>198</a><a href='#L199' id='L199'>199</a><a href='#L200' id='L200'>200</a><a href='#L201' id='L201'>201</a><a href='#L202' id='L202'>202</a><a href='#L203' id='L203'>203</a><a href='#L204' id='L204'>204</a><a href='#L205' id='L205'>205</a><a href='#L206' id='L206'>206</a><a href='#L207' id='L207'>207</a><a href='#L208' id='L208'>208</a><a href='#L209' id='L209'>209</a><a href='#L210' id='L210'>210</a><a href='#L211' id='L211'>211</a><a href='#L212' id='L212'>212</a><a href='#L213' id='L213'>213</a><a href='#L214' id='L214'>214</a><a href='#L215' id='L215'>215</a><a href='#L216' id='L216'>216</a><a href='#L217' id='L217'>217</a><a href='#L218' id='L218'>218</a><a href='#L219' id='L219'>219</a><a href='#L220' id='L220'>220</a><a href='#L221' id='L221'>221</a><a href='#L222' id='L222'>222</a><a href='#L223' id='L223'>223</a><a href='#L224' id='L224'>224</a><a href='#L225' id='L225'>225</a><a href='#L226' id='L226'>226</a><a href='#L227' id='L227'>227</a><a href='#L228' id='L228'>228</a><a href='#L229' id='L229'>229</a><a href='#L230' id='L230'>230</a><a href='#L231' id='L231'>231</a><a href='#L232' id='L232'>232</a><a href='#L233' id='L233'>233</a><a href='#L234' id='L234'>234</a><a href='#L235' id='L235'>235</a><a href='#L236' id='L236'>236</a><a href='#L237' id='L237'>237</a><a href='#L238' id='L238'>238</a><a href='#L239' id='L239'>239</a><a href='#L240' id='L240'>240</a><a href='#L241' id='L241'>241</a><a href='#L242' id='L242'>242</a><a href='#L243' id='L243'>243</a><a href='#L244' id='L244'>244</a><a href='#L245' id='L245'>245</a><a href='#L246' id='L246'>246</a><a href='#L247' id='L247'>247</a><a href='#L248' id='L248'>248</a><a href='#L249' id='L249'>249</a><a href='#L250' id='L250'>250</a><a href='#L251' id='L251'>251</a><a href='#L252' id='L252'>252</a><a href='#L253' id='L253'>253</a><a href='#L254' id='L254'>254</a><a href='#L255' id='L255'>255</a><a href='#L256' id='L256'>256</a><a href='#L257' id='L257'>257</a><a href='#L258' id='L258'>258</a><a href='#L259' id='L259'>259</a><a href='#L260' id='L260'>260</a><a href='#L261' id='L261'>261</a><a href='#L262' id='L262'>262</a><a href='#L263' id='L263'>263</a><a href='#L264' id='L264'>264</a><a href='#L265' id='L265'>265</a><a href='#L266' id='L266'>266</a><a href='#L267' id='L267'>267</a><a href='#L268' id='L268'>268</a><a href='#L269' id='L269'>269</a><a href='#L270' id='L270'>270</a><a href='#L271' id='L271'>271</a><a href='#L272' id='L272'>272</a><a href='#L273' id='L273'>273</a><a href='#L274' id='L274'>274</a><a href='#L275' id='L275'>275</a><a href='#L276' id='L276'>276</a><a href='#L277' id='L277'>277</a><a href='#L278' id='L278'>278</a><a href='#L279' id='L279'>279</a><a href='#L280' id='L280'>280</a></div><div class="highlight"><pre class=""><div class='line' id='LC1'><span class="cm">/*</span>&#x000A;</div><div class='line' id='LC2'><span class="cm">京东家庭号</span>&#x000A;</div><div class='line' id='LC3'><span class="cm">活动入口：玩一玩-家庭号</span>&#x000A;</div><div class='line' id='LC4'><span class="cm">8000幸福值可换100京豆，一天任务做完大概300幸福值，周期较长</span>&#x000A;</div><div class='line' id='LC5'><span class="cm">已支持IOS双京东账号,Node.js支持N个京东账号</span>&#x000A;</div><div class='line' id='LC6'><span class="cm">脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js</span>&#x000A;</div><div class='line' id='LC7'>&#x000A;</div><div class='line' id='LC8'><span class="cm">易黑号，建议禁用</span>&#x000A;</div><div class='line' id='LC9'><span class="cm">脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js</span>&#x000A;</div><div class='line' id='LC10'><span class="cm">============Quantumultx===============</span>&#x000A;</div><div class='line' id='LC11'><span class="cm">[task_local]</span>&#x000A;</div><div class='line' id='LC12'><span class="cm">#京东家庭号</span>&#x000A;</div><div class='line' id='LC13'><span class="cm">1 12,23 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_family.js, tag=京东家庭号, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_family.png, enabled=true</span>&#x000A;</div><div class='line' id='LC14'>&#x000A;</div><div class='line' id='LC15'><span class="cm">================Loon==============</span>&#x000A;</div><div class='line' id='LC16'><span class="cm">[Script]</span>&#x000A;</div><div class='line' id='LC17'><span class="cm">cron "1 12,23 * * *" script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_family.js,tag=京东家庭号</span>&#x000A;</div><div class='line' id='LC18'>&#x000A;</div><div class='line' id='LC19'><span class="cm">===============Surge=================</span>&#x000A;</div><div class='line' id='LC20'><span class="cm">京东家庭号 = type=cron,cronexp="1 12,23 * * *",wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_family.js</span>&#x000A;</div><div class='line' id='LC21'>&#x000A;</div><div class='line' id='LC22'><span class="cm">============小火箭=========</span>&#x000A;</div><div class='line' id='LC23'><span class="cm">京东家庭号 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_family.js, cronexpr="1 12,23 * * *", timeout=3600, enable=true</span>&#x000A;</div><div class='line' id='LC24'><span class="cm"> */</span>&#x000A;</div><div class='line' id='LC25'><span class="kd">const</span> <span class="nx">$</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Env</span><span class="p">(</span><span class="dl">'</span><span class="s1">京东家庭号</span><span class="dl">'</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC26'><span class="kd">const</span> <span class="nx">notify</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isNode</span><span class="p">()</span> <span class="p">?</span> <span class="nx">require</span><span class="p">(</span><span class="dl">'</span><span class="s1">./sendNotify</span><span class="dl">'</span><span class="p">)</span> <span class="p">:</span> <span class="dl">''</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC27'><span class="kd">const</span> <span class="nx">jdCookieNode</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isNode</span><span class="p">()</span> <span class="p">?</span> <span class="nx">require</span><span class="p">(</span><span class="dl">'</span><span class="s1">./jdCookie.js</span><span class="dl">'</span><span class="p">)</span> <span class="p">:</span> <span class="dl">''</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC28'><span class="c1">//Node.js用户请在jdCookie.js处填写京东ck;</span>&#x000A;</div><div class='line' id='LC29'><span class="c1">//IOS等用户直接用NobyDa的jd cookie</span>&#x000A;</div><div class='line' id='LC30'><span class="kd">let</span> <span class="nx">cookiesArr</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">cookie</span> <span class="o">=</span> <span class="dl">''</span><span class="p">,</span> <span class="nx">message</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC31'>&#x000A;</div><div class='line' id='LC32'><span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">isNode</span><span class="p">())</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC33'>  <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">jdCookieNode</span><span class="p">).</span><span class="nx">forEach</span><span class="p">((</span><span class="nx">item</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC34'>    <span class="nx">cookiesArr</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">jdCookieNode</span><span class="p">[</span><span class="nx">item</span><span class="p">])</span>&#x000A;</div><div class='line' id='LC35'>  <span class="p">})</span>&#x000A;</div><div class='line' id='LC36'>  <span class="k">if</span> <span class="p">(</span><span class="nx">process</span><span class="p">.</span><span class="nx">env</span><span class="p">.</span><span class="nx">JD_DEBUG</span> <span class="o">&amp;&amp;</span> <span class="nx">process</span><span class="p">.</span><span class="nx">env</span><span class="p">.</span><span class="nx">JD_DEBUG</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">false</span><span class="dl">'</span><span class="p">)</span> <span class="nx">console</span><span class="p">.</span><span class="nx">log</span> <span class="o">=</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC37'>  <span class="p">};</span>&#x000A;</div><div class='line' id='LC38'><span class="p">}</span> <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC39'>  <span class="nx">cookiesArr</span> <span class="o">=</span> <span class="p">[</span><span class="nx">$</span><span class="p">.</span><span class="nx">getdata</span><span class="p">(</span><span class="dl">'</span><span class="s1">CookieJD</span><span class="dl">'</span><span class="p">),</span> <span class="nx">$</span><span class="p">.</span><span class="nx">getdata</span><span class="p">(</span><span class="dl">'</span><span class="s1">CookieJD2</span><span class="dl">'</span><span class="p">),</span> <span class="p">...</span><span class="nx">jsonParse</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">getdata</span><span class="p">(</span><span class="dl">'</span><span class="s1">CookiesJD</span><span class="dl">'</span><span class="p">)</span> <span class="o">||</span> <span class="dl">"</span><span class="s2">[]</span><span class="dl">"</span><span class="p">).</span><span class="nx">map</span><span class="p">(</span><span class="nx">item</span> <span class="o">=&gt;</span> <span class="nx">item</span><span class="p">.</span><span class="nx">cookie</span><span class="p">)].</span><span class="nx">filter</span><span class="p">(</span><span class="nx">item</span> <span class="o">=&gt;</span> <span class="o">!!</span><span class="nx">item</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC40'><span class="p">}</span>&#x000A;</div><div class='line' id='LC41'>&#x000A;</div><div class='line' id='LC42'><span class="o">!</span><span class="p">(</span><span class="k">async</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC43'>  <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">cookiesArr</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC44'>    <span class="nx">$</span><span class="p">.</span><span class="nx">msg</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span> <span class="dl">'</span><span class="s1">【提示】请先获取京东账号一cookie</span><span class="se">\n</span><span class="s1">直接使用NobyDa的京东签到获取</span><span class="dl">'</span><span class="p">,</span> <span class="dl">'</span><span class="s1">https://bean.m.jd.com/bean/signIndex.action</span><span class="dl">'</span><span class="p">,</span> <span class="p">{</span><span class="dl">"</span><span class="s2">open-url</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">https://bean.m.jd.com/bean/signIndex.action</span><span class="dl">"</span><span class="p">});</span>&#x000A;</div><div class='line' id='LC45'>    <span class="k">return</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC46'>  <span class="p">}</span>&#x000A;</div><div class='line' id='LC47'>  <span class="k">for</span> <span class="p">(</span><span class="kd">let</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">cookiesArr</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC48'>    <span class="k">if</span> <span class="p">(</span><span class="nx">cookiesArr</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC49'>      <span class="nx">cookie</span> <span class="o">=</span> <span class="nx">cookiesArr</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC50'>      <span class="nx">$</span><span class="p">.</span><span class="nx">UserName</span> <span class="o">=</span> <span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">cookie</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/pt_pin=</span><span class="se">([^</span><span class="sr">; </span><span class="se">]</span><span class="sr">+</span><span class="se">)(?=</span><span class="sr">;</span><span class="se">?)</span><span class="sr">/</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">cookie</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/pt_pin=</span><span class="se">([^</span><span class="sr">; </span><span class="se">]</span><span class="sr">+</span><span class="se">)(?=</span><span class="sr">;</span><span class="se">?)</span><span class="sr">/</span><span class="p">)[</span><span class="mi">1</span><span class="p">])</span>&#x000A;</div><div class='line' id='LC51'>      <span class="nx">$</span><span class="p">.</span><span class="nx">index</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC52'>      <span class="nx">$</span><span class="p">.</span><span class="nx">isLogin</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC53'>      <span class="nx">$</span><span class="p">.</span><span class="nx">nickName</span> <span class="o">=</span> <span class="dl">''</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC54'>      <span class="nx">$</span><span class="p">.</span><span class="nx">beans</span> <span class="o">=</span> <span class="mi">0</span>&#x000A;</div><div class='line' id='LC55'>      <span class="nx">message</span> <span class="o">=</span> <span class="dl">''</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC56'>      <span class="k">await</span> <span class="nx">TotalBean</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC57'>      <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`\n******开始【京东账号</span><span class="p">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">index</span><span class="p">}</span><span class="s2">】</span><span class="p">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">nickName</span> <span class="o">||</span> <span class="nx">$</span><span class="p">.</span><span class="nx">UserName</span><span class="p">}</span><span class="s2">*********\n`</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC58'>      <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">isLogin</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC59'>        <span class="nx">$</span><span class="p">.</span><span class="nx">msg</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span> <span class="s2">`【提示】cookie已失效`</span><span class="p">,</span> <span class="s2">`京东账号</span><span class="p">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">index</span><span class="p">}</span><span class="s2"> </span><span class="p">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">nickName</span> <span class="o">||</span> <span class="nx">$</span><span class="p">.</span><span class="nx">UserName</span><span class="p">}</span><span class="s2">\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`</span><span class="p">,</span> <span class="p">{</span><span class="dl">"</span><span class="s2">open-url</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">https://bean.m.jd.com/bean/signIndex.action</span><span class="dl">"</span><span class="p">});</span>&#x000A;</div><div class='line' id='LC60'>        <span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">isNode</span><span class="p">())</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC61'>          <span class="k">await</span> <span class="nx">notify</span><span class="p">.</span><span class="nx">sendNotify</span><span class="p">(</span><span class="s2">`</span><span class="p">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">name</span><span class="p">}</span><span class="s2">cookie已失效 - </span><span class="p">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">UserName</span><span class="p">}</span><span class="s2">`</span><span class="p">,</span> <span class="s2">`京东账号</span><span class="p">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">index</span><span class="p">}</span><span class="s2"> </span><span class="p">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">UserName</span><span class="p">}</span><span class="s2">\n请重新登录获取cookie`</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC62'>        <span class="p">}</span>&#x000A;</div><div class='line' id='LC63'>        <span class="k">continue</span>&#x000A;</div><div class='line' id='LC64'>      <span class="p">}</span>&#x000A;</div><div class='line' id='LC65'>      <span class="k">await</span> <span class="nx">jdFamily</span><span class="p">()</span>&#x000A;</div><div class='line' id='LC66'>    <span class="p">}</span>&#x000A;</div><div class='line' id='LC67'>  <span class="p">}</span>&#x000A;</div><div class='line' id='LC68'><span class="p">})()</span>&#x000A;</div><div class='line' id='LC69'>  <span class="p">.</span><span class="k">catch</span><span class="p">((</span><span class="nx">e</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC70'>    <span class="nx">$</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">''</span><span class="p">,</span> <span class="s2">`❌ </span><span class="p">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">name</span><span class="p">}</span><span class="s2">, 失败! 原因: </span><span class="p">${</span><span class="nx">e</span><span class="p">}</span><span class="s2">!`</span><span class="p">,</span> <span class="dl">''</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC71'>  <span class="p">})</span>&#x000A;</div><div class='line' id='LC72'>  <span class="p">.</span><span class="k">finally</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC73'>    <span class="nx">$</span><span class="p">.</span><span class="nx">done</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC74'>  <span class="p">})</span>&#x000A;</div><div class='line' id='LC75'>&#x000A;</div><div class='line' id='LC76'><span class="k">async</span> <span class="kd">function</span> <span class="nx">jdFamily</span><span class="p">()</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC77'>  <span class="k">await</span> <span class="nx">getInfo</span><span class="p">()</span>&#x000A;</div><div class='line' id='LC78'>  <span class="k">await</span> <span class="nx">getUserInfo</span><span class="p">()</span>&#x000A;</div><div class='line' id='LC79'>  <span class="k">await</span> <span class="nx">getUserInfo</span><span class="p">(</span><span class="kc">true</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC80'>  <span class="k">await</span> <span class="nx">showMsg</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC81'><span class="p">}</span>&#x000A;</div><div class='line' id='LC82'>&#x000A;</div><div class='line' id='LC83'><span class="kd">function</span> <span class="nx">showMsg</span><span class="p">()</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC84'>  <span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="nx">resolve</span> <span class="o">=&gt;</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC85'>    <span class="c1">// message += `本次运行获得${$.beans}京豆`</span>&#x000A;</div><div class='line' id='LC86'>    <span class="nx">$</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span> <span class="dl">''</span><span class="p">,</span> <span class="s2">`京东账号</span><span class="p">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">index</span><span class="p">}${</span><span class="nx">$</span><span class="p">.</span><span class="nx">nickName</span><span class="p">}</span><span class="s2">\n</span><span class="p">${</span><span class="nx">message</span><span class="p">}</span><span class="s2">`</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC87'>    <span class="nx">resolve</span><span class="p">()</span>&#x000A;</div><div class='line' id='LC88'>  <span class="p">})</span>&#x000A;</div><div class='line' id='LC89'><span class="p">}</span>&#x000A;</div><div class='line' id='LC90'>&#x000A;</div><div class='line' id='LC91'><span class="kd">function</span> <span class="nx">getInfo</span><span class="p">()</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC92'>  <span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="nx">resolve</span> <span class="o">=&gt;</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC93'>    <span class="nx">$</span><span class="p">.</span><span class="kd">get</span><span class="p">({</span>&#x000A;</div><div class='line' id='LC94'>      <span class="na">url</span><span class="p">:</span> <span class="dl">'</span><span class="s1">https://lgame.jd.com/babelDiy/Zeus/VhPVVaw8nTSVr69E757fyCebwKG/index.html</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC95'>      <span class="na">headers</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC96'>        <span class="na">Cookie</span><span class="p">:</span> <span class="nx">cookie</span>&#x000A;</div><div class='line' id='LC97'>      <span class="p">}</span>&#x000A;</div><div class='line' id='LC98'>    <span class="p">},</span> <span class="k">async</span> <span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC99'>      <span class="k">try</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC100'>        <span class="nx">$</span><span class="p">.</span><span class="nx">info</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/var snsConfig = </span><span class="se">(</span><span class="sr">.*</span><span class="se">)</span><span class="sr">/</span><span class="p">)[</span><span class="mi">1</span><span class="p">])</span>&#x000A;</div><div class='line' id='LC101'>        <span class="nx">$</span><span class="p">.</span><span class="nx">prize</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">info</span><span class="p">.</span><span class="nx">prize</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC102'>      <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC103'>        <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC104'>      <span class="p">}</span> <span class="k">finally</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC105'>        <span class="nx">resolve</span><span class="p">()</span>&#x000A;</div><div class='line' id='LC106'>      <span class="p">}</span>&#x000A;</div><div class='line' id='LC107'>    <span class="p">})</span>&#x000A;</div><div class='line' id='LC108'>  <span class="p">})</span>&#x000A;</div><div class='line' id='LC109'><span class="p">}</span>&#x000A;</div><div class='line' id='LC110'>&#x000A;</div><div class='line' id='LC111'><span class="kd">function</span> <span class="nx">getUserInfo</span><span class="p">(</span><span class="nx">info</span> <span class="o">=</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC112'>  <span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="nx">resolve</span> <span class="o">=&gt;</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC113'>    <span class="nx">$</span><span class="p">.</span><span class="kd">get</span><span class="p">(</span><span class="nx">taskUrl</span><span class="p">(</span><span class="dl">'</span><span class="s1">family_query</span><span class="dl">'</span><span class="p">),</span> <span class="k">async</span> <span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC114'>      <span class="k">try</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC115'>        <span class="k">if</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC116'>          <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`</span><span class="p">${</span><span class="nx">err</span><span class="p">}</span><span class="s2">,</span><span class="p">${</span><span class="nx">jsonParse</span><span class="p">(</span><span class="nx">resp</span><span class="p">.</span><span class="nx">body</span><span class="p">)[</span><span class="dl">'</span><span class="s1">message</span><span class="dl">'</span><span class="p">]}</span><span class="s2">`</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC117'>          <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`</span><span class="p">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">name</span><span class="p">}</span><span class="s2"> API请求失败，请检查网路重试`</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC118'>        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC119'>          <span class="nx">$</span><span class="p">.</span><span class="nx">userInfo</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/query</span><span class="se">\((</span><span class="sr">.*</span><span class="se">)\n</span><span class="sr">/</span><span class="p">)[</span><span class="mi">1</span><span class="p">])</span>&#x000A;</div><div class='line' id='LC120'>          <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`当前幸福值：</span><span class="p">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">userInfo</span><span class="p">.</span><span class="nx">tatalprofits</span><span class="p">}</span><span class="s2">`</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC121'>          <span class="k">if</span> <span class="p">(</span><span class="nx">info</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC122'>            <span class="nx">message</span> <span class="o">+=</span> <span class="s2">`当前幸福值：</span><span class="p">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">userInfo</span><span class="p">.</span><span class="nx">tatalprofits</span><span class="p">}</span><span class="s2">`</span>&#x000A;</div><div class='line' id='LC123'>          <span class="p">}</span> <span class="k">else</span> <span class="k">for</span> <span class="p">(</span><span class="kd">let</span> <span class="nx">task</span> <span class="k">of</span> <span class="nx">$</span><span class="p">.</span><span class="nx">info</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">tasks</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC124'>            <span class="kd">let</span> <span class="nx">vo</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">userInfo</span><span class="p">.</span><span class="nx">tasklist</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">vo</span> <span class="o">=&gt;</span> <span class="nx">vo</span><span class="p">.</span><span class="nx">taskid</span> <span class="o">===</span> <span class="nx">task</span><span class="p">[</span><span class="dl">'</span><span class="s1">_id</span><span class="dl">'</span><span class="p">])</span>&#x000A;</div><div class='line' id='LC125'>            <span class="k">if</span> <span class="p">(</span><span class="nx">vo</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC126'>              <span class="nx">vo</span> <span class="o">=</span> <span class="nx">vo</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>&#x000A;</div><div class='line' id='LC127'>              <span class="c1">// 5fed97ce5da81a8c069810df 健身 2 9 3</span>&#x000A;</div><div class='line' id='LC128'>              <span class="c1">// 5fed97ce5da81a8c069810de 撸猫 80 6 1</span>&#x000A;</div><div class='line' id='LC129'>              <span class="c1">// 5fed97ce5da81a8c069810dd 做美食 40 10 2</span>&#x000A;</div><div class='line' id='LC130'>              <span class="c1">// 5fed97ce5da81a8c069810dc 去组队 150 13 5</span>&#x000A;</div><div class='line' id='LC131'>              <span class="k">if</span> <span class="p">(</span><span class="nx">vo</span><span class="p">[</span><span class="dl">'</span><span class="s1">isdo</span><span class="dl">'</span><span class="p">]</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC132'>                <span class="k">if</span> <span class="p">(</span><span class="nx">vo</span><span class="p">[</span><span class="dl">'</span><span class="s1">times</span><span class="dl">'</span><span class="p">]</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC133'>                  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`去做任务</span><span class="p">${</span><span class="nx">task</span><span class="p">[</span><span class="dl">'</span><span class="s1">_id</span><span class="dl">'</span><span class="p">]}</span><span class="s2">`</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC134'>                  <span class="k">await</span> <span class="nx">doTask</span><span class="p">(</span><span class="nx">task</span><span class="p">[</span><span class="dl">'</span><span class="s1">_id</span><span class="dl">'</span><span class="p">])</span>&#x000A;</div><div class='line' id='LC135'>                  <span class="k">await</span> <span class="nx">$</span><span class="p">.</span><span class="nx">wait</span><span class="p">(</span><span class="mi">1000</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC136'>                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC137'>                  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`</span><span class="p">${</span><span class="nb">Math</span><span class="p">.</span><span class="nx">trunc</span><span class="p">(</span><span class="nx">vo</span><span class="p">[</span><span class="dl">'</span><span class="s1">times</span><span class="dl">'</span><span class="p">]</span> <span class="o">/</span> <span class="mi">60</span><span class="p">)}</span><span class="s2">分钟可后做任务</span><span class="p">${</span><span class="nx">task</span><span class="p">[</span><span class="dl">'</span><span class="s1">_id</span><span class="dl">'</span><span class="p">]}</span><span class="s2">`</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC138'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC139'>              <span class="p">}</span>&#x000A;</div><div class='line' id='LC140'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC141'>          <span class="p">}</span>&#x000A;</div><div class='line' id='LC142'>        <span class="p">}</span>&#x000A;</div><div class='line' id='LC143'>      <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC144'>        <span class="nx">$</span><span class="p">.</span><span class="nx">logErr</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">resp</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC145'>      <span class="p">}</span> <span class="k">finally</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC146'>        <span class="nx">resolve</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC147'>      <span class="p">}</span>&#x000A;</div><div class='line' id='LC148'>    <span class="p">})</span>&#x000A;</div><div class='line' id='LC149'>  <span class="p">})</span>&#x000A;</div><div class='line' id='LC150'><span class="p">}</span>&#x000A;</div><div class='line' id='LC151'>&#x000A;</div><div class='line' id='LC152'><span class="kd">function</span> <span class="nx">doTask</span><span class="p">(</span><span class="nx">taskId</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC153'>  <span class="kd">let</span> <span class="nx">body</span> <span class="o">=</span> <span class="s2">`taskid=</span><span class="p">${</span><span class="nx">taskId</span><span class="p">}</span><span class="s2">`</span>&#x000A;</div><div class='line' id='LC154'>  <span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="nx">resolve</span> <span class="o">=&gt;</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC155'>    <span class="nx">$</span><span class="p">.</span><span class="kd">get</span><span class="p">(</span><span class="nx">taskUrl</span><span class="p">(</span><span class="dl">'</span><span class="s1">family_task</span><span class="dl">'</span><span class="p">,</span> <span class="nx">body</span><span class="p">),</span> <span class="k">async</span> <span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC156'>      <span class="k">try</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC157'>        <span class="k">if</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC158'>          <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`</span><span class="p">${</span><span class="nx">err</span><span class="p">}</span><span class="s2">,</span><span class="p">${</span><span class="nx">jsonParse</span><span class="p">(</span><span class="nx">resp</span><span class="p">.</span><span class="nx">body</span><span class="p">)[</span><span class="dl">'</span><span class="s1">message</span><span class="dl">'</span><span class="p">]}</span><span class="s2">`</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC159'>          <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`</span><span class="p">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">name</span><span class="p">}</span><span class="s2"> API请求失败，请检查网路重试`</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC160'>        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC161'>          <span class="nx">data</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/query</span><span class="se">\((</span><span class="sr">.*</span><span class="se">)\n</span><span class="sr">/</span><span class="p">)[</span><span class="mi">1</span><span class="p">])</span>&#x000A;</div><div class='line' id='LC162'>          <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">ret</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC163'>            <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`任务完成成功`</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC164'>          <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC165'>            <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`任务完成失败，原因未知`</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC166'>          <span class="p">}</span>&#x000A;</div><div class='line' id='LC167'>        <span class="p">}</span>&#x000A;</div><div class='line' id='LC168'>      <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC169'>        <span class="nx">$</span><span class="p">.</span><span class="nx">logErr</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">resp</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC170'>      <span class="p">}</span> <span class="k">finally</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC171'>        <span class="nx">resolve</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC172'>      <span class="p">}</span>&#x000A;</div><div class='line' id='LC173'>    <span class="p">})</span>&#x000A;</div><div class='line' id='LC174'>  <span class="p">})</span>&#x000A;</div><div class='line' id='LC175'><span class="p">}</span>&#x000A;</div><div class='line' id='LC176'>&#x000A;</div><div class='line' id='LC177'><span class="kd">function</span> <span class="nx">taskUrl</span><span class="p">(</span><span class="nx">function_id</span><span class="p">,</span> <span class="nx">body</span> <span class="o">=</span> <span class="dl">''</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC178'>  <span class="nx">body</span> <span class="o">=</span> <span class="s2">`activeid=</span><span class="p">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">info</span><span class="p">.</span><span class="nx">activeId</span><span class="p">}</span><span class="s2">&amp;token=</span><span class="p">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">info</span><span class="p">.</span><span class="nx">actToken</span><span class="p">}</span><span class="s2">&amp;sceneval=2&amp;shareid=&amp;t=</span><span class="p">${</span><span class="nb">Date</span><span class="p">.</span><span class="nx">now</span><span class="p">()}</span><span class="s2">&amp;_=</span><span class="p">${</span><span class="k">new</span> <span class="nb">Date</span><span class="p">().</span><span class="nx">getTime</span><span class="p">()}</span><span class="s2">&amp;callback=query&amp;</span><span class="p">${</span><span class="nx">body</span><span class="p">}</span><span class="s2">`</span>&#x000A;</div><div class='line' id='LC179'>  <span class="k">return</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC180'>    <span class="na">url</span><span class="p">:</span> <span class="s2">`https://wq.jd.com/activep3/family/</span><span class="p">${</span><span class="nx">function_id</span><span class="p">}</span><span class="s2">?</span><span class="p">${</span><span class="nx">body</span><span class="p">}</span><span class="s2">`</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC181'>    <span class="na">headers</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC182'>      <span class="dl">'</span><span class="s1">Host</span><span class="dl">'</span><span class="p">:</span> <span class="dl">'</span><span class="s1">wq.jd.com</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC183'>      <span class="dl">'</span><span class="s1">Accept</span><span class="dl">'</span><span class="p">:</span> <span class="dl">'</span><span class="s1">application/json</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC184'>      <span class="dl">'</span><span class="s1">Accept-Language</span><span class="dl">'</span><span class="p">:</span> <span class="dl">'</span><span class="s1">zh-cn</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC185'>      <span class="dl">'</span><span class="s1">Content-Type</span><span class="dl">'</span><span class="p">:</span> <span class="dl">'</span><span class="s1">application/json;charset=utf-8</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC186'>      <span class="dl">'</span><span class="s1">Origin</span><span class="dl">'</span><span class="p">:</span> <span class="dl">'</span><span class="s1">wq.jd.com</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC187'>      <span class="dl">'</span><span class="s1">User-Agent</span><span class="dl">'</span><span class="p">:</span> <span class="dl">'</span><span class="s1">JD4iPhone/167490 (iPhone; iOS 14.2; Scale/3.00)</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC188'>      <span class="dl">'</span><span class="s1">Referer</span><span class="dl">'</span><span class="p">:</span> <span class="s2">`https://anmp.jd.com/babelDiy/Zeus/xKACpgVjVJM7zPKbd5AGCij5yV9/index.html?wxAppName=jd`</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC189'>      <span class="dl">'</span><span class="s1">Cookie</span><span class="dl">'</span><span class="p">:</span> <span class="nx">cookie</span>&#x000A;</div><div class='line' id='LC190'>    <span class="p">}</span>&#x000A;</div><div class='line' id='LC191'>  <span class="p">}</span>&#x000A;</div><div class='line' id='LC192'><span class="p">}</span>&#x000A;</div><div class='line' id='LC193'>&#x000A;</div><div class='line' id='LC194'><span class="kd">function</span> <span class="nx">taskPostUrl</span><span class="p">(</span><span class="nx">function_id</span><span class="p">,</span> <span class="nx">body</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC195'>  <span class="k">return</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC196'>    <span class="na">url</span><span class="p">:</span> <span class="s2">`https://lzdz-isv.isvjcloud.com/</span><span class="p">${</span><span class="nx">function_id</span><span class="p">}</span><span class="s2">`</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC197'>    <span class="na">body</span><span class="p">:</span> <span class="nx">body</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC198'>    <span class="na">headers</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC199'>      <span class="dl">'</span><span class="s1">Host</span><span class="dl">'</span><span class="p">:</span> <span class="dl">'</span><span class="s1">lzdz-isv.isvjcloud.com</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC200'>      <span class="dl">'</span><span class="s1">Accept</span><span class="dl">'</span><span class="p">:</span> <span class="dl">'</span><span class="s1">application/json</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC201'>      <span class="dl">'</span><span class="s1">Accept-Language</span><span class="dl">'</span><span class="p">:</span> <span class="dl">'</span><span class="s1">zh-cn</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC202'>      <span class="dl">'</span><span class="s1">Content-Type</span><span class="dl">'</span><span class="p">:</span> <span class="dl">'</span><span class="s1">application/x-www-form-urlencoded</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC203'>      <span class="dl">'</span><span class="s1">Origin</span><span class="dl">'</span><span class="p">:</span> <span class="dl">'</span><span class="s1">https://lzdz-isv.isvjcloud.com</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC204'>      <span class="dl">'</span><span class="s1">User-Agent</span><span class="dl">'</span><span class="p">:</span> <span class="dl">'</span><span class="s1">JD4iPhone/167490 (iPhone; iOS 14.2; Scale/3.00)</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC205'>      <span class="dl">'</span><span class="s1">Referer</span><span class="dl">'</span><span class="p">:</span> <span class="s2">`https://lzdz-isv.isvjcloud.com/dingzhi/book/develop/activity?activityId=</span><span class="p">${</span><span class="nx">ACT_ID</span><span class="p">}</span><span class="s2">`</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC206'>      <span class="dl">'</span><span class="s1">Cookie</span><span class="dl">'</span><span class="p">:</span> <span class="s2">`</span><span class="p">${</span><span class="nx">cookie</span><span class="p">}</span><span class="s2"> isvToken=</span><span class="p">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">isvToken</span><span class="p">}</span><span class="s2">;`</span>&#x000A;</div><div class='line' id='LC207'>    <span class="p">}</span>&#x000A;</div><div class='line' id='LC208'>  <span class="p">}</span>&#x000A;</div><div class='line' id='LC209'><span class="p">}</span>&#x000A;</div><div class='line' id='LC210'>&#x000A;</div><div class='line' id='LC211'><span class="kd">function</span> <span class="nx">TotalBean</span><span class="p">()</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC212'>  <span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="k">async</span> <span class="nx">resolve</span> <span class="o">=&gt;</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC213'>    <span class="kd">const</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC214'>      <span class="dl">"</span><span class="s2">url</span><span class="dl">"</span><span class="p">:</span> <span class="s2">`https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC215'>      <span class="dl">"</span><span class="s2">headers</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC216'>        <span class="dl">"</span><span class="s2">Accept</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">application/json,text/plain, */*</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC217'>        <span class="dl">"</span><span class="s2">Content-Type</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">application/x-www-form-urlencoded</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC218'>        <span class="dl">"</span><span class="s2">Accept-Encoding</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">gzip, deflate, br</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC219'>        <span class="dl">"</span><span class="s2">Accept-Language</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">zh-cn</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC220'>        <span class="dl">"</span><span class="s2">Connection</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">keep-alive</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC221'>        <span class="dl">"</span><span class="s2">Cookie</span><span class="dl">"</span><span class="p">:</span> <span class="nx">cookie</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC222'>        <span class="dl">"</span><span class="s2">Referer</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC223'>        <span class="dl">"</span><span class="s2">User-Agent</span><span class="dl">"</span><span class="p">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isNode</span><span class="p">()</span> <span class="p">?</span> <span class="p">(</span><span class="nx">process</span><span class="p">.</span><span class="nx">env</span><span class="p">.</span><span class="nx">JD_USER_AGENT</span> <span class="p">?</span> <span class="nx">process</span><span class="p">.</span><span class="nx">env</span><span class="p">.</span><span class="nx">JD_USER_AGENT</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1</span><span class="dl">"</span><span class="p">)</span> <span class="p">:</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">getdata</span><span class="p">(</span><span class="dl">'</span><span class="s1">JDUA</span><span class="dl">'</span><span class="p">)</span> <span class="p">?</span> <span class="nx">$</span><span class="p">.</span><span class="nx">getdata</span><span class="p">(</span><span class="dl">'</span><span class="s1">JDUA</span><span class="dl">'</span><span class="p">)</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1</span><span class="dl">"</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC224'>      <span class="p">}</span>&#x000A;</div><div class='line' id='LC225'>    <span class="p">}</span>&#x000A;</div><div class='line' id='LC226'>    <span class="nx">$</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC227'>      <span class="k">try</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC228'>        <span class="k">if</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC229'>          <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`</span><span class="p">${</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">err</span><span class="p">)}</span><span class="s2">`</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC230'>          <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`</span><span class="p">${</span><span class="nx">$</span><span class="p">.</span><span class="nx">name</span><span class="p">}</span><span class="s2"> API请求失败，请检查网路重试`</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC231'>        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC232'>          <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC233'>            <span class="nx">data</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC234'>            <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="dl">'</span><span class="s1">retcode</span><span class="dl">'</span><span class="p">]</span> <span class="o">===</span> <span class="mi">13</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC235'>              <span class="nx">$</span><span class="p">.</span><span class="nx">isLogin</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span> <span class="c1">//cookie过期</span>&#x000A;</div><div class='line' id='LC236'>              <span class="k">return</span>&#x000A;</div><div class='line' id='LC237'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC238'>            <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="dl">'</span><span class="s1">retcode</span><span class="dl">'</span><span class="p">]</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC239'>              <span class="nx">$</span><span class="p">.</span><span class="nx">nickName</span> <span class="o">=</span> <span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="dl">'</span><span class="s1">base</span><span class="dl">'</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">[</span><span class="dl">'</span><span class="s1">base</span><span class="dl">'</span><span class="p">].</span><span class="nx">nickname</span><span class="p">)</span> <span class="o">||</span> <span class="nx">$</span><span class="p">.</span><span class="nx">UserName</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC240'>            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC241'>              <span class="nx">$</span><span class="p">.</span><span class="nx">nickName</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">UserName</span>&#x000A;</div><div class='line' id='LC242'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC243'>          <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC244'>            <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`京东服务器返回空数据`</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC245'>          <span class="p">}</span>&#x000A;</div><div class='line' id='LC246'>        <span class="p">}</span>&#x000A;</div><div class='line' id='LC247'>      <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC248'>        <span class="nx">$</span><span class="p">.</span><span class="nx">logErr</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">resp</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC249'>      <span class="p">}</span> <span class="k">finally</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC250'>        <span class="nx">resolve</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC251'>      <span class="p">}</span>&#x000A;</div><div class='line' id='LC252'>    <span class="p">})</span>&#x000A;</div><div class='line' id='LC253'>  <span class="p">})</span>&#x000A;</div><div class='line' id='LC254'><span class="p">}</span>&#x000A;</div><div class='line' id='LC255'>&#x000A;</div><div class='line' id='LC256'><span class="kd">function</span> <span class="nx">safeGet</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC257'>  <span class="k">try</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC258'>    <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">object</span><span class="dl">"</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC259'>      <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC260'>    <span class="p">}</span>&#x000A;</div><div class='line' id='LC261'>  <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC262'>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC263'>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`京东服务器访问数据为空，请检查自身设备网络情况`</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC264'>    <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC265'>  <span class="p">}</span>&#x000A;</div><div class='line' id='LC266'><span class="p">}</span>&#x000A;</div><div class='line' id='LC267'>&#x000A;</div><div class='line' id='LC268'><span class="kd">function</span> <span class="nx">jsonParse</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC269'>  <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">str</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC270'>    <span class="k">try</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC271'>      <span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC272'>    <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC273'>      <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC274'>      <span class="nx">$</span><span class="p">.</span><span class="nx">msg</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span> <span class="dl">''</span><span class="p">,</span> <span class="dl">'</span><span class="s1">不要在BoxJS手动复制粘贴修改cookie</span><span class="dl">'</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC275'>      <span class="k">return</span> <span class="p">[];</span>&#x000A;</div><div class='line' id='LC276'>    <span class="p">}</span>&#x000A;</div><div class='line' id='LC277'>  <span class="p">}</span>&#x000A;</div><div class='line' id='LC278'><span class="p">}</span>&#x000A;</div><div class='line' id='LC279'><span class="c1">// prettier-ignore</span>&#x000A;</div><div class='line' id='LC280'><span class="kd">function</span> <span class="nx">Env</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="kd">class</span> <span class="nx">s</span><span class="p">{</span><span class="kd">constructor</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">env</span><span class="o">=</span><span class="nx">t</span><span class="p">}</span><span class="nx">send</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="dl">"</span><span class="s2">GET</span><span class="dl">"</span><span class="p">){</span><span class="nx">t</span><span class="o">=</span><span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="o">==</span><span class="k">typeof</span> <span class="nx">t</span><span class="p">?{</span><span class="na">url</span><span class="p">:</span><span class="nx">t</span><span class="p">}:</span><span class="nx">t</span><span class="p">;</span><span class="kd">let</span> <span class="nx">s</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="kd">get</span><span class="p">;</span><span class="k">return</span><span class="dl">"</span><span class="s2">POST</span><span class="dl">"</span><span class="o">===</span><span class="nx">e</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">s</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">post</span><span class="p">),</span><span class="k">new</span> <span class="nb">Promise</span><span class="p">((</span><span class="nx">e</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span><span class="o">=&gt;</span><span class="p">{</span><span class="nx">s</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">t</span><span class="p">,(</span><span class="nx">t</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">r</span><span class="p">)</span><span class="o">=&gt;</span><span class="p">{</span><span class="nx">t</span><span class="p">?</span><span class="nx">i</span><span class="p">(</span><span class="nx">t</span><span class="p">):</span><span class="nx">e</span><span class="p">(</span><span class="nx">s</span><span class="p">)})})}</span><span class="kd">get</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">send</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">env</span><span class="p">,</span><span class="nx">t</span><span class="p">)}</span><span class="nx">post</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">send</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">env</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="dl">"</span><span class="s2">POST</span><span class="dl">"</span><span class="p">)}}</span><span class="k">return</span> <span class="k">new</span> <span class="kd">class</span><span class="p">{</span><span class="kd">constructor</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">=</span><span class="nx">t</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">http</span><span class="o">=</span><span class="k">new</span> <span class="nx">s</span><span class="p">(</span><span class="k">this</span><span class="p">),</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="o">=</span><span class="kc">null</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">dataFile</span><span class="o">=</span><span class="dl">"</span><span class="s2">box.dat</span><span class="dl">"</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">logs</span><span class="o">=</span><span class="p">[],</span><span class="k">this</span><span class="p">.</span><span class="nx">isMute</span><span class="o">=!</span><span class="mi">1</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">isNeedRewrite</span><span class="o">=!</span><span class="mi">1</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">logSeparator</span><span class="o">=</span><span class="dl">"</span><span class="se">\n</span><span class="dl">"</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">startTime</span><span class="o">=</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">).</span><span class="nx">getTime</span><span class="p">(),</span><span class="nb">Object</span><span class="p">.</span><span class="nx">assign</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">e</span><span class="p">),</span><span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">""</span><span class="p">,</span><span class="s2">`🔔</span><span class="p">${</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">}</span><span class="s2">, 开始!`</span><span class="p">)}</span><span class="nx">isNode</span><span class="p">(){</span><span class="k">return</span><span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span><span class="o">!=</span><span class="k">typeof</span> <span class="nx">module</span><span class="o">&amp;&amp;!!</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span><span class="p">}</span><span class="nx">isQuanX</span><span class="p">(){</span><span class="k">return</span><span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span><span class="o">!=</span><span class="k">typeof</span> <span class="nx">$task</span><span class="p">}</span><span class="nx">isSurge</span><span class="p">(){</span><span class="k">return</span><span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span><span class="o">!=</span><span class="k">typeof</span> <span class="nx">$httpClient</span><span class="o">&amp;&amp;</span><span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span><span class="o">==</span><span class="k">typeof</span> <span class="nx">$loon</span><span class="p">}</span><span class="nx">isLoon</span><span class="p">(){</span><span class="k">return</span><span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span><span class="o">!=</span><span class="k">typeof</span> <span class="nx">$loon</span><span class="p">}</span><span class="nx">toObj</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="kc">null</span><span class="p">){</span><span class="k">try</span><span class="p">{</span><span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">t</span><span class="p">)}</span><span class="k">catch</span><span class="p">{</span><span class="k">return</span> <span class="nx">e</span><span class="p">}}</span><span class="nx">toStr</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="kc">null</span><span class="p">){</span><span class="k">try</span><span class="p">{</span><span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">t</span><span class="p">)}</span><span class="k">catch</span><span class="p">{</span><span class="k">return</span> <span class="nx">e</span><span class="p">}}</span><span class="nx">getjson</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="kd">let</span> <span class="nx">s</span><span class="o">=</span><span class="nx">e</span><span class="p">;</span><span class="kd">const</span> <span class="nx">i</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">getdata</span><span class="p">(</span><span class="nx">t</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span><span class="k">try</span><span class="p">{</span><span class="nx">s</span><span class="o">=</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getdata</span><span class="p">(</span><span class="nx">t</span><span class="p">))}</span><span class="k">catch</span><span class="p">{}</span><span class="k">return</span> <span class="nx">s</span><span class="p">}</span><span class="nx">setjson</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="k">try</span><span class="p">{</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">setdata</span><span class="p">(</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">t</span><span class="p">),</span><span class="nx">e</span><span class="p">)}</span><span class="k">catch</span><span class="p">{</span><span class="k">return</span><span class="o">!</span><span class="mi">1</span><span class="p">}}</span><span class="nx">getScript</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="nx">e</span><span class="o">=&gt;</span><span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="kd">get</span><span class="p">({</span><span class="na">url</span><span class="p">:</span><span class="nx">t</span><span class="p">},(</span><span class="nx">t</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span><span class="o">=&gt;</span><span class="nx">e</span><span class="p">(</span><span class="nx">i</span><span class="p">))})}</span><span class="nx">runScript</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="nx">s</span><span class="o">=&gt;</span><span class="p">{</span><span class="kd">let</span> <span class="nx">i</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">getdata</span><span class="p">(</span><span class="dl">"</span><span class="s2">@chavy_boxjs_userCfgs.httpapi</span><span class="dl">"</span><span class="p">);</span><span class="nx">i</span><span class="o">=</span><span class="nx">i</span><span class="p">?</span><span class="nx">i</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">\n</span><span class="sr">/g</span><span class="p">,</span><span class="dl">""</span><span class="p">).</span><span class="nx">trim</span><span class="p">():</span><span class="nx">i</span><span class="p">;</span><span class="kd">let</span> <span class="nx">r</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">getdata</span><span class="p">(</span><span class="dl">"</span><span class="s2">@chavy_boxjs_userCfgs.httpapi_timeout</span><span class="dl">"</span><span class="p">);</span><span class="nx">r</span><span class="o">=</span><span class="nx">r</span><span class="p">?</span><span class="mi">1</span><span class="o">*</span><span class="nx">r</span><span class="p">:</span><span class="mi">20</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="nx">e</span><span class="o">&amp;&amp;</span><span class="nx">e</span><span class="p">.</span><span class="nx">timeout</span><span class="p">?</span><span class="nx">e</span><span class="p">.</span><span class="nx">timeout</span><span class="p">:</span><span class="nx">r</span><span class="p">;</span><span class="kd">const</span><span class="p">[</span><span class="nx">o</span><span class="p">,</span><span class="nx">h</span><span class="p">]</span><span class="o">=</span><span class="nx">i</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="dl">"</span><span class="s2">@</span><span class="dl">"</span><span class="p">),</span><span class="nx">n</span><span class="o">=</span><span class="p">{</span><span class="na">url</span><span class="p">:</span><span class="s2">`http://</span><span class="p">${</span><span class="nx">h</span><span class="p">}</span><span class="s2">/v1/scripting/evaluate`</span><span class="p">,</span><span class="na">body</span><span class="p">:{</span><span class="na">script_text</span><span class="p">:</span><span class="nx">t</span><span class="p">,</span><span class="na">mock_type</span><span class="p">:</span><span class="dl">"</span><span class="s2">cron</span><span class="dl">"</span><span class="p">,</span><span class="na">timeout</span><span class="p">:</span><span class="nx">r</span><span class="p">},</span><span class="na">headers</span><span class="p">:{</span><span class="dl">"</span><span class="s2">X-Key</span><span class="dl">"</span><span class="p">:</span><span class="nx">o</span><span class="p">,</span><span class="na">Accept</span><span class="p">:</span><span class="dl">"</span><span class="s2">*/*</span><span class="dl">"</span><span class="p">}};</span><span class="k">this</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="nx">n</span><span class="p">,(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span><span class="o">=&gt;</span><span class="nx">s</span><span class="p">(</span><span class="nx">i</span><span class="p">))}).</span><span class="k">catch</span><span class="p">(</span><span class="nx">t</span><span class="o">=&gt;</span><span class="k">this</span><span class="p">.</span><span class="nx">logErr</span><span class="p">(</span><span class="nx">t</span><span class="p">))}</span><span class="nx">loaddata</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isNode</span><span class="p">())</span><span class="k">return</span><span class="p">{};{</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">?</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">:</span><span class="nx">require</span><span class="p">(</span><span class="dl">"</span><span class="s2">fs</span><span class="dl">"</span><span class="p">),</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="p">?</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="p">:</span><span class="nx">require</span><span class="p">(</span><span class="dl">"</span><span class="s2">path</span><span class="dl">"</span><span class="p">);</span><span class="kd">const</span> <span class="nx">t</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">dataFile</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">process</span><span class="p">.</span><span class="nx">cwd</span><span class="p">(),</span><span class="k">this</span><span class="p">.</span><span class="nx">dataFile</span><span class="p">),</span><span class="nx">s</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">.</span><span class="nx">existsSync</span><span class="p">(</span><span class="nx">t</span><span class="p">),</span><span class="nx">i</span><span class="o">=!</span><span class="nx">s</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">.</span><span class="nx">existsSync</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">s</span><span class="o">&amp;&amp;!</span><span class="nx">i</span><span class="p">)</span><span class="k">return</span><span class="p">{};{</span><span class="kd">const</span> <span class="nx">i</span><span class="o">=</span><span class="nx">s</span><span class="p">?</span><span class="nx">t</span><span class="p">:</span><span class="nx">e</span><span class="p">;</span><span class="k">try</span><span class="p">{</span><span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">.</span><span class="nx">readFileSync</span><span class="p">(</span><span class="nx">i</span><span class="p">))}</span><span class="k">catch</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="k">return</span><span class="p">{}}}}}</span><span class="nx">writedata</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isNode</span><span class="p">()){</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">?</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">:</span><span class="nx">require</span><span class="p">(</span><span class="dl">"</span><span class="s2">fs</span><span class="dl">"</span><span class="p">),</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="p">?</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="p">:</span><span class="nx">require</span><span class="p">(</span><span class="dl">"</span><span class="s2">path</span><span class="dl">"</span><span class="p">);</span><span class="kd">const</span> <span class="nx">t</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">dataFile</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">process</span><span class="p">.</span><span class="nx">cwd</span><span class="p">(),</span><span class="k">this</span><span class="p">.</span><span class="nx">dataFile</span><span class="p">),</span><span class="nx">s</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">.</span><span class="nx">existsSync</span><span class="p">(</span><span class="nx">t</span><span class="p">),</span><span class="nx">i</span><span class="o">=!</span><span class="nx">s</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">.</span><span class="nx">existsSync</span><span class="p">(</span><span class="nx">e</span><span class="p">),</span><span class="nx">r</span><span class="o">=</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span><span class="nx">s</span><span class="p">?</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">.</span><span class="nx">writeFileSync</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">r</span><span class="p">):</span><span class="nx">i</span><span class="p">?</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">.</span><span class="nx">writeFileSync</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">r</span><span class="p">):</span><span class="k">this</span><span class="p">.</span><span class="nx">fs</span><span class="p">.</span><span class="nx">writeFileSync</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">r</span><span class="p">)}}</span><span class="nx">lodash_get</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">s</span><span class="p">){</span><span class="kd">const</span> <span class="nx">i</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">\[(\d</span><span class="sr">+</span><span class="se">)\]</span><span class="sr">/g</span><span class="p">,</span><span class="dl">"</span><span class="s2">.$1</span><span class="dl">"</span><span class="p">).</span><span class="nx">split</span><span class="p">(</span><span class="dl">"</span><span class="s2">.</span><span class="dl">"</span><span class="p">);</span><span class="kd">let</span> <span class="nx">r</span><span class="o">=</span><span class="nx">t</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">const</span> <span class="nx">t</span> <span class="k">of</span> <span class="nx">i</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">r</span><span class="o">=</span><span class="nb">Object</span><span class="p">(</span><span class="nx">r</span><span class="p">)[</span><span class="nx">t</span><span class="p">],</span><span class="k">void</span> <span class="mi">0</span><span class="o">===</span><span class="nx">r</span><span class="p">)</span><span class="k">return</span> <span class="nx">s</span><span class="p">;</span><span class="k">return</span> <span class="nx">r</span><span class="p">}</span><span class="nx">lodash_set</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">s</span><span class="p">){</span><span class="k">return</span> <span class="nb">Object</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="o">!==</span><span class="nx">t</span><span class="p">?</span><span class="nx">t</span><span class="p">:(</span><span class="nb">Array</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="o">||</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">toString</span><span class="p">().</span><span class="nx">match</span><span class="p">(</span><span class="sr">/</span><span class="se">[^</span><span class="sr">.[</span><span class="se">\]]</span><span class="sr">+/g</span><span class="p">)</span><span class="o">||</span><span class="p">[]),</span><span class="nx">e</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="o">-</span><span class="mi">1</span><span class="p">).</span><span class="nx">reduce</span><span class="p">((</span><span class="nx">t</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span><span class="o">=&gt;</span><span class="nb">Object</span><span class="p">(</span><span class="nx">t</span><span class="p">[</span><span class="nx">s</span><span class="p">])</span><span class="o">===</span><span class="nx">t</span><span class="p">[</span><span class="nx">s</span><span class="p">]?</span><span class="nx">t</span><span class="p">[</span><span class="nx">s</span><span class="p">]:</span><span class="nx">t</span><span class="p">[</span><span class="nx">s</span><span class="p">]</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">e</span><span class="p">[</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">])</span><span class="o">&gt;&gt;</span><span class="mi">0</span><span class="o">==+</span><span class="nx">e</span><span class="p">[</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">]?[]:{},</span><span class="nx">t</span><span class="p">)[</span><span class="nx">e</span><span class="p">[</span><span class="nx">e</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">]]</span><span class="o">=</span><span class="nx">s</span><span class="p">,</span><span class="nx">t</span><span class="p">)}</span><span class="nx">getdata</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="kd">let</span> <span class="nx">e</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">getval</span><span class="p">(</span><span class="nx">t</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="sr">/^@/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">t</span><span class="p">)){</span><span class="kd">const</span><span class="p">[,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">]</span><span class="o">=</span><span class="sr">/^@</span><span class="se">(</span><span class="sr">.*</span><span class="se">?)\.(</span><span class="sr">.*</span><span class="se">?)</span><span class="sr">$/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">t</span><span class="p">),</span><span class="nx">r</span><span class="o">=</span><span class="nx">s</span><span class="p">?</span><span class="k">this</span><span class="p">.</span><span class="nx">getval</span><span class="p">(</span><span class="nx">s</span><span class="p">):</span><span class="dl">""</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">r</span><span class="p">)</span><span class="k">try</span><span class="p">{</span><span class="kd">const</span> <span class="nx">t</span><span class="o">=</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">r</span><span class="p">);</span><span class="nx">e</span><span class="o">=</span><span class="nx">t</span><span class="p">?</span><span class="k">this</span><span class="p">.</span><span class="nx">lodash_get</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="dl">""</span><span class="p">):</span><span class="nx">e</span><span class="p">}</span><span class="k">catch</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="nx">e</span><span class="o">=</span><span class="dl">""</span><span class="p">}}</span><span class="k">return</span> <span class="nx">e</span><span class="p">}</span><span class="nx">setdata</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="kd">let</span> <span class="nx">s</span><span class="o">=!</span><span class="mi">1</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="sr">/^@/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">e</span><span class="p">)){</span><span class="kd">const</span><span class="p">[,</span><span class="nx">i</span><span class="p">,</span><span class="nx">r</span><span class="p">]</span><span class="o">=</span><span class="sr">/^@</span><span class="se">(</span><span class="sr">.*</span><span class="se">?)\.(</span><span class="sr">.*</span><span class="se">?)</span><span class="sr">$/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">e</span><span class="p">),</span><span class="nx">o</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">getval</span><span class="p">(</span><span class="nx">i</span><span class="p">),</span><span class="nx">h</span><span class="o">=</span><span class="nx">i</span><span class="p">?</span><span class="dl">"</span><span class="s2">null</span><span class="dl">"</span><span class="o">===</span><span class="nx">o</span><span class="p">?</span><span class="kc">null</span><span class="p">:</span><span class="nx">o</span><span class="o">||</span><span class="dl">"</span><span class="s2">{}</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">{}</span><span class="dl">"</span><span class="p">;</span><span class="k">try</span><span class="p">{</span><span class="kd">const</span> <span class="nx">e</span><span class="o">=</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">h</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">lodash_set</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">r</span><span class="p">,</span><span class="nx">t</span><span class="p">),</span><span class="nx">s</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">setval</span><span class="p">(</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">e</span><span class="p">),</span><span class="nx">i</span><span class="p">)}</span><span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="kd">const</span> <span class="nx">o</span><span class="o">=</span><span class="p">{};</span><span class="k">this</span><span class="p">.</span><span class="nx">lodash_set</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span><span class="nx">r</span><span class="p">,</span><span class="nx">t</span><span class="p">),</span><span class="nx">s</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">setval</span><span class="p">(</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">o</span><span class="p">),</span><span class="nx">i</span><span class="p">)}}</span><span class="k">else</span> <span class="nx">s</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">setval</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">);</span><span class="k">return</span> <span class="nx">s</span><span class="p">}</span><span class="nx">getval</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">()</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">isLoon</span><span class="p">()?</span><span class="nx">$persistentStore</span><span class="p">.</span><span class="nx">read</span><span class="p">(</span><span class="nx">t</span><span class="p">):</span><span class="k">this</span><span class="p">.</span><span class="nx">isQuanX</span><span class="p">()?</span><span class="nx">$prefs</span><span class="p">.</span><span class="nx">valueForKey</span><span class="p">(</span><span class="nx">t</span><span class="p">):</span><span class="k">this</span><span class="p">.</span><span class="nx">isNode</span><span class="p">()?(</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">loaddata</span><span class="p">(),</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">t</span><span class="p">]):</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">t</span><span class="p">]</span><span class="o">||</span><span class="kc">null</span><span class="p">}</span><span class="nx">setval</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">()</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">isLoon</span><span class="p">()?</span><span class="nx">$persistentStore</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">):</span><span class="k">this</span><span class="p">.</span><span class="nx">isQuanX</span><span class="p">()?</span><span class="nx">$prefs</span><span class="p">.</span><span class="nx">setValueForKey</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">):</span><span class="k">this</span><span class="p">.</span><span class="nx">isNode</span><span class="p">()?(</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">loaddata</span><span class="p">(),</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">=</span><span class="nx">t</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">writedata</span><span class="p">(),</span><span class="o">!</span><span class="mi">0</span><span class="p">):</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">||</span><span class="kc">null</span><span class="p">}</span><span class="nx">initGotEnv</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">got</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">got</span><span class="p">?</span><span class="k">this</span><span class="p">.</span><span class="nx">got</span><span class="p">:</span><span class="nx">require</span><span class="p">(</span><span class="dl">"</span><span class="s2">got</span><span class="dl">"</span><span class="p">),</span><span class="k">this</span><span class="p">.</span><span class="nx">cktough</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">cktough</span><span class="p">?</span><span class="k">this</span><span class="p">.</span><span class="nx">cktough</span><span class="p">:</span><span class="nx">require</span><span class="p">(</span><span class="dl">"</span><span class="s2">tough-cookie</span><span class="dl">"</span><span class="p">),</span><span class="k">this</span><span class="p">.</span><span class="nx">ckjar</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">ckjar</span><span class="p">?</span><span class="k">this</span><span class="p">.</span><span class="nx">ckjar</span><span class="p">:</span><span class="k">new</span> <span class="k">this</span><span class="p">.</span><span class="nx">cktough</span><span class="p">.</span><span class="nx">CookieJar</span><span class="p">,</span><span class="nx">t</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">?</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">:{},</span><span class="k">void</span> <span class="mi">0</span><span class="o">===</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">.</span><span class="nx">Cookie</span><span class="o">&amp;&amp;</span><span class="k">void</span> <span class="mi">0</span><span class="o">===</span><span class="nx">t</span><span class="p">.</span><span class="nx">cookieJar</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">cookieJar</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">ckjar</span><span class="p">))}</span><span class="kd">get</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="p">(()</span><span class="o">=&gt;</span><span class="p">{})){</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="k">delete</span> <span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="dl">"</span><span class="s2">Content-Type</span><span class="dl">"</span><span class="p">],</span><span class="k">delete</span> <span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="dl">"</span><span class="s2">Content-Length</span><span class="dl">"</span><span class="p">]),</span><span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">()</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">isLoon</span><span class="p">()?(</span><span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">()</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">isNeedRewrite</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="o">||</span><span class="p">{},</span><span class="nb">Object</span><span class="p">.</span><span class="nx">assign</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">,{</span><span class="dl">"</span><span class="s2">X-Surge-Skip-Scripting</span><span class="dl">"</span><span class="p">:</span><span class="o">!</span><span class="mi">1</span><span class="p">})),</span><span class="nx">$httpClient</span><span class="p">.</span><span class="kd">get</span><span class="p">(</span><span class="nx">t</span><span class="p">,(</span><span class="nx">t</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span><span class="o">=&gt;</span><span class="p">{</span><span class="o">!</span><span class="nx">t</span><span class="o">&amp;&amp;</span><span class="nx">s</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">body</span><span class="o">=</span><span class="nx">i</span><span class="p">,</span><span class="nx">s</span><span class="p">.</span><span class="nx">statusCode</span><span class="o">=</span><span class="nx">s</span><span class="p">.</span><span class="nx">status</span><span class="p">),</span><span class="nx">e</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">)})):</span><span class="k">this</span><span class="p">.</span><span class="nx">isQuanX</span><span class="p">()?(</span><span class="k">this</span><span class="p">.</span><span class="nx">isNeedRewrite</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">opts</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">opts</span><span class="o">||</span><span class="p">{},</span><span class="nb">Object</span><span class="p">.</span><span class="nx">assign</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">opts</span><span class="p">,{</span><span class="na">hints</span><span class="p">:</span><span class="o">!</span><span class="mi">1</span><span class="p">})),</span><span class="nx">$task</span><span class="p">.</span><span class="nx">fetch</span><span class="p">(</span><span class="nx">t</span><span class="p">).</span><span class="nx">then</span><span class="p">(</span><span class="nx">t</span><span class="o">=&gt;</span><span class="p">{</span><span class="kd">const</span><span class="p">{</span><span class="na">statusCode</span><span class="p">:</span><span class="nx">s</span><span class="p">,</span><span class="na">statusCode</span><span class="p">:</span><span class="nx">i</span><span class="p">,</span><span class="na">headers</span><span class="p">:</span><span class="nx">r</span><span class="p">,</span><span class="na">body</span><span class="p">:</span><span class="nx">o</span><span class="p">}</span><span class="o">=</span><span class="nx">t</span><span class="p">;</span><span class="nx">e</span><span class="p">(</span><span class="kc">null</span><span class="p">,{</span><span class="na">status</span><span class="p">:</span><span class="nx">s</span><span class="p">,</span><span class="na">statusCode</span><span class="p">:</span><span class="nx">i</span><span class="p">,</span><span class="na">headers</span><span class="p">:</span><span class="nx">r</span><span class="p">,</span><span class="na">body</span><span class="p">:</span><span class="nx">o</span><span class="p">},</span><span class="nx">o</span><span class="p">)},</span><span class="nx">t</span><span class="o">=&gt;</span><span class="nx">e</span><span class="p">(</span><span class="nx">t</span><span class="p">))):</span><span class="k">this</span><span class="p">.</span><span class="nx">isNode</span><span class="p">()</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">initGotEnv</span><span class="p">(</span><span class="nx">t</span><span class="p">),</span><span class="k">this</span><span class="p">.</span><span class="nx">got</span><span class="p">(</span><span class="nx">t</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">redirect</span><span class="dl">"</span><span class="p">,(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">)</span><span class="o">=&gt;</span><span class="p">{</span><span class="k">try</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="dl">"</span><span class="s2">set-cookie</span><span class="dl">"</span><span class="p">]){</span><span class="kd">const</span> <span class="nx">s</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="dl">"</span><span class="s2">set-cookie</span><span class="dl">"</span><span class="p">].</span><span class="nx">map</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">cktough</span><span class="p">.</span><span class="nx">Cookie</span><span class="p">.</span><span class="nx">parse</span><span class="p">).</span><span class="nx">toString</span><span class="p">();</span><span class="nx">s</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">ckjar</span><span class="p">.</span><span class="nx">setCookieSync</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span><span class="kc">null</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">cookieJar</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">ckjar</span><span class="p">}}</span><span class="k">catch</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">logErr</span><span class="p">(</span><span class="nx">t</span><span class="p">)}}).</span><span class="nx">then</span><span class="p">(</span><span class="nx">t</span><span class="o">=&gt;</span><span class="p">{</span><span class="kd">const</span><span class="p">{</span><span class="na">statusCode</span><span class="p">:</span><span class="nx">s</span><span class="p">,</span><span class="na">statusCode</span><span class="p">:</span><span class="nx">i</span><span class="p">,</span><span class="na">headers</span><span class="p">:</span><span class="nx">r</span><span class="p">,</span><span class="na">body</span><span class="p">:</span><span class="nx">o</span><span class="p">}</span><span class="o">=</span><span class="nx">t</span><span class="p">;</span><span class="nx">e</span><span class="p">(</span><span class="kc">null</span><span class="p">,{</span><span class="na">status</span><span class="p">:</span><span class="nx">s</span><span class="p">,</span><span class="na">statusCode</span><span class="p">:</span><span class="nx">i</span><span class="p">,</span><span class="na">headers</span><span class="p">:</span><span class="nx">r</span><span class="p">,</span><span class="na">body</span><span class="p">:</span><span class="nx">o</span><span class="p">},</span><span class="nx">o</span><span class="p">)},</span><span class="nx">t</span><span class="o">=&gt;</span><span class="p">{</span><span class="kd">const</span><span class="p">{</span><span class="na">message</span><span class="p">:</span><span class="nx">s</span><span class="p">,</span><span class="na">response</span><span class="p">:</span><span class="nx">i</span><span class="p">}</span><span class="o">=</span><span class="nx">t</span><span class="p">;</span><span class="nx">e</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">i</span><span class="o">&amp;&amp;</span><span class="nx">i</span><span class="p">.</span><span class="nx">body</span><span class="p">)}))}</span><span class="nx">post</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="p">(()</span><span class="o">=&gt;</span><span class="p">{})){</span><span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">body</span><span class="o">&amp;&amp;</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="o">&amp;&amp;!</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="dl">"</span><span class="s2">Content-Type</span><span class="dl">"</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="dl">"</span><span class="s2">Content-Type</span><span class="dl">"</span><span class="p">]</span><span class="o">=</span><span class="dl">"</span><span class="s2">application/x-www-form-urlencoded</span><span class="dl">"</span><span class="p">),</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="o">&amp;&amp;</span><span class="k">delete</span> <span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="dl">"</span><span class="s2">Content-Length</span><span class="dl">"</span><span class="p">],</span><span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">()</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">isLoon</span><span class="p">())</span><span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">()</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">isNeedRewrite</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="o">||</span><span class="p">{},</span><span class="nb">Object</span><span class="p">.</span><span class="nx">assign</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">headers</span><span class="p">,{</span><span class="dl">"</span><span class="s2">X-Surge-Skip-Scripting</span><span class="dl">"</span><span class="p">:</span><span class="o">!</span><span class="mi">1</span><span class="p">})),</span><span class="nx">$httpClient</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="nx">t</span><span class="p">,(</span><span class="nx">t</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span><span class="o">=&gt;</span><span class="p">{</span><span class="o">!</span><span class="nx">t</span><span class="o">&amp;&amp;</span><span class="nx">s</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">body</span><span class="o">=</span><span class="nx">i</span><span class="p">,</span><span class="nx">s</span><span class="p">.</span><span class="nx">statusCode</span><span class="o">=</span><span class="nx">s</span><span class="p">.</span><span class="nx">status</span><span class="p">),</span><span class="nx">e</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">)});</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isQuanX</span><span class="p">())</span><span class="nx">t</span><span class="p">.</span><span class="nx">method</span><span class="o">=</span><span class="dl">"</span><span class="s2">POST</span><span class="dl">"</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">isNeedRewrite</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">opts</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">opts</span><span class="o">||</span><span class="p">{},</span><span class="nb">Object</span><span class="p">.</span><span class="nx">assign</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">opts</span><span class="p">,{</span><span class="na">hints</span><span class="p">:</span><span class="o">!</span><span class="mi">1</span><span class="p">})),</span><span class="nx">$task</span><span class="p">.</span><span class="nx">fetch</span><span class="p">(</span><span class="nx">t</span><span class="p">).</span><span class="nx">then</span><span class="p">(</span><span class="nx">t</span><span class="o">=&gt;</span><span class="p">{</span><span class="kd">const</span><span class="p">{</span><span class="na">statusCode</span><span class="p">:</span><span class="nx">s</span><span class="p">,</span><span class="na">statusCode</span><span class="p">:</span><span class="nx">i</span><span class="p">,</span><span class="na">headers</span><span class="p">:</span><span class="nx">r</span><span class="p">,</span><span class="na">body</span><span class="p">:</span><span class="nx">o</span><span class="p">}</span><span class="o">=</span><span class="nx">t</span><span class="p">;</span><span class="nx">e</span><span class="p">(</span><span class="kc">null</span><span class="p">,{</span><span class="na">status</span><span class="p">:</span><span class="nx">s</span><span class="p">,</span><span class="na">statusCode</span><span class="p">:</span><span class="nx">i</span><span class="p">,</span><span class="na">headers</span><span class="p">:</span><span class="nx">r</span><span class="p">,</span><span class="na">body</span><span class="p">:</span><span class="nx">o</span><span class="p">},</span><span class="nx">o</span><span class="p">)},</span><span class="nx">t</span><span class="o">=&gt;</span><span class="nx">e</span><span class="p">(</span><span class="nx">t</span><span class="p">));</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isNode</span><span class="p">()){</span><span class="k">this</span><span class="p">.</span><span class="nx">initGotEnv</span><span class="p">(</span><span class="nx">t</span><span class="p">);</span><span class="kd">const</span><span class="p">{</span><span class="na">url</span><span class="p">:</span><span class="nx">s</span><span class="p">,...</span><span class="nx">i</span><span class="p">}</span><span class="o">=</span><span class="nx">t</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">got</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">).</span><span class="nx">then</span><span class="p">(</span><span class="nx">t</span><span class="o">=&gt;</span><span class="p">{</span><span class="kd">const</span><span class="p">{</span><span class="na">statusCode</span><span class="p">:</span><span class="nx">s</span><span class="p">,</span><span class="na">statusCode</span><span class="p">:</span><span class="nx">i</span><span class="p">,</span><span class="na">headers</span><span class="p">:</span><span class="nx">r</span><span class="p">,</span><span class="na">body</span><span class="p">:</span><span class="nx">o</span><span class="p">}</span><span class="o">=</span><span class="nx">t</span><span class="p">;</span><span class="nx">e</span><span class="p">(</span><span class="kc">null</span><span class="p">,{</span><span class="na">status</span><span class="p">:</span><span class="nx">s</span><span class="p">,</span><span class="na">statusCode</span><span class="p">:</span><span class="nx">i</span><span class="p">,</span><span class="na">headers</span><span class="p">:</span><span class="nx">r</span><span class="p">,</span><span class="na">body</span><span class="p">:</span><span class="nx">o</span><span class="p">},</span><span class="nx">o</span><span class="p">)},</span><span class="nx">t</span><span class="o">=&gt;</span><span class="p">{</span><span class="kd">const</span><span class="p">{</span><span class="na">message</span><span class="p">:</span><span class="nx">s</span><span class="p">,</span><span class="na">response</span><span class="p">:</span><span class="nx">i</span><span class="p">}</span><span class="o">=</span><span class="nx">t</span><span class="p">;</span><span class="nx">e</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">i</span><span class="o">&amp;&amp;</span><span class="nx">i</span><span class="p">.</span><span class="nx">body</span><span class="p">)})}}</span><span class="nx">time</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="kc">null</span><span class="p">){</span><span class="kd">const</span> <span class="nx">s</span><span class="o">=</span><span class="nx">e</span><span class="p">?</span><span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">e</span><span class="p">):</span><span class="k">new</span> <span class="nb">Date</span><span class="p">;</span><span class="kd">let</span> <span class="nx">i</span><span class="o">=</span><span class="p">{</span><span class="dl">"</span><span class="s2">M+</span><span class="dl">"</span><span class="p">:</span><span class="nx">s</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">()</span><span class="o">+</span><span class="mi">1</span><span class="p">,</span><span class="dl">"</span><span class="s2">d+</span><span class="dl">"</span><span class="p">:</span><span class="nx">s</span><span class="p">.</span><span class="nx">getDate</span><span class="p">(),</span><span class="dl">"</span><span class="s2">H+</span><span class="dl">"</span><span class="p">:</span><span class="nx">s</span><span class="p">.</span><span class="nx">getHours</span><span class="p">(),</span><span class="dl">"</span><span class="s2">m+</span><span class="dl">"</span><span class="p">:</span><span class="nx">s</span><span class="p">.</span><span class="nx">getMinutes</span><span class="p">(),</span><span class="dl">"</span><span class="s2">s+</span><span class="dl">"</span><span class="p">:</span><span class="nx">s</span><span class="p">.</span><span class="nx">getSeconds</span><span class="p">(),</span><span class="dl">"</span><span class="s2">q+</span><span class="dl">"</span><span class="p">:</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">((</span><span class="nx">s</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">()</span><span class="o">+</span><span class="mi">3</span><span class="p">)</span><span class="o">/</span><span class="mi">3</span><span class="p">),</span><span class="na">S</span><span class="p">:</span><span class="nx">s</span><span class="p">.</span><span class="nx">getMilliseconds</span><span class="p">()};</span><span class="sr">/</span><span class="se">(</span><span class="sr">y+</span><span class="se">)</span><span class="sr">/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">,(</span><span class="nx">s</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">()</span><span class="o">+</span><span class="dl">""</span><span class="p">).</span><span class="nx">substr</span><span class="p">(</span><span class="mi">4</span><span class="o">-</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">.</span><span class="nx">length</span><span class="p">)));</span><span class="k">for</span><span class="p">(</span><span class="kd">let</span> <span class="nx">e</span> <span class="k">in</span> <span class="nx">i</span><span class="p">)</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="dl">"</span><span class="s2">(</span><span class="dl">"</span><span class="o">+</span><span class="nx">e</span><span class="o">+</span><span class="dl">"</span><span class="s2">)</span><span class="dl">"</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">,</span><span class="mi">1</span><span class="o">==</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">.</span><span class="nx">length</span><span class="p">?</span><span class="nx">i</span><span class="p">[</span><span class="nx">e</span><span class="p">]:(</span><span class="dl">"</span><span class="s2">00</span><span class="dl">"</span><span class="o">+</span><span class="nx">i</span><span class="p">[</span><span class="nx">e</span><span class="p">]).</span><span class="nx">substr</span><span class="p">((</span><span class="dl">""</span><span class="o">+</span><span class="nx">i</span><span class="p">[</span><span class="nx">e</span><span class="p">]).</span><span class="nx">length</span><span class="p">)));</span><span class="k">return</span> <span class="nx">t</span><span class="p">}</span><span class="nx">msg</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="nx">t</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="dl">""</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="dl">""</span><span class="p">,</span><span class="nx">r</span><span class="p">){</span><span class="kd">const</span> <span class="nx">o</span><span class="o">=</span><span class="nx">t</span><span class="o">=&gt;</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">t</span><span class="p">)</span><span class="k">return</span> <span class="nx">t</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="o">==</span><span class="k">typeof</span> <span class="nx">t</span><span class="p">)</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">isLoon</span><span class="p">()?</span><span class="nx">t</span><span class="p">:</span><span class="k">this</span><span class="p">.</span><span class="nx">isQuanX</span><span class="p">()?{</span><span class="dl">"</span><span class="s2">open-url</span><span class="dl">"</span><span class="p">:</span><span class="nx">t</span><span class="p">}:</span><span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">()?{</span><span class="na">url</span><span class="p">:</span><span class="nx">t</span><span class="p">}:</span><span class="k">void</span> <span class="mi">0</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="dl">"</span><span class="s2">object</span><span class="dl">"</span><span class="o">==</span><span class="k">typeof</span> <span class="nx">t</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isLoon</span><span class="p">()){</span><span class="kd">let</span> <span class="nx">e</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">openUrl</span><span class="o">||</span><span class="nx">t</span><span class="p">.</span><span class="nx">url</span><span class="o">||</span><span class="nx">t</span><span class="p">[</span><span class="dl">"</span><span class="s2">open-url</span><span class="dl">"</span><span class="p">],</span><span class="nx">s</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">mediaUrl</span><span class="o">||</span><span class="nx">t</span><span class="p">[</span><span class="dl">"</span><span class="s2">media-url</span><span class="dl">"</span><span class="p">];</span><span class="k">return</span><span class="p">{</span><span class="na">openUrl</span><span class="p">:</span><span class="nx">e</span><span class="p">,</span><span class="na">mediaUrl</span><span class="p">:</span><span class="nx">s</span><span class="p">}}</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isQuanX</span><span class="p">()){</span><span class="kd">let</span> <span class="nx">e</span><span class="o">=</span><span class="nx">t</span><span class="p">[</span><span class="dl">"</span><span class="s2">open-url</span><span class="dl">"</span><span class="p">]</span><span class="o">||</span><span class="nx">t</span><span class="p">.</span><span class="nx">url</span><span class="o">||</span><span class="nx">t</span><span class="p">.</span><span class="nx">openUrl</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="nx">t</span><span class="p">[</span><span class="dl">"</span><span class="s2">media-url</span><span class="dl">"</span><span class="p">]</span><span class="o">||</span><span class="nx">t</span><span class="p">.</span><span class="nx">mediaUrl</span><span class="p">;</span><span class="k">return</span><span class="p">{</span><span class="dl">"</span><span class="s2">open-url</span><span class="dl">"</span><span class="p">:</span><span class="nx">e</span><span class="p">,</span><span class="dl">"</span><span class="s2">media-url</span><span class="dl">"</span><span class="p">:</span><span class="nx">s</span><span class="p">}}</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">()){</span><span class="kd">let</span> <span class="nx">e</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">url</span><span class="o">||</span><span class="nx">t</span><span class="p">.</span><span class="nx">openUrl</span><span class="o">||</span><span class="nx">t</span><span class="p">[</span><span class="dl">"</span><span class="s2">open-url</span><span class="dl">"</span><span class="p">];</span><span class="k">return</span><span class="p">{</span><span class="na">url</span><span class="p">:</span><span class="nx">e</span><span class="p">}}}};</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isMute</span><span class="o">||</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">()</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">isLoon</span><span class="p">()?</span><span class="nx">$notification</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">o</span><span class="p">(</span><span class="nx">r</span><span class="p">)):</span><span class="k">this</span><span class="p">.</span><span class="nx">isQuanX</span><span class="p">()</span><span class="o">&amp;&amp;</span><span class="nx">$notify</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">o</span><span class="p">(</span><span class="nx">r</span><span class="p">))),</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isMuteLog</span><span class="p">){</span><span class="kd">let</span> <span class="nx">t</span><span class="o">=</span><span class="p">[</span><span class="dl">""</span><span class="p">,</span><span class="dl">"</span><span class="s2">==============📣系统通知📣==============</span><span class="dl">"</span><span class="p">];</span><span class="nx">t</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">e</span><span class="p">),</span><span class="nx">s</span><span class="o">&amp;&amp;</span><span class="nx">t</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">s</span><span class="p">),</span><span class="nx">i</span><span class="o">&amp;&amp;</span><span class="nx">t</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">i</span><span class="p">),</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="dl">"</span><span class="se">\n</span><span class="dl">"</span><span class="p">)),</span><span class="k">this</span><span class="p">.</span><span class="nx">logs</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">logs</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">t</span><span class="p">)}}</span><span class="nx">log</span><span class="p">(...</span><span class="nx">t</span><span class="p">){</span><span class="nx">t</span><span class="p">.</span><span class="nx">length</span><span class="o">&gt;</span><span class="mi">0</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">logs</span><span class="o">=</span><span class="p">[...</span><span class="k">this</span><span class="p">.</span><span class="nx">logs</span><span class="p">,...</span><span class="nx">t</span><span class="p">]),</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">logSeparator</span><span class="p">))}</span><span class="nx">logErr</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="kd">const</span> <span class="nx">s</span><span class="o">=!</span><span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">()</span><span class="o">&amp;&amp;!</span><span class="k">this</span><span class="p">.</span><span class="nx">isQuanX</span><span class="p">()</span><span class="o">&amp;&amp;!</span><span class="k">this</span><span class="p">.</span><span class="nx">isLoon</span><span class="p">();</span><span class="nx">s</span><span class="p">?</span><span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">""</span><span class="p">,</span><span class="s2">`❗️</span><span class="p">${</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">}</span><span class="s2">, 错误!`</span><span class="p">,</span><span class="nx">t</span><span class="p">.</span><span class="nx">stack</span><span class="p">):</span><span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">""</span><span class="p">,</span><span class="s2">`❗️</span><span class="p">${</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">}</span><span class="s2">, 错误!`</span><span class="p">,</span><span class="nx">t</span><span class="p">)}</span><span class="nx">wait</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="nx">e</span><span class="o">=&gt;</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">))}</span><span class="nx">done</span><span class="p">(</span><span class="nx">t</span><span class="o">=</span><span class="p">{}){</span><span class="kd">const</span> <span class="nx">e</span><span class="o">=</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">).</span><span class="nx">getTime</span><span class="p">(),</span><span class="nx">s</span><span class="o">=</span><span class="p">(</span><span class="nx">e</span><span class="o">-</span><span class="k">this</span><span class="p">.</span><span class="nx">startTime</span><span class="p">)</span><span class="o">/</span><span class="mi">1</span><span class="nx">e3</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">""</span><span class="p">,</span><span class="s2">`🔔</span><span class="p">${</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">}</span><span class="s2">, 结束! 🕛 </span><span class="p">${</span><span class="nx">s</span><span class="p">}</span><span class="s2"> 秒`</span><span class="p">),</span><span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(),(</span><span class="k">this</span><span class="p">.</span><span class="nx">isSurge</span><span class="p">()</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">isQuanX</span><span class="p">()</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">isLoon</span><span class="p">())</span><span class="o">&amp;&amp;</span><span class="nx">$done</span><span class="p">(</span><span class="nx">t</span><span class="p">)}}(</span><span class="nx">t</span><span class="p">,</span><span class="nx">e</span><span class="p">)}</span>&#x000A;</div></pre></div></div>
</div>
<script>
  toMathMlCode('','markdown-body');
</script>

</div>
</div>
<div class='tree_progress'></div>
<div class='ui small modal' id='modal-linejump'>
<div class='ui custom form content'>
<div class='field'>
<div class='ui right action input'>
<input placeholder='跳转至某一行...' type='number'>
<div class='ui orange button'>
跳转
</div>
</div>
</div>
</div>
</div>

<div class='complaint'>
<div class='ui modal small form' id='landing-comments-complaint-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>
举报
</div>
<div class='content'>
<div class='appeal-success-tip hide'>
<i class='iconfont icon-ic_msg_success'></i>
<div class='appeal-success-text'>
举报成功
</div>
<span>
我们将于2个工作日内通过站内信反馈结果给你！
</span>
</div>
<div class='appeal-tip'>
请认真填写举报原因，尽可能描述详细。
</div>
<div class='ui form appeal-form'>
<div class='inline field'>
<label class='left-part appeal-type-wrap'>
举报类型
</label>
<div class='ui dropdown selection' id='appeal-comments-types'>
<div class='text default'>
请选择举报类型
</div>
<i class='dropdown icon'></i>
<div class='menu'></div>
</div>
</div>
<div class='inline field'>
<label class='left-part'>
举报原因
</label>
<textarea class='appeal-reason' id='appeal-comment-reason' name='msg' placeholder='请说明举报原因' rows='3'></textarea>
</div>
<div class='ui message callback-msg hide'></div>
<div class='ui small error text message exceeded-size-tip'></div>
</div>
</div>
<div class='actions'>
<div class='ui button blank cancel'>
取消
</div>
<div class='ui orange icon button disabled ok' id='complaint-comment-confirm'>
发送
</div>
</div>
</div>
<script>
  var $complaintCommentsModal = $('#landing-comments-complaint-modal'),
      $complainCommentType = $complaintCommentsModal.find('#appeal-comments-types'),
      $complaintModalTip = $complaintCommentsModal.find('.callback-msg'),
      $complaintCommentsContent = $complaintCommentsModal.find('.appeal-reason'),
      $complaintCommentBtn = $complaintCommentsModal.find('#complaint-comment-confirm'),
      complaintSending = false,
      initedCommentsType = false;
  
  function initCommentsTypeList() {
    if (!initedCommentsType) {
      $.ajax({
        url: "/appeals/fetch_types",
        method: 'get',
        data: {'type': 'comment'},
        success: function (data) {
          var result = '';
          for (var i = 0; i < data.length; i++) {
            result = result + "<div class='item' data-value='" + data[i].id + "'>" + data[i].name + "</div>";
          }
          $complainCommentType.find('.menu').html(result);
        }
      });
      $complainCommentType.dropdown({showOnFocus: false});
      initedCommentsType = true;
    }
  }
  $complainCommentType.on('click', function() {
    $complaintCommentsModal.modal({
      autofocus: false,
      onApprove: function() {
        return false;
      },
      onHidden: function() {
        restoreCommonentDefault();
      }
    }).modal('show');
  });
  
  $complaintCommentsContent.on('change keyup', function(e) {
    var content = $(this).val();
    if ($.trim(content).length > 0 && $complainCommentType.dropdown('get value').length > 0 ) {
      $complaintCommentBtn.removeClass('disabled');
      return;
    }
    $complaintCommentBtn.addClass('disabled');
  });
  
  
  $complainCommentType.dropdown({
    showOnFocus: false,
    onChange: function(value, text, $selectedItem) {
      if (value.length > 0 && $.trim($complaintCommentsContent.val()).length > 0) {
        $complaintCommentBtn.removeClass('disabled');
        return
      }
      $complaintCommentBtn.addClass('disabled');
    }
  });
  
  function restoreCommonentDefault() {
    $complainCommentType.dropdown('restore defaults');
    $complaintCommentsContent.val('');
    $('.exceeded-size-tip').text('').hide();
    $complaintModalTip.text('').hide();
    setTimeout(function() {
      setCommentSendTip(false);
    }, 1500);
  }
  
  $complaintCommentBtn.on('click',function(e){
    var reason = $complaintCommentsContent.val();
    var appealableId = $('#landing-comments-complaint-modal').attr('data-id');
    if (complaintSending) {
      return;
    }
    var appealType = $complainCommentType.dropdown('get value');
    var formData = new FormData();
    formData.append('appeal_type_id', appealType);
    formData.append('reason', reason);
    formData.append('appeal_type','Note');
    formData.append('target_id',appealableId);
    $.ajax({
      type: 'POST',
      url: "/appeals",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      beforeSend: function() {
        setCommentSendStatus(true);
      },
      success: function(res) {
        if (res.status == 200) {
          setCommentSendTip(true);
          setTimeout(function() {
            $complaintCommentsModal.modal('hide');
            restoreCommonentDefault();
          }, 3000);
        }
        setCommentSendStatus(false);
      },
      error: function(err) {
        showCommonTips(err.responseJSON.message, 'error');
        setCommentSendStatus(false);
      }
    })
  });
  
  function showCommonTips(text, type) {
    $complaintModalTip.text(text).show();
    if (type == 'error') {
      $complaintModalTip.removeClass('success').addClass('error');
    } else {
      $complaintModalTip.removeClass('error').addClass('success');
    }
  }
  
  function setCommentSendStatus(value) {
    complaintSending = value;
    if (complaintSending) {
      $complaintCommentBtn.addClass('loading');
      $complaintCommentsContent.attr('readonly', true);
      $complainCommentType.attr('readonly', true);
    } else {
      $complaintCommentBtn.removeClass('loading');
      $complaintCommentsContent.attr('readonly', false);
      $complainCommentType.attr('readonly', false);
    }
  }
  
  function setCommentSendTip(value) {
    if (value) {
      $('.appeal-success-tip').removeClass('hide');
      $('.appeal-tip').addClass('hide');
      $('.appeal-form').addClass('hide');
      $('#landing-comments-complaint-modal .actions').addClass('hide');
    } else {
      $('.appeal-success-tip').addClass('hide');
      $('.appeal-tip').removeClass('hide');
      $('.appeal-form').removeClass('hide');
      $('#landing-comments-complaint-modal .actions').removeClass('hide');
    }
  }
</script>

</div>
<script>
  "use strict";
  $('.js-check-star').checkbox('set unchecked')
</script>

</div>
</div>
</div>
<div class='four wide column' style='display: none;'>
<div class='project__right-side'>
<div class='side-item intro'>
<div class='header'>
<h4>简介</h4>
</div>
<div class='content intro-info'>
<span class='git-project-desc-text text-muted'>暂无描述</span>
<a class='hide spread' href='javascript:void(0);'>
展开
<i class='caret down icon'></i>
</a>
<a class='retract hide' href='javascript:void(0);'>
收起
<i class='caret up icon'></i>
</a>
<div class='intro-list'>
<div class='hide item'>
<i class='iconfont icon-link'></i>
<span class='git-project-homepage'>
<a href="" id="homepage" rel="nofollow" target="_blank"></a>
</span>
</div>
<div class='item'>
<i class='iconfont icon-tag-program'></i>
<span class='summary-languages'>
JavaScript
<span class='text-muted'>
等 3 种语言
<i class='icon dropdown'></i>
</span>
</span>
<div class='ui popup summary-languages-popup'>
<div class='row'>
<div class='lang'>
<a href="/explore/all?lang=JavaScript">JavaScript</a>
</div>
<div class='lang-bar'>
<div class='bar' style='width: 95.9%;'></div>
</div>
<a class="percentage" href="/explore/all?lang=JavaScript">95.9%</a>
</div>
<div class='row'>
<div class='lang'>
<a href="/explore/all?lang=Python">Python</a>
</div>
<div class='lang-bar'>
<div class='bar' style='width: 3.5%;'></div>
</div>
<a class="percentage" href="/explore/all?lang=Python">3.5%</a>
</div>
<div class='row'>
<div class='lang'>
<a href="/explore/all?lang=Shell">Shell</a>
</div>
<div class='lang-bar'>
<div class='bar' style='width: 0.6%;'></div>
</div>
<a class="percentage" href="/explore/all?lang=Shell">0.6%</a>
</div>
</div>
</div>

</div>
</div>
<div class='content intro-form'>
<div class='ui small input'>
<textarea name='project[description]' placeholder='描述' rows='5'></textarea>
</div>
<div class='ui small input'>
<input data-regex-value='(^$)|(^(http|https):\/\/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).*)|(^(http|https):\/\/[a-zA-Z0-9]+([_\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,10}(:[0-9]{1,10})?(\?.*)?(\/.*)?$)' name='project[homepage]' placeholder='主页(eg: https://gitee.com)' type='text' value=''>
</div>
<button class='ui orange button mt-1 btn-save'>
保存更改
</button>
<div class='ui blank button btn-cancel-edit'>
取消
</div>
</div>
</div>
<div class='side-item release'>
<div class='header'>
<h4>发行版</h4>
</div>
<div class='content'>
<span class='text-muted'>
暂无发行版
</span>
</div>
</div>
<div class='side-item contrib' data-url='/shuye72/MyActions/contributors_count?ref=main' id='contributor'>
<div class='header'>
<h4>
贡献者
<span class='text-muted' id='contributor-count'></span>
</h4>
<a class="ui link button pull-right" href="/shuye72/MyActions/contributors?ref=main">全部</a>
</div>
<div class='content' id='contributor-list'></div>
<div class='ui active centered inline loader' id='contributor-loader'></div>
</div>
<div class='side-item events' data-url='/shuye72/MyActions/events.json' id='proj-events'>
<div class='header'>
<h4>近期动态</h4>
</div>
<div class='content'>
<div class='ui comments' id='event-list'></div>
<a class="loadmore hide" href="javascript:void(0);">加载更多
<i class='icon dropdown'></i>
</a><center>
<div class='text-muted nomore hide'>不能加载更多了</div>
<div class='ui inline loader active'></div>
</center>
</div>
</div>
</div>
<script>
  window.gon.projectRightSide = {
    homepage: "",
    description: "",
    url: "/shuye72/MyActions/update_description"
  }
  
  $('#license-popup').popup({ position: 'bottom center', lastResort: 'bottom center' })
</script>

</div>
</div>
</div>
<script>
  (function() {
    $(function() {
      Tree.init();
      return TreeCommentActions.init();
    });
  
  }).call(this);
</script>

</div>
<script>
  (function() {
    var donateModal;
  
    Gitee.modalHelper = new GiteeModalHelper({
      alertText: '提示',
      okText: '确定'
    });
  
    donateModal = new ProjectDonateModal({
      el: '#project-donate-modal',
      alipayUrl: '/shuye72/MyActions/alipay',
      wepayUrl: '/shuye72/MyActions/wepay',
      nameIsBlank: '名称不能为空',
      nameTooLong: '名称过长（最多为 36 个字符）',
      modalHelper: Gitee.modalHelper
    });
  
    if (null === 'true') {
      donateModal.show();
    }
  
    $('#project-donate').on('click', function() {
      return donateModal.show();
    });
  
  }).call(this);
</script>
<script>
  Tree.initHighlightTheme('white')
</script>


</div>
<div class='gitee-project-extension'>
<div class='extension public'>1</div>
<div class='extension https'>https://gitee.com/shuye72/MyActions.git</div>
<div class='extension ssh'>git@gitee.com:shuye72/MyActions.git</div>
<div class='extension namespace'>shuye72</div>
<div class='extension repo'>MyActions</div>
<div class='extension name'>MyActions</div>
<div class='extension branch'>main</div>
</div>

<script>
  $(function() {
    GitLab.GfmAutoComplete.dataSource = "/shuye72/MyActions/autocomplete_sources"
    GitLab.GfmAutoComplete.Emoji.assetBase = '/assets/emoji'
    GitLab.GfmAutoComplete.setup();
  });
</script>

<footer id='git-footer-main'>
<div class='ui container'>
<div class='logo-row'>
<img class='logo-img' src='/static/images/logo-black.svg?t=158106666'>
</div>
<div class='name-important'>
深圳市奥思网络科技有限公司版权所有
</div>
<div class='ui two column grid d-flex-center'>
<div class='nine wide column git-footer-left'>
<div class='ui four column grid' id='footer-left'>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/about_us">关于我们</a>
</div>
<div class='item'>
<a class="item" href="https://www.oschina.net/news/131099/oschina-hiring">加入我们</a>
</div>
<div class='item'>
<a class="item" href="/terms">使用条款</a>
</div>
<div class='item'>
<a class="item" href="/oschina/git-osc/issues">意见建议</a>
</div>
<div class='item'>
<a class="item" href="/links.html">合作伙伴</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/all-about-git">Git 大全</a>
</div>
<div class='item'>
<a class="item" href="https://oschina.gitee.io/learn-git-branching/">Git 命令学习</a>
</div>
<div class='item'>
<a class="item" href="https://copycat.gitee.com/">CopyCat 代码克隆检测</a>
</div>
<div class='item'>
<a class="item" href="/appclient">APP与插件下载</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/gitee-stars">Gitee 封面人物</a>
</div>
<div class='item'>
<a class="item" href="/gvp">GVP 项目</a>
</div>
<div class='item'>
<a class="item" href="https://blog.gitee.com/">Gitee 博客</a>
</div>
<div class='item'>
<a class="item" href="/enterprises#nonprofit-plan">Gitee 公益计划</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/api/v5/swagger">OpenAPI</a>
</div>
<div class='item'>
<a class="item" href="/help">帮助文档</a>
</div>
<div class='item'>
<a class="item" href="/self_services">在线自助服务</a>
</div>
<div class='item'>
<a class="item" href="/git-osc">更新日志</a>
</div>
</div>
</div>
</div>
</div>
<div class='seven wide column right aligned followus git-footer-right'>
<div class='qrcode weixin'>
<img alt="Qrcode weixin" src="https://assets.gitee.com/assets/qrcode-weixin-9e7cfb27165143d2b8e8b268a52ea822.jpg" />
<p class='weixin-text'>微信服务号</p>
</div>
<div class='phone-and-qq column'>
<div class='ui list official-support-container'>
<div class='item'>
<a class="icon-popup" href="//shang.qq.com/wpa/qunwpa?idkey=df785aa7af71f7d74149ab062742d761b845464350ecba25eb440357a3e573b7" title="点击加入 Gitee 官方群"><i class='iconfont icon-logo-qq'></i>
<span>官方技术交流QQ群：1050025484</span>
</a></div>
<div class='item mail-and-zhihu'>
<a href="mailto: git@oschina.cn"><i class='iconfont icon-msg-mail'></i>
<span id='git-footer-email'>git#oschina.cn</span>
</a></div>
<div class='item mail-and-zhihu'>
<a href="https://www.zhihu.com/org/ma-yun-osc/" target="_blank"><i class='iconfont icon-zhihu'></i>
<span>Gitee</span>
</a></div>
<div class='item tel'>
<a>
<i class='iconfont icon-tel'></i>
<span>售前及售后使用咨询：400-606-0201</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class='bottombar'>
<div class='ui container'>
<div class='ui d-flex d-flex-between'>
<div class='seven wide column partner d-flex'>
<div class='open-atom d-flex-center'>
<img alt="Logo openatom" class="logo-openatom mr-1" src="https://assets.gitee.com/assets/logo-openatom-d083391cc8a54e283529f3fc11cc38ca.svg" />
<a href="https://www.openatom.org/" target="_blank">开放原子开源基金会</a>
<div class='sub-title ml-1'>合作代码托管平台</div>
</div>
<div class='report-12377 d-flex-center ml-3'>
<img alt="12377@2x" class="report-12377__logo mr-1" src="https://assets.gitee.com/assets/12377@2x-1aa42ed2d2256f82a61ecf57be1ec244.png" />
<a href="https://12377.cn" target="_blank">违法和不良信息举报中心</a>
</div>
<div class='copyright ml-3'>
<a href="http://beian.miit.gov.cn/">粤ICP备12009483号</a>
</div>
</div>
<div class='nine wide column right aligned'>
<i class='icon world'></i>
<a href="/language/zh-CN">简 体</a>
/
<a href="/language/zh-TW">繁 體</a>
/
<a href="/language/en">English</a>
</div>
</div>
</div>
</div>
</footer>
<script>
  var officialEmail = $('#git-footer-email').text()
  $('#git-footer-main .icon-popup').popup({ position: 'bottom center' })
  $('#git-footer-email').text(officialEmail.replace('#', '@'))
  window.gon.popover_card_locale = {
    follow:"关注",
    unfollow:"已关注",
    gvp_title: "GVP - Gitee 最有价值开源项目",
    project: "项目",
    org: "开源组织",
    member: "",
    author: "作者",
    user_blocked: "该用户已被屏蔽或已注销",
    net_error: "网络错误",
    unknown_exception: "未知异常"
  }
  window.gon.select_message = {
    placeholder: "请输入个人空间地址或完整的邮箱地址"
  }
</script>
<script src="https://assets.gitee.com/webpacks/popover_card-5e5f80166768e5968f94.bundle.js"></script>


<div class='side-toolbar'>
<div class='button toolbar-help'>
<i class='iconfont icon-help'></i>
</div>
<div class='ui popup left center dark'>点此查找更多帮助</div>
<div class='toolbar-help-dialog'>
<div class='toolbar-dialog-header'>
<h3 class='toolbar-dialog-title'>搜索帮助</h3>
<form accept-charset="UTF-8" action="/help/load_keywords_data" class="toolbar-help-search-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
<div class='ui icon input fluid toolbar-help-search'>
<input name='keywords' placeholder='请输入产品名称或问题' type='text'>
<i class='icon search'></i>
</div>
</form>

<i class='iconfont icon-close toolbar-dialog-close-icon'></i>
</div>
<div class='toolbar-dialog-content'>
<div class='toolbar-help-hot-search'>
<div class='toolbar-roll'>
<a class="init active" href="https://oschina.gitee.io/learn-git-branching/?utm_source==gitee-help-widget" title="Git 命令在线学习"><i class='Blue icon icon-command iconfont'></i>
<span>Git 命令在线学习</span>
</a><a class="init " href="https://gitee.com/help/articles/4261?utm_source==gitee-help-widget" title="如何在 Gitee 导入 GitHub 仓库"><i class='icon icon-clipboard iconfont orange'></i>
<span>如何在 Gitee 导入 GitHub 仓库</span>
</a></div>
<div class='toolbar-list'>
<div class='toolbar-list-item'>
<a href="/help/articles/4114">Git 仓库基础操作</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4166">企业版和社区版功能对比</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4191">SSH 公钥设置</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4194">如何处理代码冲突</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4232">仓库体积过大，如何减小？</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4279">如何找回被删除的仓库数据</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4283">Gitee 产品配额说明</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4284">GitHub仓库快速导入Gitee及同步更新</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4328">什么是 Release（发行版）</a>
</div>
</div>
</div>
<div class='toolbar-help-search-reseult'>
<div class='toolbar-help-flex-column'>
<div class='ui centered inline loader toolbar-help-loader'></div>
<div class='toolbar-list'></div>
<div class='toolbar-help-link-to-help'>
<a href="" target="_blank">查看更多搜索结果</a>
</div>
</div>
</div>
</div>
</div>
<script>
  var opt = { position: 'left center'};
  var $helpSideToolbar = $('.button.toolbar-help');
  var $toolbarRoll = $('.toolbar-roll');
  
  $(function() {
    if (false) {
      $helpSideToolbar.popup(opt).popup({lastResort:'left center'})
    } else {
      $helpSideToolbar.popup({lastResort:'left center'}).popup('show', opt);
      setTimeout(function() {
        $helpSideToolbar.popup('hide', opt);
      }, 3000);
    }
  
    if ($toolbarRoll.length) {
      setInterval(function() {
        var $nextActiveLink = $toolbarRoll.find('a.active').next();
        if (!$nextActiveLink.length) {
          $nextActiveLink = $toolbarRoll.find('a:first-child');
        }
        $nextActiveLink.attr('class', 'active').siblings().removeClass('active init');
      }, 5000);
    }
  })
</script>

<div class='button share-link'>
<i class='iconfont icon-share'></i>
</div>
<div class='ui popup dark'>
<div class='header'>
分享到
</div>
<div class='bdsharebuttonbox' style='display: flex'>
<a class='iconfont icon-home-service-wechat' data-cmd='weixin' title='分享到微信'></a>
<a class='iconfont icon-weibo' data-cmd='tsina' title='分享到新浪微博'></a>
<a class='iconfont icon-qq' data-cmd='sqq' title='分享到QQ好友'></a>
<a class='iconfont icon-qzone' data-cmd='qzone' title='分享到QQ空间'></a>
</div>
</div>
<div class='toolbar-appeal popup button'>
<i class='iconfont icon-report'></i>
</div>
<div class='ui popup dark'>
仓库举报
</div>
<script>
  $('.toolbar-appeal').popup({ position: 'left center' });
</script>

<div class='button gotop popup' id='gotop'>
<i class='iconfont icon-top'></i>
</div>
<div class='ui popup dark'>回到顶部</div>
</div>
<div class='form modal normal-modal tiny ui' id='unlanding-complaint-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>
登录提示
</div>
<div class='container actions'>
<div class='content'>
该操作需登录 Gitee 帐号，请先登录后再操作。
</div>
<div class='ui orange icon large button ok'>
立即登录
</div>
<div class='ui button blank cancel'>
没有帐号，去注册
</div>
</div>
</div>
<script>
  var $elm = $('.toolbar-appeal');
  
  $elm.on('click', function() {
    var modals = $("#unlanding-complaint-modal.normal-modal");
    if (modals.length > 1) {
      modals.eq(0).modal('show');
    } else {
      modals.modal('show');
    }
  })
  $("#unlanding-complaint-modal.normal-modal").modal({
    onDeny: function() {
      window.location.href = "/signup?from=";
    },
    onApprove: function() {
      window.location.href = "/login?from=";
    }
  })
</script>

<style>
  .side-toolbar .bdsharebuttonbox a {
    font-size: 24px;
    color: white !important;
    opacity: 0.9;
    margin: 6px 6px 0px 6px;
    background-image: none;
    text-indent: 0;
    height: auto;
    width: auto;
  }
  
  #enterprises-index #udesk_btn a{
    margin: 0px 20px 217px 0px !important;
  }
</style>
<script>
  (function() {
    $('#project-user-message').popup({
      position: 'left center'
    });
  
  }).call(this);
</script>
<script>
  Gitee.initSideToolbar({})
</script>
<script>
  window._bd_share_config = {
    "common": {
      "bdSnsKey": {},
      "bdText": document.title,
      "bdMini": "1",
      "bdMiniList": ["bdxc","tqf","douban","bdhome","sqq","thx","ibaidu","meilishuo","mogujie","diandian","huaban","duitang","hx","fx","youdao","sdo","qingbiji","people","xinhua","mail","isohu","yaolan","wealink","ty","iguba","fbook","twi","linkedin","h163","evernotecn","copy","print"],
      "bdPic": "",
      "bdStyle": "1",
      "bdSize": "32"
    },
    "share": {}
  }
</script>
<script src="/bd_share/static/api/js/share.js"></script>




<script>
  (function() {
    this.__gac = {
      domain: 'www.oschina.net'
    };
  
  }).call(this);
</script>

</body>
</html>
