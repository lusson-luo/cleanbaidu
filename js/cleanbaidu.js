console.log("===");
/** 屏蔽百度的热点搜索 */
var baidu = document.getElementById("content_right");
if(baidu != undefined){
	baidu.style.display = "none";
	$("#rs").hide();
}
setTimeout("delayedDisplay()",500);
setTimeout("delayedDisplay()",1000);
$("#su").on("click",function(){
	setTimeout("delayedDisplay()",500);
	setTimeout("delayedDisplay()",1000);
});
$("#page a").click(function(){
	setTimeout("delayedDisplay()",500);
	setTimeout("delayedDisplay()",1000);
});
$("#kw").on("input",function(e){
	setTimeout("delayedDisplay()",500);
	setTimeout("delayedDisplay()",1000);
})
/** 延时屏蔽 */
function delayedDisplay() {
	if($("#content_right")!=undefined){
		$("#content_right").hide();
	}
	if($("#rs")!=undefined){
		$("#rs").hide();
	}
}
/** 屏蔽百度百科的V百科等 */
var vbaike = $(".side-content .lemmaWgt-promotion-vbaike");
if(vbaike.length == 1) {
	vbaike.hide();
}
var xg = $(".side-content .lemmaWgt-sideRecommend");
if(xg.length == 1) {
	xg.hide();
}
var movieSide = $(".side-content .lemmaWgt-promotion-slide");
if(movieSide.length == 1){
	movieSide.hide();
}
/** 屏蔽知道日报 */
var zhidao = document.getElementById("qb-side");
if(zhidao != undefined){
	zhidao.style.display = "none";
}
$(".qb-side").hide();