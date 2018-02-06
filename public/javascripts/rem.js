window.onload = function(){
    //---文档加载完调用getRem()
    getRem(1080,100);
};
window.onresize = function(){
    //---窗口或框架被调整大小发生变化
    getRem(1080,100);
};
function getRem(pwidth,prem){
    //---pwidth---UI图的宽度
    //---prem--自己设置的换算比例
    //获取html元素
    var html = document.getElementsByTagName("html")[0];
    //屏幕的宽度（兼容处理）
    var ScreenWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = ScreenWidth/pwidth*prem + "px";
}