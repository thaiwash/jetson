_satellite.pushAsyncScript(function(event, target, $variables){
  //LinkedIn
_linkedin_partner_id = "2453586";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);

(function(){var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})();

var nvccode=_satellite.getVar('nv_country_code');
var purl=window.location.href;
if(nvccode!='cn'&&nvccode!='china'&&purl.indexOf('developer.nvidia.com/zh-cn')<0){
//Twitter
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
// Insert Twitter Pixel ID and Standard Event data below
twq('init','o4occ');
twq('track','PageView');
}
});
