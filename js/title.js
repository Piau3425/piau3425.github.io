var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    document.title = '不要離開我拉 😭';
    clearTimeout(titleTime);
  } else {
    document.title = '太棒拉！你終於回來了！😘';
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});