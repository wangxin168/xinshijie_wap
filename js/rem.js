!function(e,t){function n(){var n=l.getBoundingClientRect().width;t=t||540,n>t&&(n=t);var i=100*n/e;r.innerHTML="html{font-size:"+i+"px;}"}var i,d=document,o=window,l=d.documentElement,r=document.createElement("style");if(l.firstElementChild)l.firstElementChild.appendChild(r);else{var a=d.createElement("div");a.appendChild(r),d.write(a.innerHTML),a=null}n(),o.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),o.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===d.readyState?d.body.style.fontSize="16px":d.addEventListener("DOMContentLoaded",function(e){d.body.style.fontSize="16px"},!1)}(750,750);
function go(){
	window.history.go(-1);
}
function getQueryString(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			var q = window.location.pathname.substr(1).match(reg_rewrite);
			if (r != null) {
				return unescape(r[2]);
			} else if (q != null) {
				return unescape(q[2]);
			} else {
				return null;
			}
		}