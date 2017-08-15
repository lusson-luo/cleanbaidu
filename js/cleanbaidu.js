/** 屏蔽百度的热点搜索 */
var baidu = document.getElementById("content_right");
if(baidu != undefined){
	baidu.style.display = "none";
}
$("#su").on("click",function(){
	setTimeout("$(\"#content_right\").hide();",500);
});
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