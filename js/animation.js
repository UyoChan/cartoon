$(function(){
	$("header .p1").on("touchend",function(){
		window.history.back(-1);
	})
	$.ajax({
		url:"php/animation.php",
		data:{data:"http://japi.juhe.cn/comic/book?name=&type=&skip=&finish=&key=4215176caa7bc8ad8407795c1f83c5ff"},
		dataType:"json",
		type:"GET",
	}).done(function(data){
		var _data = data.result.bookList,
			html = "";
		// console.log(_data);
		for(var i=0;i<_data.length;i++){
			html += "<div><img src='"+_data[i].coverImg+"'><span>"+_data[i].area+"|"+_data[i].name+"|"+_data[i].type+"</span></div>"
		}
		$("section").html(html);
	})
})