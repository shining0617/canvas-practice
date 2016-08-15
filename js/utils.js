/**
 * Created by Administrator on 2015/11/9.
 */
if(!window.requestAnimationFrame){
    window.requestAnimationFrame=window.mozRequestAnimationFrame ||window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
        function( callback) {
            return window.setTimeout(callback, 1000 / 60);
        };
}
window.requestAnimFrame = function(){
	return (
		window.requestAnimationFrame       || 
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame    || 
		window.oRequestAnimationFrame      || 
		window.msRequestAnimationFrame     || 
		function(/* function */ callback){
			window.setTimeout(callback, 1000 / 60);
		}
	);
}();

window.cancelAnimFrame = function(){
	return (
		window.cancelAnimationFrame       || 
		window.webkitCancelAnimationFrame || 
		window.mozCancelAnimationFrame    || 
		window.oCancelAnimationFrame      || 
		window.msCancelAnimationFrame     || 
		function(id){
			window.clearTimeout(id);
		}
	);
}();
var utils={};
utils.CaptureMouse=function(element){
	var mouse={x:0,y:0};
	element.addEventListener("mousemove",function(e){
		var x,y;
		if(e.pageX||e.pageY){
			x=e.pageX;
			y=e.pageY;
		}else{
			x=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;
			y=e.clientY+document.body.scrollTop+document.documentElement.scrollTop;
		}
		x-=element.offsetLeft;
		y-=element.offsetTop;
		mouse.x=x;
		mouse.y=y;

	},false)
	return mouse;
}
utils.containPoint=function(rect,x,y){
	return !(x<rect.x||x>rect.x+rect.width||y<rect.y||y>rect.y+rect.height);
}